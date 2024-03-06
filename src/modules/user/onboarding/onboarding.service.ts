import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { CONSTANT } from 'src/common/constant';
import { ENUM } from 'src/common/enum';
import { RESPONSE_DATA, RESPONSE_MSG } from 'src/common/responses';
import { UserEntity } from 'src/entity/user.entity';
import { UserSession } from '../onboarding/interface/interface';
import { UserSessionEntity } from 'src/entity/userSession.entity';
import { GuardService } from 'src/guards/guards.service';
import {CreateClientDto, CreateOnboardingDto, DeviceParamsDto,LoginDto, OtpDto} from './dto/onboarding.do';
import { CreateUserSession, UserDetails } from '../onboarding/interface/interface';
import * as moment from 'moment';

@Injectable()
export class UserOnBoardingService {
  constructor(
    private readonly userEntity: UserEntity,
    private readonly guardService: GuardService,
    private readonly userSessionEntity: UserSessionEntity,
  ) {}

  async signUp(createOnboardingDto: CreateOnboardingDto) {
    const payload = { mobileNo: createOnboardingDto.mobileNo, mobileStatus: true, status: { $ne: ENUM.USER_PROFILE_STATUS.DELETED } };
    const userData = await this.userEntity.findOne(payload);
    if (userData) throw new ConflictException(RESPONSE_DATA.MOBILE_NO_ALREADY_EXIST);
    const otp = CONSTANT.BYPASS_OTP;
    createOnboardingDto.password = this.guardService.hashData(createOnboardingDto.password, CONSTANT.PASSWORD_HASH_SALT);
    const createUser = Object.assign(createOnboardingDto);
    createUser['otp'] = {
      otp: otp,
      expireTime: moment().add(CONSTANT.OTP_EXPIRE_TIME, 'minutes').toDate(),
      isVerified: false,
    };
    const data = await this.userEntity.create(createUser);
    return [RESPONSE_DATA.SUCCESS, { id: data._id }];
  }
  
  async verifyOtp(otpDto: OtpDto, deviceParamsDto: DeviceParamsDto) {
    let userData = await this.userEntity.findOne({ _id: otpDto.userId });
    if (userData.mobileStatus) throw new ConflictException(RESPONSE_DATA.MOBILE_NO_ALREADY_EXIST);

      if (userData.otp.otp != otpDto.otp && otpDto.otp != CONSTANT.BYPASS_OTP) {
        throw new BadRequestException(RESPONSE_MSG.INVALID_OTP);
      }

      const data: CreateClientDto = {
        userId: userData._id,
        firstName: userData.firstName,
        lastName: userData.lastName,
        fullName: userData.firstName + ' ' + userData.lastName,
        email: userData.email,
        mobileNo: userData.mobileNo,
      };
        
    const addSessionData: CreateUserSession = {
      userId: userData?._id,
      ipAddress: deviceParamsDto?.ip,
      status: ENUM.USER_PROFILE_STATUS.ACTIVE,
      platform: deviceParamsDto?.platform,
      deviceToken: deviceParamsDto?.devicetoken,
    };

    const sessionData = await this.userSessionEntity.createUserSession(addSessionData);

    const token = await this.guardService.jwtTokenGeneration({
      type: 'USER_LOGIN',
      sessionId: sessionData.id,
      userId: userData._id,
    });

    const deleteQuery = { mobileNo: userData.mobileNo, mobileStatus: false };
    await this.userEntity.deleteMany(deleteQuery);

    return [RESPONSE_DATA.SUCCESS, { token: token }];
  }
  
  async login(loginDto: LoginDto, deviceParamsDto: DeviceParamsDto) {
    let checkUser: UserDetails;
    checkUser = await this.userEntity.getUserDetails({ mobileNo: loginDto.mobileNo, mobileStatus: true });
    if (!checkUser) throw new BadRequestException(RESPONSE_MSG.USER_NOT_EXIST);
    if (checkUser.password !== this.guardService.hashData(loginDto.password, CONSTANT.PASSWORD_HASH_SALT))
      throw new BadRequestException(RESPONSE_MSG.INVALID_PASSWORD);
    await this.userEntity.updateOne({ mobileNo: loginDto.mobileNo },{});
    const payload: CreateUserSession = {
      userId: checkUser?._id,
      ipAddress: deviceParamsDto?.ip,
      status: ENUM.USER_PROFILE_STATUS.ACTIVE,
      platform: deviceParamsDto?.platform,
      deviceToken: deviceParamsDto?.devicetoken,
    };
    const sessionData = await this.userSessionEntity.createUserSession(payload);
    const token = await this.guardService.jwtTokenGeneration({
      type: 'USER_LOGIN',
      sessionId: sessionData.id,
      userId: checkUser._id,
    });
    return [
      RESPONSE_DATA.LOGIN,
      {
        token: token,
        role: checkUser.role,
        userId: checkUser._id,
      },
    ];
  }
}
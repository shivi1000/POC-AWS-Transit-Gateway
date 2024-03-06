import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { CONSTANT } from 'src/common/constant';
import { ENUM } from 'src/common/enum';
import { RESPONSE_MSG } from 'src/common/responses';
// import { ClientEntity } from 'src/entity/client.entity';
import { UserEntity } from 'src/entity/user.entity';
// import { VendorEntity } from 'src/entity/vendor.entity';
import { UserSessionEntity } from '../entity/userSession.entity';
@Injectable()
export class JwtUserStrategy extends PassportStrategy(Strategy, 'userPlandidJWT') {
  constructor(
    private readonly userEntity: UserEntity,
    private readonly userSessionEntity: UserSessionEntity,
    // private readonly clientEntity: ClientEntity,
    // private readonly vendorEntity: VendorEntity
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: CONSTANT.JWT_PASSWORD,
    });
  }

  async validate(payload: { userId: string; sessionId: string }) {
    if (payload) {
      const [userData, sessionData] = await Promise.all([
        this.userEntity.findOne({ _id: payload.userId }),
        this.userSessionEntity.findOne({ _id: payload.sessionId, status: ENUM.USER_PROFILE_STATUS.ACTIVE }),
      ]);
      if (!sessionData) throw new UnauthorizedException(RESPONSE_MSG.SESSION_EXPIRED);
      if (!userData) throw new UnauthorizedException(RESPONSE_MSG.USER_NOT_EXIST);
      else if (userData.status == ENUM.USER_PROFILE_STATUS.DELETED) throw new UnauthorizedException(RESPONSE_MSG.USER_NOT_EXIST);

      // if (userData.role == ENUM.PROFILE_TYPE.CLIENT) {
      //   const result = await this.clientEntity.findOne({ _id: userData.clientProfile });
      //   console.log('*******************   Session Validation End For User ******************************');
      //   const sessionUser = {
      //     sessionId: payload.sessionId,
      //     userId: payload.userId,
      //     userData: { ...result, ...userData },
      //     clientProfileId: result._id,
      //   };
      //   return sessionUser;
      // } else if (userData.role == ENUM.PROFILE_TYPE.VENDOR) {
      //   const result = await this.vendorEntity.findOne({ _id: userData.vendorProfile });
      //   console.log('*******************   Session Validation End For User ******************************');
      //   const sessionUser = {
      //     sessionId: payload.sessionId,
      //     userId: payload.userId,
      //     userData: { ...result, ...userData },
      //     vendorProfileId: result._id,
      //   };
      //   return sessionUser;
      // } 
      else throw new UnauthorizedException(RESPONSE_MSG.INVALID_AUTHORIZATION_TOKEN);
    } else throw new UnauthorizedException(RESPONSE_MSG.INVALID_AUTHORIZATION_TOKEN);
  }
}

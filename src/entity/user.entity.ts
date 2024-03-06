import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { IUser } from 'src/schema/user.schema';
import { Dao } from 'src/providers/database/dao.provider';
import { CreateOnboardingDto } from 'src/modules/user/onboarding/dto/onboarding.do';

@Injectable()
export class UserEntity extends Dao {
  constructor(@Inject('USER_MODEL') private userModel: Model<IUser>) {
    super(userModel);
  }

  async getUserDetails(payload: any, projection: any = {}) {
    return await this.findOne(payload, projection);
  }

  async create(createUserDto: CreateOnboardingDto) {
    const user = await this.saveData(createUserDto);
    return user;
  }
}

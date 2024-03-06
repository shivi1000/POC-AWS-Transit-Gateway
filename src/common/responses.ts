import { HttpStatus } from '@nestjs/common';

export const RESPONSE_MSG = {
  SUCCESS: 'Success.',
  LOGIN: 'Login Successfully.',
  ERROR: 'Something went wrong.',
  USER_NOT_EXIST: 'User not exists.',
  INVALID_OTP: 'Incorrect OTP.',
  MOBILE_NO_ALREADY_EXIST: 'Entered Phone number is associated with another account.',
  BANK_ACCOUNT_NOT_EXIST: 'Bank Account does not exist',
  BANK_ACCOUNT_ERROR: 'Please add your bank account before accept the shoot.',
  TAX_ERROR: 'Please add your tax details before accept the shoot.',
  BANK_ACCOUNT_ALREADY_EXIST: 'Bank Account already Exist',
  SESSION_EXPIRED: 'Session Expired.',
  INVALID_PASSWORD: 'Enter a valid password.',
  INVALID_AUTHORIZATION_TOKEN: 'Invalid authorization token.',
  VENDOR_NOT_EXIST: 'Photographer Not Exist.',
  BANK_ERROR: 'Account can not be verified.',
  TAX_1099_ERROR: 'Tax information not found.',
};

export const RESPONSE_DATA = {
  SUCCESS: {
    statusCode: HttpStatus.OK,
    message: RESPONSE_MSG.SUCCESS,
  },

  LOGIN: {
    statusCode: HttpStatus.OK,
    message: RESPONSE_MSG.LOGIN,
  },

  MOBILE_NO_ALREADY_EXIST: {
    statusCode: HttpStatus.BAD_REQUEST,
    message: RESPONSE_MSG.MOBILE_NO_ALREADY_EXIST,
  },

  BANK_ERROR: {
    statusCode: HttpStatus.BAD_REQUEST,
    message: RESPONSE_MSG.BANK_ERROR,
  },

  BANK_ACCOUNT_NOT_EXIST: {
    statusCode: HttpStatus.BAD_REQUEST,
    message: RESPONSE_MSG.BANK_ACCOUNT_NOT_EXIST,
  },
  BANK_ACCOUNT_ERROR: {
    statusCode: HttpStatus.BAD_REQUEST,
    message: RESPONSE_MSG.BANK_ACCOUNT_ERROR,
  },
  TAX_ERROR: {
    statusCode: HttpStatus.NOT_ACCEPTABLE,
    message: RESPONSE_MSG.TAX_ERROR,
  },

  BANK_ACCOUNT_ALREADY_EXIST: {
    statusCode: HttpStatus.BAD_REQUEST,
    message: RESPONSE_MSG.BANK_ACCOUNT_ALREADY_EXIST,
  },

  TAX_1099_ERROR: {
    statusCode: HttpStatus.NON_AUTHORITATIVE_INFORMATION,
    message: RESPONSE_MSG.TAX_1099_ERROR,
  },
};

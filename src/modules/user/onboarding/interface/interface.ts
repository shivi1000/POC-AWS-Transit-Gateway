export interface CreateUserSession {
    userId: string;
    ipAddress?: string;
    deviceType?: number;
    status?: number;
    platform?: string;
    deviceToken?: string;
  }

  export interface UserDetails {
    _id: string;
    email: string;
    status?: number;
    password: string;
    role: number;
    mobileStatus: boolean;
    clientProfile: string;
    vendorProfile: string;
    firstName?: string;
    lastName?: string;
  }

  export interface UserSession {
    sessionId: string;
    userId: string;
    userData: UserData;
    vendorProfileId?: string;
    clientProfileId?: string;
    deviceToken?: string;
    ipAddress?: string;
  }

  export interface UserData {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    mobileNo: string;
    status: number;
    role: number;
    password: string;
    vendorProfile: string;
    clientProfile: string;
    profilePic: string;
    fullName: string;
    stripeAccount?: any;
    stripeToken?: any;
    dob: Date;
  }
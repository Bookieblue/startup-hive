import { UserProfileType } from '@/lib/models/user/type';
type tokenType = {
  access: string;
  refresh: string;
};
export type LoginResponse = {
  token: tokenType;
  user: UserProfileType;
  is_email_verification_required?: boolean;
  message?: string;
};

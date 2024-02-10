import * as z from 'zod';

export const signupFormSchema = z
  .object({
    first_name: z.string().min(1, 'First name is required'),
    last_name: z.string().min(1, 'Last name is required'),
    email: z
      .string()
      .min(1, 'Email is required')
      .email('Incorrect email address'),
    password: z.string().min(8, 'Password is required'),
    confirm_password: z.string().min(8, 'Password confirmation is required'),
    country: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ['confirm_password'],
    message: 'Password do not match',
  });

export const otpSchema = z.object({
  otp: z.string().min(1, 'OTP is required').max(6),
});

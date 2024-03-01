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


export const onboardSchema = z.object({
    StartupName: z.string().min(1, 'Startup name is required'),
    domain: z.string().min(1, 'Domain is required'),
    email: z
      .string()
      .min(1, 'Email is required')
      .email('Incorrect email address'),
    country: z.string().min(1, 'Please select a country to display'),
    describeStartup: z
      .string()
      .min(10, 'Please describe your startup')
      .max(65, 'your startup is more than 65 characters'),
    companyField: z.string().min(1, 'Please select a field to display'),
    year: z.string().min(4, 'Valid Year is required').max(4, 'Invaild year'),
    tags: z.string().min(1, 'Tag is required'),
    image: z.string().min(1, 'Logo is required'),

})
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

export const LoginSchema = z.object({});

//submit startup schema
export const StartupSchema = z
  .object({
    startupName: z.string().min(1, 'Startup name is required'),
    domain: z.string().min(1, 'Webiste URL is required'),
    country: z.string().min(1, 'Country is required'),
    email: z
      .string()
      .min(1, 'Email is required')
      .email('Incorrect email address'),
  })
  .refine(
    (data) => {
      const emailDomain = data.email?.split('@')[1];
      const websiteUrl = data.domain?.toLowerCase();
      return emailDomain && websiteUrl && emailDomain.includes(websiteUrl);
    },
    {
      path: ['email'],
      message: 'Website URL must be contained in the corporate email',
    },
  );

//Startup Onboarding Schema
export const OnboardSchema = z
  .object({
    startup_name: z.string().min(1, 'Startup name is required'),
    domain: z.string().min(1, 'Domain is required'),
    email: z
      .string()
      .min(1, 'Email is required')
      .email('Incorrect email address'),
    country: z.string().min(1, 'Please select a country to display'),
    describe_startup: z
      .string()
      .min(10, 'Please describe your startup')
      .max(65, 'your startup is more than 65 characters'),
    company_field: z.string().min(1, 'Please select a field to display'),
    year: z.string().min(4, 'Valid Year is required').max(4, 'Invaild year'),
    tags: z.string().min(1, 'Tag is required'),
    image: z.string().min(1,'Image is required').url({ message: 'Invalid image URL' }),
  })
  .refine(
    (data) => {
      const emailDomain = data.email?.split('@')[1];
      const websiteUrl = data.domain?.toLowerCase();
      return emailDomain && websiteUrl && emailDomain.includes(websiteUrl);
    },
    {
      path: ['email'],
      message: 'Website URL must be contained in the corporate email',
    },
  );

//About startup schema
export const AboutSchema = z.object({
  about: z
    .string()
    .min(1, 'About your startup is required')
    .max(365, 'Your writeup is above 365 characters'),
});

//Startup services schema
export const ServicesSchema = z.object({
  services: z.string().min(1, 'Service is required'),
  tags: z.string().min(1, 'Tag is required'),
});

//Startup social link schema
export const SocialLinksSchema = z.object({
  facebook: z.string().optional(),
  tiktok: z.string().optional(),
  youtube: z.string().optional(),
  whatsapp: z.string().optional(),
  discord: z.string().optional(),
  twitter: z.string().optional(),
});

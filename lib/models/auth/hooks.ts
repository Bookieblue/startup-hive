'use client';
import { useMutation } from '@tanstack/react-query';
import { backendFetch } from '@/lib/core/client';

export const useMutateSignUp = (options?: object) => {
  const signUp = (data: any): Promise<any> =>
    backendFetch({
      endpoint: '/identity/register/',
      method: 'POST',
      body: data,
    });
  return useMutation({
    mutationFn: signUp,
    ...options,
  });
};

export const useMutateResendEmailConfirmationOTP = (options?: object) => {
  const resendOtp = (data: any): Promise<any> =>
    backendFetch({
      endpoint: '/identity/email/resend/',
      method: 'POST',
      body: data,
    });

  return useMutation({
    mutationFn: resendOtp,
    ...options,
  });
};

export const useMutateEmailConfirmation = (options?: object) => {
  const postEmailConfirmation = (data: any): Promise<any> =>
    backendFetch({
      endpoint: '/identity/email/confirmation/',
      method: 'POST',
      body: data,
    });

  return useMutation({
    mutationFn: postEmailConfirmation,
    ...options,
  });
};

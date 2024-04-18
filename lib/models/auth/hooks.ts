'use client';
import { useMutation } from '@tanstack/react-query';
import { LoginResponse } from '@/lib/models/auth/type';
import { backendFetch } from '@/lib/core/client';

export const useMutateLogin = (options?: object) => {
  const postLogin = (data: {
    email: string;
    password: string;
  }): Promise<LoginResponse> =>
    backendFetch({
      endpoint: '/identity/login/',
      method: 'POST',
      body: data,
    });

  return useMutation({
    mutationFn: postLogin,
    ...options,
  });
};

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

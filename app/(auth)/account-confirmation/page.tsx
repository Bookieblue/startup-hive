'use client';
import React from 'react';

import Button from '@/components/ui/button';
import ConfirmOtpForm from '@/components/forms/confirmOtp';
import { getLocalStorage } from '@/lib/core/localStorageUtil';
import { useMutateResendEmailConfirmationOTP } from '@/lib/models/auth/hooks';
import { errorFormat } from '@/lib/utils';
import { HIVE_ACCOUNT_EMAIL } from '@/lib/core/constant';
import { toast } from '@/components/ui/use-toast';

const AccountConfirmation = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const email = getLocalStorage(HIVE_ACCOUNT_EMAIL);

  const { mutate: mutateResendOTP } = useMutateResendEmailConfirmationOTP();

  const onResendOTP = () => {
    if (!email) return false;
    setIsLoading(true);
    mutateResendOTP(
      { email },
      {
        onSuccess: () => {
          setIsLoading(false);
          toast({
            description: 'OTP resent successfully',
            title: 'SUCCESS',
          });
        },
        onError: (error: any) => {
          setIsLoading(false);
          const message = errorFormat(error);
          toast({
            title: 'ERROR',
            description: message,
          });
        },
      },
    );
  };
  const options = {
    onClick: () => {
      onResendOTP();
    },
  };
  return (
    <div className="pt-10">
      <h2 className="text-gray-20 regular-24 lg:regular-34 pb-3 md:pb-5">
        Confirm OTP
      </h2>
      <p className="regular-18 lg:regular-20 ">
        Enter the 6 digit code sent to your email.
      </p>
      <p className="text-red-400 bg-yellow-50 w-full py-3 pl-5 rounded-md mt-5 hidden">
        Error! Seems there is an error in the detail you submitted.
      </p>
      <ConfirmOtpForm />
      <div className="flex gap-[30px] mt-9">
        <p className=""> Don’t get OTP? </p>

        <Button
          type={'button'}
          isLoading={isLoading}
          variant="primary !border-none"
          title="Resend here"
          options={options}
        />
      </div>
    </div>
  );
};

export default AccountConfirmation;

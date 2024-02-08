'use client';
import React from 'react';

import Image from 'next/image';
import Button from '@/components/ui/button';
import ConfirmOtpForm from '@/components/forms/confirmOtp';
import {
  getLocalStorage,
  removeLocalStorage,
} from '@/lib/core/localStorageUtil';
import { useMutateResendEmailConfirmationOTP } from '@/lib/models/auth/hooks';
import { errorFormat } from '@/lib/utils';
import { HIVE_ACCOUNT_EMAIL } from '@/lib/core/constant';
import { toast } from '@/components/ui/use-toast';

const ConfirmOtp = () => {
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
            title: 'Success',
          });
        },
        onError: (error: any) => {
          setIsLoading(false);
          const message = errorFormat(error);
          toast({
            title: 'Error',
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
  React.useEffect(() => {
    return () => {
      removeLocalStorage(HIVE_ACCOUNT_EMAIL);
    };
  }, []);
  return (
    <section className='max-container padding-container flex flex-col mt-20 bg-cream-50 gap-20 pt-5 lg:px-24 md:gap-28 lg:pt-10 xl:flex-row"'>
      <div className="relative">
        <div className="md:w-[80%] lg:w-1/2">
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
        <div className="hidden lg:flexEnd lg:block lg:w-1/2 border-2">
          <Image
            src="./africa-print.svg"
            alt="print"
            width={392}
            height={2000}
            className="absolute right-0 top-5 mr-32px"
          />
        </div>
      </div>
    </section>
  );
};

export default ConfirmOtp;

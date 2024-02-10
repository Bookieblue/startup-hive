'use client';

import Link from 'next/link';
import ConfirmOtpForm from '@/components/forms/confirmOtp';
import AfricanPrintImg from '@/components/ui/african-print-img';
import Logo from '@/components/ui/logo';

const ConfirmOtp = () => {
  return (
    <section className='max-container padding-container relative flex flex-col bg-cream-50 gap-10 pt-7 lg:px-24 lg:gap-10 2xl:pt-10 xl:flex-row"'>
      <Logo />
      <div>
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
          <p className="medium-16 mt-10 mb-28 lg:mb-48">
            Don’t get OTP?{' '}
            <Link href="/" className="text-lightred-50">
              Resend here
            </Link>
          </p>
        </div>
        <AfricanPrintImg />
      </div>
    </section>
  );
};

export default ConfirmOtp;

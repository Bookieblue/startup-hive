'use client';

import Image from 'next/image';
import Link from 'next/link';
import ConfirmOtpForm from '@/components/forms/confirmOtp';

const ConfirmOtp = () => {
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
          <p className="medium-16 mt-10 mb-28 lg:mb-48">
            Don’t get OTP?{' '}
            <Link href="/" className="text-lightred-50">
              Resend here
            </Link>
          </p>
        </div>
        <div className="hidden lg:flexEnd lg:block lg:w-1/2 border-2">
          <Image
            src="../../africa-print.svg"
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

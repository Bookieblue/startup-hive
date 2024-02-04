'use client';

import SignUpForm from '@/components/forms/signup';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <section className='max-container padding-container flex flex-col bg-cream-50 mt-20 gap-20 pt-5  lg:px-24 md:gap-28 lg:pt-10 xl:flex-row"'>
      <div className="relative flex">
        <div className="md:w-[80%] lg:w-1/2">
          <h2 className="text-gray-20 regular-24 lg:regular-34 pb-3 md:pb-5">
            Create account
          </h2>
          <p className="regular-18 lg:regular-20 ">
            Note! If you own a Startup, publish it from{' '}
            <Link href="/" className="underline text-lightred-50">
              here
            </Link>
          </p>
          <p className="text-red-400 bg-yellow-50 w-full py-3 pl-5 rounded-md mt-5 hidden">
            Error! Seems there is an error in the detail you submitted.
          </p>
          <SignUpForm />
          <p className="medium-16 mt-10 mb-14">
            Do you have an account?{' '}
            <Link href="./login" className="text-lightred-50">
              Login here
            </Link>
          </p>
        </div>
        <div className="hidden lg:flexEnd lg:block lg:w-1/2">
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

export default page;

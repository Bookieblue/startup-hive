'use client';

import Link from 'next/link';
import React, { FormEvent, useState } from 'react';
import ResetPasswordForm from '@/components/forms/resetPassword';
import Logo from '@/components/ui/logo';

const ResetPassword = () => {
  return (
    <section className="max-container padding-container pb-30 bg-cream-50 gap-10 pt-7 lg:gap-10 2xl:pt-10">
      <div>
        <div className="african-print" />
        <Logo />
        <div className="lg:w-[50%]">
          <div className="pt-10">
            <h2 className="text-gray-20 regular-24 lg:regular-34 pb-3 md:pb-5">
              Reset password
            </h2>
            <p className="text-red-400 bg-yellow-50 w-full py-3 pl-5 rounded-md mt-5 hidden">
              Error! Seems there is an error in the detail you submitted.
            </p>
            <ResetPasswordForm />
            <p className="medium-16 mt-10 mb-28 lg:mb-48">
              Don’t have an account?{' '}
              <Link href="./signup" className="text-lightred-50">
                Create account here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;

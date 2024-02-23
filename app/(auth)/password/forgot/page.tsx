'use client';

import React from 'react';
import SetPasswordForm from '@/components/forms/setPassword';

const SetPassword = () => {
  return (
    <div className="pt-10">
      <h2 className="text-gray-20 regular-24 lg:regular-34 pb-3 md:pb-5">
        Reset password
      </h2>
      <p className="text-red-400 bg-yellow-50 w-full py-3 pl-5 rounded-md mt-5 hidden">
        Error! Seems there is an error in the detail you submitted.
      </p>
      <SetPasswordForm />
    </div>
  );
};

export default SetPassword;

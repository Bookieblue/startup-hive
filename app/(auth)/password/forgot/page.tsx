"use client";

import React from "react";
import SetPasswordForm from "@/components/forms/setPassword";
import Logo from "@/components/ui/logo";
import AfricanPrintImg from "@/components/ui/african-print-img";



const SetPassword = () => {

  return (
    <section className='max-container padding-container relative flex flex-col bg-cream-50 gap-10 pt-7 lg:px-24 lg:gap-10 2xl:pt-10 xl:flex-row"'>
    <Logo />
    <div>
      <div className="md:w-[80%] lg:w-1/2">
        <h2 className="text-gray-20 regular-24 lg:regular-34 pb-3 md:pb-5">
         Set new password
        </h2>
        <p className="text-red-400 bg-yellow-50 w-full py-3 pl-5 rounded-md mt-5 hidden">
            Error! Seems there is an error in the detail you submitted.
        </p>
        <SetPasswordForm />
      </div>
       <AfricanPrintImg />
      </div>
    </section>
  )
}

export default SetPassword
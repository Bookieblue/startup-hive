"use client"
import ClaimStartupForm from '@/components/forms/claimStartup';
import SuggestStartupForm from '@/components/forms/suggestStartup';
import Logo from '@/components/ui/logo';
import Link from 'next/link';
import React from 'react';


const page = () => {
  return (
    <section className="max-container padding-container pb-30 bg-cream-50 gap-10 pt-7 lg:gap-10 2xl:pt-10">
     <div>
      <div className="african-print-2" />
       <Logo />
    <div className="lg:w-[55%]">
      <div className="">
        <h2 className="text-gray-20 regular-24 mt-10 lg:regular-34 pb-3 md:pb-5">
        Suggest startup
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
        <SuggestStartupForm  />
      </div>
    </div>
    </div>
  </section>
  )
}

export default page
"use client"
import ClaimStartupForm from '@/components/forms/claimStartup';
import React from 'react';


const page = () => {
  return (
    <section className="max-container padding-container bg-cream-50 gap-10 pt-7 lg:px-24 lg:gap-10 2xl:pt-10 ">
    <div>
    <div className="african-print mr-28 mt-32" />
    <div className="lg:w-[55%]">
      <div className="pt-14">
        <h2 className="text-gray-20 regular-24 mt-10 lg:regular-34 pb-3 md:pb-5">
        Claim your startup
        </h2>
        <p className="regular-18 lg:regular-20 mb-8 ">
        We’re happy you want the world to know about your startup{' '}
        </p>
        <p className="text-red-400 bg-yellow-50 w-full py-3 pl-5 rounded-md mt-5 hidden">
          Error! Seems there is an error in the detail you submitted.
        </p>
        <ClaimStartupForm />
      </div>
    </div>
    </div>
  </section>
  )
}

export default page
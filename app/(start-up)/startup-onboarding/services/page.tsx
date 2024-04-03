"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StartUpServicesForm from '@/components/forms/startUpServices';


const page = () => {
  return (
    <section className="max-container padding-container bg-cream-50 gap-10 pt-7 lg:px-24 lg:gap-10 2xl:pt-10 ">
    <div>
    <div className="african-print mr-24 mt-32" />
    <div className="lg:w-[55%]">
      <div className="pt-14">
        <div className='flex gap-5'>
        <Link href="./about" className="text-lightred-50">
        <Image
          src="/arrow.svg"
          alt="logo"
          width={25}
          height={25}
          className='mt-12 lg:mt-14'
        />
        </Link>
        <h2 className="text-gray-20 regular-24 mt-10 lg:regular-34 pb-3 md:pb-5">
        List & explain your services
        </h2>
        </div>
        <p className="regular-18 mb-5 ">
        Let the world knows what they can acheive with your startup services & features.{' '}
            <Link href="/" className="underline text-lightred-50">
            See example here
            </Link>
          </p>
        <p className="text-red-400 bg-yellow-50 w-full py-3 pl-5 rounded-md mt-5 hidden">
          Error! Seems there is an error in the detail you submitted.
        </p>
        <StartUpServicesForm />
      </div>
    </div>
    </div>
  </section>
  )
}

export default page;
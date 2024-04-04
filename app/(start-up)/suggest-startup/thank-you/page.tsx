'use client';

import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <section className="max-container padding-container flexCenter pb-30 flex-col bg-cream-50 pt-7 2xl:pt-10">
        <div className="mt-20">
          <h2 className="text-gray-20 text-center regular-24 mt-10 lg:regular-34 pb-3 md:pb-5">
            Thank you for contributing to Startup Hive
          </h2>
          <p className="regular-18 text-center lg:regular-20 ">
            We really appreciate you contributing to the growth of Africa.
          </p>
          <div className='flexCenter'>
          <div className="mt-5 mb-32 ">
            <div className="flex gap-1 cursor-pointer">
              <p className="text-gray-30 regular-16">
                Discover Startups in Africa
              </p>
              <Image
                src="/dropdown-menu.svg"
                alt="arrowdown"
                width={20}
                height={20}
              />
            </div>
            <hr className="border border-gray-30 w-full rounded-sm" />
          </div>
          
          </div>
        </div>
       
    </section>
  );
};

export default page;

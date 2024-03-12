import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const page = () => {
  return (
    <section className="max-container padding-container flex flexBetween bg-cream-50 gap-10 pt-7 lg:px-24 lg:gap-10 2xl:pt-10 ">
      <div className="pt-14">
        <div className="flex gap-5">
            <Image
              src="/profile-pic.svg"
              alt="profile"
              width={70}
              height={70}
              className="mt-12 lg:mt-14"
            />
          <div>
            <h2 className="text-gray-20 regular-24 mt-12 lg:regular-34">
              Ifeoluwa Ajetomobi
            </h2>
            <p className="regular-16">Nigeria</p>
          </div>
        </div>
        <p className="bg-gray-20 text-cream-50 w-full py-3 pl-5 rounded-md mt-5">
          Note! If you own a Startup, publish it from{' '}
          <Link href="/" className="text-yellow-50 underline">
            here
          </Link>
        </p>
        <p className='mt-10 regular-18'>
          Discover Nigeria startups from  <Link href="/" className="text-lightred-50 underline">
            here
          </Link>
        </p>
      </div>
      <div className='bg-gray-20 w-[30%] h-96 padding-container'>
      <Image
              src="/ad-pic.svg"
              alt="ads"
              width={8000}
              height={1000}
              className=""
        />
      </div>
    </section>
  );
};

export default page;

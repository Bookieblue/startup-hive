import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FOOTER_INFO_LINKS, FOOTER_LINKS, SOCIAL_LINKS } from '@/app/constants';

const Footer = () => {
  return (
    <footer
      className="max-container
    padding-container w-full py-6 bg-cream-50 2xl:relative"
    >
      <div className="flexCenter flex-col gap-8 mt-5">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={253} height={29} />
        </Link>
        <p className="regular-16 text-gray-30">
          Discover the impact of our fellows 😍
        </p>
        <div className="flex -space-x-4 gap-6 overflow-hidden">
          {SOCIAL_LINKS.map((link) => (
            <Link href={link.url}>
            <Image
              src={link.icon}
              key={link.icon}
              alt="social_links"
              width={25}
              height={40}
            />
            </Link>
          ))}
        </div>
        <div className="flex gap-4 mb-8 items-center">
          {FOOTER_INFO_LINKS.map((link, index) => (
            <Link
              href={link.url}
              key={index}
              className={
                index === 1
                  ? 'flex regular-12 md:regular-14 lg:regular-16 text-lightred-50'
                  : 'flex regular-12 md:regular-14 lg:regular-16 text-gray-30'
              }
            >
              {link.title}
              <Image
                src="/arrow-right.svg"
                alt="social_links"
                width={25}
                height={40}
                className="mt-0.5"
              />
            </Link>
          ))}
        </div>
      </div>
      <hr className='border-gray-40'/>
      <div className="flexBetween mt-3 lg:mt-5 flex-col lg:flex-row lg:mx-24">
        <p className="regular-12 md:regular-14 text-gray-20 mb-3 lg:mt-0">
          © 2023 The Startup Hive. All rights reserved.
        </p>
        <div className="flex gap-4">
          {FOOTER_LINKS.map((link) => (
            <Link href="/" key={link} className=" regular-12 md:regular-14 text-gray-30">
              {link}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;


export const InnerFooter = () => {
  return <footer className="bg-gray-20 h-20 3xl:h-44 w-full"></footer>;
};

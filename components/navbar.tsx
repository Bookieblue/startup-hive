'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './ui/button';

const Navbar = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <nav
      className="flexBetween max-container
   padding-container w-full z-30 py-8 bg-cream-50 fixed 2xl:relative "
    >
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          width={253}
          height={29}
          className="w-[80%] lg:full"
        />
      </Link>
      <div className="flexEnd gap-5 lg:gap-10">
        <Image
          src="/search-icon.svg"
          alt="arrowdown"
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <ul className="hidden h-full gap-5 lg:flex">
          <div className="flex gap-1 cursor-pointer">
            <Image
              src="/african-icon.svg"
              alt="arrowdown"
              width={20}
              height={20}
            />
            <p className="text-gray-30 regular-16">All African</p>
            <Image
              src="/dropdown-menu.svg"
              alt="arrowdown"
              width={20}
              height={20}
            />
          </div>
          <Link href="./login">
            <p className="text-gray-30 regular-16">Login</p>
          </Link>
        </ul>
        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Submit Startup"
            variant="btn_black"
            isLoading={isLoading}
          />
        </div>
        <Image
          src="/hamburger.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer"
        ></Image>
      </div>
    </nav>
  );
};

export default Navbar;

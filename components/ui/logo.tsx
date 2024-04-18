import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div>
       <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          width={253}
          height={29}
        />
      </Link>
    </div>
  );
};

export default Logo;

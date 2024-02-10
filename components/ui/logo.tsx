import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div>
     <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          width={190}
          height={20}
        />
      </Link>
    </div>
  )
}

export default Logo;
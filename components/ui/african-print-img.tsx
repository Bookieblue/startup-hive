import React from 'react'
import Image from 'next/image';


const AfricanPrintImg = () => {
  return (
    <div className="hidden lg:flexEnd lg:block lg:w-1/2">
            <Image
            src="/africa-print.svg"
            alt="print"
            width={392}
            height={2000}
            className="absolute right-24 top-0 mr-32px"
          />
    </div>
  )
}

export default AfricanPrintImg;
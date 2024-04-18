'use client';
import Image from 'next/image';
import React, { useState } from 'react';

type StartupItem = {
  name: string;
  icon: string;
  field: string;
  location: String;
  description: string;
  supports: number;
};

export const ExploreStartupItem = ({
  name,
  icon,
  field,
  location,
  description,
  supports,
}: StartupItem) => {
  const [support, setSupport] = useState(supports);
  const [isSupport, setisSupport] = useState(false);

  const SupportIcon = () => {
    setSupport(support + (isSupport ? -1 : 1));
    setisSupport(!isSupport);
  };

  return (
    <li className="w-full items-start list-none">
      <div className="flex justify-between items-center pt-5">
        <div className="flex">
          <div className="rounded-full pr-3">
            <Image src={icon} alt="map" width={50} height={28} className='max-[600px]:w-[150px]'/>
          </div>
          <div>
            <div className="flex gap-2">
              <p className="bold-18 text-white">{name}</p>
              <p className="text-gray-40 regular-12 mt-1.5">{field}</p>
            </div>
            <p className="regular-14 mt-2 text-gray-40">{description}</p>
            <p className="text-white regular-12">{location}</p>
          </div>
        </div>
        <hr className="border-l border-gray-30 h-20 mr-2 lg:mr-0" />
        <div
          className="flex flex-col items-center gap-3 max-md:mr-5 xl:mr-14"
          onClick={SupportIcon}
        >
          {isSupport ? (
            <Image
              src="/active-select.svg"
              alt="map"
              width={35}
              height={28}
              className="cursor-pointer"
            />
          ) : (
            <Image
              src="/non-active-select.svg"
              alt="map"
              width={30}
              height={28}
              className="cursor-pointer"
            />
          )}
          <p className="regular-16 text-gray-40">{support}</p>
        </div>
      </div>
      <hr className="border-gray-30 mt-5" />
    </li>
  );
};

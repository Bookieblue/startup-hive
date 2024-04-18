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

export const StartupItem = ({
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
      <li className="w-full items-start mb-3 list-none">
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="rounded-full pr-3">
              <Image src={icon} alt="map" width={50} height={28} />
            </div>
            <div>
              <div className="flex gap-2">
                <p className="bold-18 text-gray-50">{name}</p>
                <p className="text-gray-30 regular-12 mt-1.5">{field}</p>
              </div>
              <p className="regular-14 mt-2 text-gray-30">{description}</p>
              <p className="text-gray-50 regular-12">{location}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3" onClick={SupportIcon}>
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
            <p className="regular-16">{support}</p>
          </div>
        </div>
        <hr className="border-gray-40 mt-5" />
      </li>
    );
  };
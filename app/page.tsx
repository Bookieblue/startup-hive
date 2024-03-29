'use client';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import Image from 'next/image';
import {
  EXPLORE_STARTUPS,
  STARTUPS_COUNTRIES,
  TRENDING_COMPANIES,
} from '@/app/constants';
import { ExploreStartupItem } from '@/components/explore-startup/page';
import { TrendingCompanyItem } from '@/components/trending-companies/page';
import Button from '@/components/ui/button';
import React from 'react';
import { StartupCountriesItem } from '@/components/startup-countries/page';

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <>
      <Navbar />

      {/* hero section */}
      <section className="max-container padding-container flexCenter flex-col gap-6 mt-32 lg:justify-between relative">
        <div className="flex gap-2 mb-20">
          {STARTUPS_COUNTRIES.map((country, index) => (
            <li
              key={index}
              className={
                index === 0
                  ? 'bg-gray-50 text-gray-40 list-none border px-2 py-1 border-gray-30 rounded-3xl'
                  : 'list-none border border-gray-30 px-2 py-1 rounded-3xl  text-gray-30'
              }
            >
              <Link href={country.url} key={country.name}>
                <StartupCountriesItem name={country.name} icon={country.icon} />
              </Link>
            </li>
          ))}
        </div>
        <Image
          src="/left-african-print.svg"
          alt="african-print"
          width={100}
          height={100}
          className="absolute left-0 bottom-0"
        />
        <Image
          src="/right-african-print.svg"
          alt="african-print"
          width={800}
          height={100}
          className="absolute right-0 bottom-0"
        />
        <h1 className="bold-54 text-center">
          Discover unicorns & emerging Startups in Africa
        </h1>
        <p>
          Let’s share & discuss our amazing startups in Africa making a
          difference.
        </p>
        <Button
          type="button"
          title="Suggest Startup"
          variant="btn_lightred"
          isLoading={isLoading}
        />
        <p className="mb-10">Takes just 2 min. 100% free</p>
      </section>

      {/* middle section */}
      <section className="bg-gray-20 max-container padding-container lg:justify-between ">
        <div className="pt-10">
          <h3 className="text-white medium-24 text-center">
            Trending companies in November 2023
          </h3>
          <div className="mt-14 flex gap-10 ">
            {TRENDING_COMPANIES.map((company) => (
              <TrendingCompanyItem
                key={company.name}
                name={company.name}
                icon={company.icon}
                description={company.description}
                url={company.url}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[55%]">
            <h3 className="text-white medium-20 mt-10 ">
              Explore Startups in Africa
            </h3>
            <div className="mt-14 mb-40">
              {EXPLORE_STARTUPS.map((Startup) => (
                <Link href={Startup.url} key={Startup.name}>
                  <div className="hover:bg-gray-30 hover:shadow-md hover:px-5 hover:rounded-sm transform hover:scale-105 transition duration-300 ease-in-out">
                    <ExploreStartupItem
                      name={Startup.name}
                      icon={Startup.icon}
                      field={Startup.field}
                      location={Startup.location}
                      description={Startup.description}
                      supports={Startup.supports}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="bg-gray-20 mt-10">
            <Image src="/ad-pic.svg" alt="ads" width={300} height={100} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

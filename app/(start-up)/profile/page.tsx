import Link from 'next/link';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { STARTUPS, TRENDING_STARTUPS } from '@/app/constants';
import { TrendingStartupItem } from '@/components/trending-startup/page';
import { StartupItem } from '@/components/startup/page';

const page = () => {
  return (
    <section className="max-container padding-container flex flex-col lg:flex-row lg:justify-between bg-cream-50 pt-7 lg:px-24 lg:gap-10 2xl:pt-10 ">
      <div className="pt-6 lg:pt-14 lg:w-[55%]">
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
        <p className="bg-gray-20 text-cream-50 sm:w-[400px] py-3 pl-5 rounded-md mt-5">
          Note! If you own a Startup, publish it from{' '}
          <Link href="/" className="text-yellow-50 underline">
            here
          </Link>
        </p>
        <p className="mt-8 regular-18">
          Discover Nigeria startups from{' '}
          <Link href="/" className="text-lightred-50 underline">
            here
          </Link>
        </p>
        <Tabs defaultValue="my-startups" className="mt-3">
          <TabsList>
            <TabsTrigger value="my-startups">My startups</TabsTrigger>
            <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
          </TabsList>
          <TabsContent
            value="my-startups"
            className="flex flex-col gap-2 mt-8 lg:mt-12"
          >
            {STARTUPS.map((Startup) => (
              <StartupItem
                key={Startup.name}
                name={Startup.name}
                icon={Startup.icon}
                field={Startup.field}
                location={Startup.location}
                description={Startup.description}
                supports={Startup.supports}
              />
            ))}
          </TabsContent>
          <TabsContent value="bookmarked" className="flex flex-col gap-2">
            {STARTUPS.map((Startup) => (
              <StartupItem
                key={Startup.name}
                name={Startup.name}
                icon={Startup.icon}
                field={Startup.field}
                location={Startup.location}
                description={Startup.description}
                supports={Startup.supports}
              />
            ))}
          </TabsContent>
        </Tabs>
      </div>
      <div className="bg-gray-20 lg:w-[35%] h-full p-5 mb-10 mt-6 lg:mt-0">
        <Image
          src="/ad-pic.svg"
          alt="ads"
          width={400}
          height={100}
          className="lg:pt-[70px]"
        />
        <h3 className="text-white medium-20 mt-10 ">
          Discover trending Startups
        </h3>
        <div className="mt-14">
          {TRENDING_STARTUPS.map((TrendingStartup) => (
            <TrendingStartupItem
              key={TrendingStartup.name}
              name={TrendingStartup.name}
              icon={TrendingStartup.icon}
              field={TrendingStartup.field}
              location={TrendingStartup.location}
              description={TrendingStartup.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;

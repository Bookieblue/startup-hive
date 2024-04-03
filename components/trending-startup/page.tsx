import Image from 'next/image';

type TrendingStartupItem = {
    name: string;
    icon: string;
    field: string;
    location: String;
    description: string;
  };
  
  export const TrendingStartupItem = ({
    name,
    icon,
    field,
    location,
    description,
  }: TrendingStartupItem) => {
    return (
      <li className="w-full items-start mb-3 list-none">
        <div className='flex'>
        <div className="rounded-full p-4 lg:p-7">
          <Image src={icon} alt="map" width={100} height={28} />
        </div>
        <div>
          <div className="flex gap-2">
            <p className="bold-18 text-white">{name}</p>
            <p className="text-gray-40 regular-12 mt-1.5">{field}</p>
          </div>
          <p className="regular-14 mt-5 text-gray-40">{description}</p>
          <p className="text-white regular-12">{location}</p>
        </div>
        </div>
        <hr className='border-gray-30 mt-5'/>
      </li>
      
    );
  };
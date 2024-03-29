import Image from 'next/image';
import Link from 'next/link';

type TrendingCompanyItem = {
  name: string;
  icon: string;
  description: string;
  url: string;
};

export const TrendingCompanyItem = ({
  name,
  icon,
  description,
  url,
}: TrendingCompanyItem) => {
  return (
    <li className="w-full mb-3 list-none">
      <div className="border border-gray-30 p-5 rounded-sm">
        <div className="flex gap-3">
          <Image src={icon} alt="map" width={50} height={28} />
          <div className="flex flex-col gap-2">
            <p className="bold-24 text-white">{name}</p>
            <div className='flex gap-5'>
                <p className='text-yellow-50 regular-16'>Review </p>
                <Link href={url}>
                 <Image src='/right-arrow.svg' alt="arrow" width={15} height={28} className='mt-1.5' />
                </Link>
            </div>
          </div>
        </div>
        <div>
          <p className="regular-16 mt-5 text-white">{description}</p>
        </div>
      </div>
    </li>
  );
};

import Image from 'next/image';

type StartupCountriesItem = {
  name: string;
  icon: string;
};

export const StartupCountriesItem = ({
  name,
  icon,
}: StartupCountriesItem) => {
  return (
    <div className='flex gap-3'>
        <Image src={icon} alt="map" width={20} height={28} /> 
        <p className='regular-16'>{name}</p>
    </div>
  );
};

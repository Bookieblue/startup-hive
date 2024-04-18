import Navbar from '@/components/navbar';
import React, { FC, ReactNode } from 'react';
interface FormLayoutProps {
  children: ReactNode;
}
const Formlayout: FC<FormLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <footer>
      <div className='bg-gray-20 h-52 w-full bottom-0 relative'></div>
      </footer>
    </div>
  );
};

export default Formlayout;

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
    </div>
  );
};

export default Formlayout;

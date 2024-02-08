import { Footer } from '@/components/footer';
import React, { FC, ReactNode } from 'react';
interface FormLayoutProps {
  children: ReactNode;
}
const Formlayout: FC<FormLayoutProps> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Formlayout;

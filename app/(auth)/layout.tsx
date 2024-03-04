import React, { FC, ReactNode } from 'react';
import Logo from '@/components/ui/logo';

interface AuthLayoutProps {
  children: ReactNode;
}
const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <section className="bg-cream-50 gap-10 overflow-y lg:overflow-y-hidden h-full lg:h-[100vh]">
      <div className="flex h-full">
        <div className="w-full md:w-[60%] lg:w-[60%]">
          <div className="py-10 px-10 md:px-24 lg:px-36 h-full">
            <Logo />
            {children}
          </div>
        </div>
        <div className="w-[40%] bg-bg-img bg-cover hidden md:block lg:block" />
      </div>
    </section>
  );
};

export default AuthLayout;

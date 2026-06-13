'use client';

import AppHeader from "./header";



const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <AppHeader />
        <main className=" p-6 mt-18 flex-1 overflow-y-auto">{children}</main>
   </>
  );
};

export default MainLayout;

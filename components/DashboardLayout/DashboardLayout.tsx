import React from 'react';
import DashboardSideBar from '../DashboardSideBar/DashboardSideBar';
import DashboardTopBar from '../DashboardTopBar/DashboardTopBar';
import { useRouter } from 'next/router';


interface IMyProps {
    children: React.ReactNode;
}

function DashboardLayout({ children}: IMyProps) {
    const router = useRouter();

  return (
    <>
        <DashboardSideBar  />

        <main 
            className={`h-full w-full transition-all duration-[400ms] bg-[#f2f7fc] lg:pl-80 pl-0`}
        >
            <div className="maxWidth">
                <div className="w-full h-auto">
                    <div className="pt-9 pb-9 pl-9 lg:pl-0 pr-9">{children}</div>
                </div>
            </div>
        </main>
    </>
  )
}

export default DashboardLayout;
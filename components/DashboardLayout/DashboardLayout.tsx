import React from 'react';
import DashboardSideBar from '../DashboardSideBar/DashboardSideBar';


interface IMyProps {
    children: React.ReactNode;
}

function DashboardLayout({ children}: IMyProps) {

  return (
    <>
        <DashboardSideBar  />

        <main 
            className={`h-full w-full transition-all duration-[400ms] bg-[#f2f7fc] lg:pl-[270px] xl:pl-80 pl-0`}
        >
            <div className="maxWidth">
                <div className="w-full h-auto">
                    <div className="pt-9 pb-9 pl-6 sm:pl-9 lg:pl-0 sm:pr-9 pr-6">{children}</div>
                </div>
            </div>
        </main>
    </>
  )
}

export default DashboardLayout;
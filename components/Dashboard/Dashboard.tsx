import React, { useState, useEffect, Fragment } from 'react';
import DashboardSideBar from '../DashboardSideBar/DashboardSideBar';
import DashboardTopBar from '../DashboardTopBar/DashboardTopBar';
import { Transition } from "@headlessui/react";



function Dashboard({children}: any) {
    const [showNav, setShowNav] = useState<boolean>(true);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    
    function handleReSize() {
        if(innerWidth < 1024){
            setShowNav(false);
            setIsMobile(true);
        }else {
            setShowNav(true);
            setIsMobile(false);
        }
    }
    

    useEffect(() => {
        if(typeof window != undefined){
            addEventListener("resize", handleReSize)
        }

        return () => {
            removeEventListener("resize", handleReSize)
        }
    }, []);

  return (
    <>
        <DashboardTopBar showNav={showNav} setShowNav={setShowNav} />
        <Transition
            as="div"
            show={showNav}
            enter="transform transition duration-[400ms]"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform duration-[400ms] transition ease-in-out"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
            className="fixed left-0 top-0 w-72 h-full z-30 bg-white shadow-md"
        >
            <DashboardSideBar showNav={showNav} setShowNav={setShowNav} />
        </Transition>

        <main 
            onClick={() => setShowNav(!showNav)}
            className={`min-h-screen w-full z-0 transition-all duration-[400ms] bg-[#f2f7fc] ${
                showNav && !isMobile ? 'pl-56' : "pl-0"
            }`}
        >
            <div className="maxWidth lg:pt-36 pt-16 pl-8 lg:pl-24 pr-8 lg:pr-16">{children}</div>
        </main>
    </>
  )
}

export default Dashboard;
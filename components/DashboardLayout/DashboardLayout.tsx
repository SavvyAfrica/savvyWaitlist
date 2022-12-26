import React, { useState, useEffect, Fragment } from 'react';
import DashboardSideBar from '../DashboardSideBar/DashboardSideBar';
import DashboardTopBar from '../DashboardTopBar/DashboardTopBar';



function DashboardLayout({children}: any) {
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

    function handleOnblur() {
        if(innerWidth < 1024){
            setShowNav(false);
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

    // Prevents child element from inheriting parent element's onClick
    const handleChildElementClick = (e: any) => {
        e.stopPropagation()
    }


  return (
    <>
        <DashboardSideBar showNav={showNav} setShowNav={setShowNav} />

        <main 
            onClick={handleOnblur}
            className={`h-full w-full transition-all duration-[400ms] bg-[#f2f7fc] ${
                showNav && !isMobile ? 'pl-80' : "pl-0"
            }`}
        >
            <div className="maxWidth">
                <DashboardTopBar showNav={showNav} setShowNav={setShowNav} />

                <div className="w-full h-auto">
                    <div className="pt-9 pb-9 pl-9 lg:pl-0 pr-9">{children}</div>
                </div>
            </div>
        </main>
    </>
  )
}

export default DashboardLayout;
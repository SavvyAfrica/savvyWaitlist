import React from 'react'
import DashboardSideBar from '../DashboardSideBar/DashboardSideBar'

interface IMyProps {
  children: React.ReactNode
}

function DashboardLayout({ children }: IMyProps) {
  return (
    <>
      <DashboardSideBar />

      <main
        className={`min-h-screen w-full transition-all duration-[400ms] bg-[#f2f7fc] lg:pl-[250px] xl:pl-50 pl-0 `}
      >
        <div className='maxWidth'>
          <div className='w-full h-auto'>
            <div className='pb-9 pl-4 pr-4'>{children}</div>
          </div>
        </div>
      </main>
    </>
  )
}

export default DashboardLayout

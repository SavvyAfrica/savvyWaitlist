import React from 'react'


interface IMyProp {
    children: React.ReactNode;
    className?: string;
}

function DashboardBox1({ children, className }: IMyProp) {
  return (
    <div className={`max-w-full h-full w-full bg-white rounded-2xl flex py-8 px-6 ${className}`}>
        {children}
    </div>
  )
}

export default DashboardBox1
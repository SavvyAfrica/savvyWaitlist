import React from 'react'


interface IMyProp {
    children: React.ReactNode;
    className?: string;
}

function DashboardBox2({ children, className }: IMyProp ) {
  return (
    <div className={`max-w-full h-full rounded-2xl w-full bg-white ${className}`}>
        {children}
    </div>
  )
}

export default DashboardBox2
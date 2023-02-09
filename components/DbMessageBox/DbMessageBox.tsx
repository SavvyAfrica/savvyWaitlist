import React from 'react'


interface IMyProp {
    children: React.ReactNode;
    className?: string;
}

function DbMessageBox({ children, className }: IMyProp) {
  return (
    <div className={`w-full bg-white rounded-2xl p-4 mb-[19px] ${className}`}>
        {children}
    </div>
  )
}

export default DbMessageBox;
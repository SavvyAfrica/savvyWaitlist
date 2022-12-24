import React from 'react'
import { Text } from '../typography/typography';


interface IMyProp {
    className?: string;
    productName: string;
    unitPrice: string;
    dueDate: string;
    currentDate: string;
    ctaBtn: React.ReactNode;
}

function DbTransactionBox(props: IMyProp) {
    const { className, productName, unitPrice, dueDate, currentDate, ctaBtn } = props

  return (
    <>
        <div className={`h-auto sm:h-[84px] bg-[#f9d7c026] py-2.5 px-3.5 rounded-xl ${className}`}>
            <div className="flex sm:flex-row flex-col items-center justify-center">
                <div className="sm:mr-auto mr-0 sm:mb-0 mb-6">
                    <Text variant='paragraph_3' className='font-medium text-[#A1A0BD] sm:text-left text-center'>{productName}</Text>
                    <span className="block paragraph_1 font-medium text-[#272727] sm:text-left text-center">{unitPrice}</span>
                    <p className="sm:text-[10px] text-[12px] font-medium leading-4 text-[#A1A0BD] sm:text-left text-center">{dueDate}</p>
                </div>

                <div className="sm:ml-auto ml-0">
                    <p className="sm:text-[10px] text-[12px] font-medium leading-4 opacity-50 text-[#2F294D] mb-1 sm:text-left text-center">{currentDate}</p>
                    <button className='bg-white w-[140px] h-[41px] rounded-lg flex justify-center items-center'>
                        <span className='inline-block text-sm font-medium text-[#0F2137]'>{ctaBtn}</span>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default DbTransactionBox
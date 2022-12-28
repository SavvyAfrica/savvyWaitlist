import React, { Dispatch, SetStateAction } from 'react'
import { Text } from '../typography/typography';


interface IMyProp {
    className?: string;
    productName: string;
    unitPrice: string;
    dueDate: string;
    currentDate: string;
    ctaBtn: string;
    swapOption2IsOpen: boolean;
    setSwapOption2IsOpen: Dispatch<SetStateAction<boolean>>;
}

function DbTransactionBox(props: IMyProp) {
    const { className, productName, unitPrice, dueDate, currentDate, ctaBtn, setSwapOption2IsOpen, swapOption2IsOpen } = props

  return (
    <>
        <div className={`h-auto sm:h-[84px] bg-[#f2f7fc] py-2.5 px-3.5 rounded-xl ${className}`}>
            <div className="flex sm:flex-row flex-col items-center justify-center">
                <div className="sm:mr-auto mr-0 sm:mb-0 mb-6">
                    <Text variant='paragraph_3' className='font-medium text-[#A1A0BD] sm:text-left text-center'>{productName}</Text>
                    <span className="block paragraph_1 font-medium text-[#272727] sm:text-left text-center">{unitPrice}</span>
                    <p className="sm:text-[10px] text-[12px] font-medium leading-4 text-[#A1A0BD] sm:text-left text-center">{dueDate}</p>
                </div>

                <div className="sm:ml-auto ml-0">
                    <p className="sm:text-[10px] text-[12px] font-medium leading-4 opacity-50 text-[#2F294D] mb-1 sm:text-left text-center">{currentDate}</p>
                    <button 
                        className='bg-white hover:bg-[#dcebf9] w-[140px] h-[41px] rounded-lg flex justify-center items-center'
                        onClick={() => setSwapOption2IsOpen(!swapOption2IsOpen)}
                    >
                        <span className='inline-block text-sm font-medium text-[#0F2137]'>{ctaBtn}</span>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default DbTransactionBox
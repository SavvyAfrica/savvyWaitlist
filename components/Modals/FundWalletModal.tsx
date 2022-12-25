import React, { Dispatch, SetStateAction } from 'react'
import { Button } from '../button/button'
import { Text } from '../typography/typography'


interface IMyProp {
    fundWalletIsOpen: boolean;
    setFundWalletIsOpen: Dispatch<SetStateAction<boolean>>;
}

function FundWalletModal({setFundWalletIsOpen, fundWalletIsOpen}: IMyProp) {
    
    // Prevents child element from inheriting parent element's onClick
    const handleChildElementClick = (e: any) => {
        e.stopPropagation()
    }

  return (
    <>
        <div 
            className="fixed z-50 left-0 top-0 w-full h-full bg-black opacity-75"
            onClick={() => setFundWalletIsOpen(!fundWalletIsOpen)}
        >
            <div 
                className="modal__content bg-[#FEFEFE] bg-red rounded-xl m-[8%] mx-auto max-w-[700px] lg:w-w-2/4 sm:w-4/6 w-full relative shadow-lg"
                onClick={(e) => handleChildElementClick(e)}
            >
                <div className="border-b-2 border-solid border-[#DFDFE6] flex justify-center items-center pt-6 pb-8 md:px-8 px-6">
                    <Text variant='paragraph_1' className='font-bold text-base md:text-xl text-[#0F2137] mr-auto'>Fund your Wallet</Text>
                    <span 
                        className="text-[#23262F] ml-auto mb-1.5 inline-block text-2xl font-bold hover:cursor-pointer"
                        onClick={() => setFundWalletIsOpen(!fundWalletIsOpen)}
                    >
                        &times;
                    </span>
                </div>

                <div className="py-8 pb-6 md:px-8 px-6 flex flex-col items-center justify-start">
                    <Text variant='paragraph_4' className='text-center text-[#2F294D] mb-7'>
                        Transfer the amount you want to use to rent or buy gadget to the 
                        account details below and your wallet will be funded. 
                    </Text>

                    <div className="mb-8 w-full bg-[#F6F6F6] flex flex-col items-center">
                        <span className="w-full inline-block py-1.5 px-2.5 font-normal text-center text-sm text-[#2F294D]">Wema Bank Plc</span>
                        <span className="w-full inline-block py-1.5 px-2.5 font-normal text-center text-sm text-[#2F294D]">3364501234</span>
                        <span className="w-full inline-block py-1.5 px-2.5 font-normal text-center text-sm text-[#2F294D]">Karim Adrei</span>
                    </div>

                    <Button className='w-full rounded-xl font-semibold text-center text-[#FFFFFF] text-xl sm:py-4 py-3 px-2.5 bg-[#00B0F0]'>Copy</Button>
                </div>
            </div>
        </div>
    </>
  )
}

export default FundWalletModal

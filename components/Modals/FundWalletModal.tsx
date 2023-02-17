import React from "react";
import { BiPlus } from "react-icons/bi";
import { Button } from "../Button/Button";
import { Text } from '../typography/typography';


function FundWalletModal({accountNumber, accountName, bankName}: any) {
    const [showModal, setShowModal] = React.useState(false);


    // Prevents child element from inheriting parent element's onClick
    const handleChildElementClick = (e: any) => {
        e.stopPropagation()
    }

  return (
    <>
        <Button
            className='w-[163px] border border-[#00B0f0] border-solid rounded-3xl py-2 px-4'
            onClick={() => setShowModal(true)}
        >
            <BiPlus className='mr-2' />
            Add Fund
        </Button>

        {showModal ? (
        <>
            <div
                onClick={() => setShowModal(false)}
                className="left-0 top-0 overflow-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div 
                    onClick={(e) => handleChildElementClick(e)} 
                    className="relative modal__content max-w-[560px] my-6 mx-auto"
                >

                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                        {/*header*/}
                        <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <Text variant='paragraph_1' className='font-bold text-base md:text-xl text-[#0F2137] mr-auto'>Fund your Wallet</Text>
                            <span 
                                className="text-[#23262F] ml-auto my-1.5 inline-block text-2xl font-bold hover:cursor-pointer"
                                onClick={() => setShowModal(false)}
                            >
                                &times;
                            </span>
                        </div>

                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <Text variant='paragraph_4' className='font-medium text-center text-[#2F294D] mb-7'>
                                Transfer the amount you want to use to rent or buy gadget to the 
                                account details below and your wallet will be funded. 
                            </Text>

                            <div className="mb-8 w-full bg-[#F6F6F6] rounded-lg flex flex-col items-center">
                                <span className="w-full inline-block py-1.5 px-2.5 font-normal text-center text-sm text-[#2F294D]">
                                    {bankName}
                                </span>
                                <span className="w-full inline-block py-1.5 px-2.5 font-normal text-center text-sm text-[#2F294D]">
                                    {accountNumber}
                                </span>
                                <span className="w-full inline-block py-1.5 px-2.5 font-normal text-center text-sm text-[#2F294D]">
                                    {accountName}
                                </span>
                            </div>

                            <Button 
                                className='button w-full rounded-xl font-semibold text-center py-2.5 px-4 bg-[#00B0F0]'
                            >
                                <Text variant='paragraph_4' className="font-bold text-white">Copy</Text>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
        </>
        ) : null}
    </>
  );
}

export default FundWalletModal;

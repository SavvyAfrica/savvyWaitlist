import React, { Dispatch, SetStateAction } from 'react'
import { Button } from '../button/button';
import { Text } from '../typography/typography'


interface IMyProp {
  renewOptionsIsOpen: boolean;
  setRenewOptionsIsOpen: Dispatch<SetStateAction<boolean>>;
}

function RenewOptionsModal({setRenewOptionsIsOpen, renewOptionsIsOpen}: IMyProp) {

  // Prevents child element from inheriting parent element's onClick
  const handleChildElementClick = (e: any) => {
    e.stopPropagation()
  }

  return (
    <>
      <div
        className="fixed z-50 left-0 top-0 w-full h-full bg-black opacity-75"
        onClick={() => setRenewOptionsIsOpen(!renewOptionsIsOpen)}
      >
        <div
          className="modal__content bg-[#FEFEFE] bg-red rounded-xl m-[8%] mx-auto max-w-[700px] lg:w-w-2/4 sm:w-4/6 w-full relative shadow-lg"
          onClick={(e) => handleChildElementClick(e)}
        >
          <div className="border-b-2 border-solid border-[#DFDFE6] flex justify-center items-center pt-6 pb-8 md:px-8 px-6">
            <Text variant='paragraph_1' className='font-bold text-base md:text-xl text-[#0F2137] mr-auto'>Choose an action</Text>
            <span 
              className="text-[#23262F] ml-auto mb-1.5 inline-block text-2xl font-bold hover:cursor-pointer"
              onClick={() => setRenewOptionsIsOpen(!renewOptionsIsOpen)}
            >
              &times;
            </span>
          </div>

          <div className="w-full py-8 pb-6 md:px-8 px-6">
            <div className="flex justify-center items-center mb-8">
              <span className="inline-block mr-auto">
                <Text variant='paragraph_3' className='font-semibold text-[#2F294D]'>IPhone 13 <br/> ₦39,700</Text>
              </span>

              <span className="inline-block ml-auto">
                <Text variant='paragraph_4' className='font-semibold text-xs text-[#2F294D]'>May 16, 2022 <br /> Rent due on Jun 16, 2022</Text>
              </span>
            </div>
            <div className=""></div>

            <Button className='py-2.5 px-4 mt-6 w-full flex-auto block bg-[#00B0F0] rounded'>
              <Text variant='paragraph_4' className="font-bold text-white">Continue</Text>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RenewOptionsModal
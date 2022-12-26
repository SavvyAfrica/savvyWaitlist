import React, { Dispatch, SetStateAction, useState } from 'react'
import { Text } from '../../typography/typography'
import { BsArrowLeft } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'
import { Input } from '../../inputField/inputField'
import { Label } from '../../inputFieldLabel/inputFieldLabel'
import { Button } from '../../button/button'


interface IMyProp {
  verifyEmpCompanyIsOpen: boolean;
  setVerifyEmpCompanyIsOpen: Dispatch<SetStateAction<boolean>>;
}


// Prevents child element from inheriting parent element's onClick
const handleChildElementClick = (e: any) => {
  e.stopPropagation()
}

function VerifyEmployeeCompanyModal({setVerifyEmpCompanyIsOpen, verifyEmpCompanyIsOpen}: IMyProp) {


  return (
    <>
      <div
        className="fixed z-50 left-0 top-0 w-full h-full overflow-auto bg-black opacity-75"
        onClick={() => setVerifyEmpCompanyIsOpen(!verifyEmpCompanyIsOpen)}
      >
        <div 
          className="modal__content bg-[#FEFEFE] bg-red rounded-xl m-[8%] mx-auto max-w-[700px] lg:w-w-2/4 sm:w-4/6 w-full relative shadow-lg"
          onClick={(e) => handleChildElementClick(e)}
        >
          <div className="pb-8 border-b-2 border-solid border-[#DFDFE6] flex justify-center items-center pt-6 pb-8 md:px-8 px-6">
            <BsArrowLeft className='mr-5 text-lg cursor-pointer' />
            <Text variant='paragraph_1' className='font-bold text-base md:text-xl text-[#0F2137] mr-auto'>
              Verify your company's details.
            </Text>
            <span 
              className="text-[#23262F] ml-auto mb-1.5 inline-block text-2xl font-bold cursor-pointer"
              onClick={() => setVerifyEmpCompanyIsOpen(!verifyEmpCompanyIsOpen)}
            >
              &times;
            </span>
          </div>

          <div className="w-full py-8 pb-6 md:px-8 px-6">
            <Text variant='paragraph_3' className='font-medium text-center'>Kindly fill in the information below.</Text>
            <form className="w-full flex flex-col items-center justify-start mt-8">
              <div className="pb-1.5 mb-1.5 md:w-11/12 w-full">
                <Label htmlFor='bvn'>
                  <Text variant='paragraph_4' className='font-semibold'>Bank Verification Number (BVN)*</Text>
                </Label>
                <Input id='bvn' name='bvn' type='text' />
              </div>

              <div className="pb-1.5 mb-1.5 md:w-11/12 w-full">
                <Label htmlFor='compRole'>
                  <Text variant='paragraph_4' className='font-semibold'>what's your role in the company?*</Text>
                </Label>
                <Input id='compRole' name='compRole' type='text' />
              </div>

              <div className="pb-1.5 mb-1.5 md:w-11/12 w-full"> 
                <Label htmlFor='compReg'>
                  <Text variant='paragraph_4' className='font-semibold'>What's the company's registration number?*</Text>
                </Label>
                <Input id='compReg' name='compReg' type='text' />
              </div>

              <div className="pb-1.5 mb-1.5 md:w-11/12 w-full">
                <Label htmlFor='compLoc'>
                  <Text variant='paragraph_4' className='font-semibold'>Where is the company located?*</Text>
                </Label>
                <Input id='compLoc' name='compLoc' type='text' />
              </div>

              <div className="pb-1.5 mb-1.5 md:w-11/12 w-full">
                <Label htmlFor='email'>
                  <Text variant='paragraph_4' className='font-semibold'>Upload a valid registration document*</Text>
                </Label>
                <Input id='email' name='email' type='file' />
              </div>

              <Button className='mb-3 mt-1 md:w-11/12 w-full flex-auto block bg-[#E6F0FB] p-4 rounded flex justify-center items-center'>
                <Text variant='paragraph_4' className="font-semibold sm:text-sm text-xs text-[#2F294D] sm:mr-auto mr-0">Connect Bank Statement</Text>
                <BsArrowRight className='sm:ml-auto ml-0 sm:block hidden' />
              </Button>

              <Button className='py-2.5 px-4 mt-6 w-full flex-auto block bg-[#00B0F0] rounded'>
                <Text variant='paragraph_4' className="font-bold text-white">Submit</Text>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default VerifyEmployeeCompanyModal
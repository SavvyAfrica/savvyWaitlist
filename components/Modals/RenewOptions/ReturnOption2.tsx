import React, { Dispatch, SetStateAction, useState } from 'react'
import { Text } from '../../typography/typography'
import { BsArrowLeft } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'
import { Input } from '../../inputField/inputField'
import { Label } from '../../inputFieldLabel/inputFieldLabel'
import { Button } from '../../button/button'


interface IMyProp {
  return_EndOptionIsOpen: boolean;
  setReturn_EndOptionIsOpen: Dispatch<SetStateAction<boolean>>;
}


// Prevents child element from inheriting parent element's onClick
const handleChildElementClick = (e: any) => {
  e.stopPropagation()
}

function Return_EndOptionModal({setReturn_EndOptionIsOpen, return_EndOptionIsOpen}: IMyProp) {


  return (
    <>
      <div
        className="fixed z-50 left-0 top-0 w-full h-full overflow-auto bg-black opacity-75"
        onClick={() => setReturn_EndOptionIsOpen(!return_EndOptionIsOpen)}
      >
        <div 
          className="modal__content bg-[#FEFEFE] bg-red rounded-xl m-[8%] mx-auto max-w-[700px] lg:w-w-2/4 sm:w-4/6 w-full relative shadow-lg"
          onClick={(e) => handleChildElementClick(e)}
        >
          <div className="pb-8 border-b-2 border-solid border-[#DFDFE6] flex justify-center items-center pt-6 pb-8 md:px-8 px-6">
            <BsArrowLeft className='mr-5 text-lg cursor-pointer' />
            <Text variant='paragraph_1' className='font-bold text-base md:text-xl text-[#0F2137] mr-auto'>
              I am returning the device today
            </Text>
            <span 
              className="text-[#23262F] ml-auto mb-1.5 inline-block text-2xl font-bold cursor-pointer"
              onClick={() => setReturn_EndOptionIsOpen(!return_EndOptionIsOpen)}
            >
              &times;
            </span>
          </div>

          <div className="w-full py-8 pb-6 md:px-8 px-6">
            <Text variant='paragraph_3' className='font-medium text-center'>
              Tell us your pickup location and contact <br /> information. We’ll give you a call.
            </Text>

            <form className="w-full flex flex-col items-center justify-start mt-8">
              <div className="pb-1.5 mb-1.5 md:w-11/12 w-full">
                <Label htmlFor='bvn'>
                  <Text variant='paragraph_4' className='font-semibold'>Address</Text>
                </Label>
                <Input id='bvn' name='bvn' type='text' />
              </div>

              <div className="pb-1.5 mb-1.5 md:w-11/12 w-full">
                <Label htmlFor='compRole'>
                  <Text variant='paragraph_4' className='font-semibold'>Phone Number</Text>
                </Label>
                <Input id='compRole' name='compRole' type='text' />
              </div>

              <div className="pb-1.5 mb-1.5 md:w-11/12 w-full"> 
                <Label htmlFor='compReg'>
                  <Text variant='paragraph_4' className='font-semibold'>Contact Person</Text>
                </Label>
                <Input id='compReg' name='compReg' type='text' />
              </div>

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

export default Return_EndOptionModal
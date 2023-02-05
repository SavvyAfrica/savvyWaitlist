import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Button } from "../../Button/Button";
import { Text } from '../../typography/typography';
import { Label } from '../../Label/Label';
import { Input } from "../../Input/Input";



function VerifyEmployeeCompanyModal() {
  const [showModal, setShowModal] = useState(false);


  function handleChange(event: any): void {
    throw new Error('Function not implemented.')
  }

  // Prevents child element from inheriting parent element's onClick
  const handleChildElementClick = (e: any) => {
    e.stopPropagation()
  }

  return (
    <>
        <div 
          className="w-[40px] h-[40px] rounded-full bg-[#F4F7FE] hover:bg-[#dcebf9] flex items-center justify-center sm:ml-auto ml-0 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <BsArrowRight />
        </div>

        {showModal ? (
        <>
            <div
              onClick={() => setShowModal(false)}
              className={`left-0 top-0 overflow-auto fixed inset-0 z-50 outline-none focus:outline-none`}
            >
                <div 
                  onClick={(e) => handleChildElementClick(e)} 
                  className="relative modal__content max-w-[560px] my-6 mx-auto"
                >

                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                        {/*header*/}
                        <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <BsArrowLeft className='mr-5 text-base cursor-pointer' />
                          <Text variant='paragraph_1' className='font-bold text-base md:text-xl text-[#0F2137] mr-auto'>
                            Verify your company's details.
                          </Text>
                          <span 
                            className="text-[#23262F] ml-auto my-1.5 inline-block text-2xl font-bold cursor-pointer"
                            onClick={() => setShowModal(false)}
                          >
                            &times;
                          </span>
                        </div>

                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <Text variant='paragraph_4' className='font-medium text-[#2F294D] text-center'>
                            Kindly fill in the information below.
                          </Text>
                          
                          <form className="w-full flex flex-col items-center justify-start mt-8">
                            <div className="pb-1.5 mb-1.5 md:w-11/12 w-full">
                              <Label htmlFor='bvn'>Bank Verification Number (BVN)*</Label>
                              <Input 
                                id='bvn' 
                                name='bvn' 
                                type='text' 
                                className={''} 
                                value={''} 
                                onChange={handleChange}
                              />
                            </div>

                            <div className="pb-1.5 mb-1.5 md:w-11/12 w-full">
                              <Label htmlFor='compRole'>what's your role in the company?*</Label>
                              <Input 
                                id='compRole' 
                                name='compRole' 
                                type='text' 
                                className={''} 
                                value={''} 
                                onChange={handleChange}
                               />
                            </div>

                            <div className="pb-1.5 mb-1.5 md:w-11/12 w-full"> 
                              <Label htmlFor='compReg'>What's the company's registration number?*</Label>
                              <Input 
                                id='compReg' 
                                name='compReg' 
                                type='text' 
                                className={''} 
                                value={''} 
                                onChange={handleChange} 
                              />
                            </div>

                            <div className="pb-1.5 mb-1.5 md:w-11/12 w-full">
                              <Label htmlFor='compLoc'>Where is the company located?*</Label>
                              <Input 
                                id='compLoc' 
                                name='compLoc' 
                                type='text' 
                                className={''} 
                                value={''} 
                                onChange={handleChange} 
                              />
                            </div>

                            <div className="pb-1.5 mb-1.5 md:w-11/12 w-full">
                              <Label htmlFor='email'>Upload a valid registration document*</Label>
                              <Input 
                                id='email' 
                                name='email' 
                                type='file' 
                                className={''} 
                                value={''} 
                                onChange={handleChange} 
                              />
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
            </div>
            <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
        </>
        ) : null}
    </>
  );
}

export default VerifyEmployeeCompanyModal;
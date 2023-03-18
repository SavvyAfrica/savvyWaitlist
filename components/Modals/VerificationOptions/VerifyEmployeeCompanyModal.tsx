import React, { useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { Button } from '../../button/button'
import { Text } from '../../typography/typography'
import { Label } from '../../Label/Label'
import { Input } from '../../Input/Input'

import useForm from '../../../Hooks/useForm'
import { userService } from '../../../services'

interface MyProps {
  setShowVerifyEmployeeCompModal: React.Dispatch<React.SetStateAction<boolean>>
}

function VerifyEmployeeCompanyModal({
  setShowVerifyEmployeeCompModal,
}: MyProps) {
  const [isLoading, setIsLoading] = useState(false)

  // Prevents child element from inheriting parent element's onClick
  const handleChildElementClick = (e: any) => {
    e.stopPropagation()
  }

  const {
    handleChange,
    employeeCompanyState,
    formErrors,
    handleEmployeeCompanySubmit,
  } = useForm(employeeCompanyForm)

  // Callback function when form is submitted!
  async function employeeCompanyForm(formData: any) {
    try {
      setIsLoading(true)
      // await userService.update(formData);
      // router.push('/login');
      // notify('Registration successful', 'success');
    } catch {
      // notify('Unsuccessful registration', 'error');
    }
  }

  return (
    <>
      <div
        // onClick={() => setShowVerifyEmployeeCompModal(false)}
        className={`left-0 top-0 overflow-auto fixed inset-0 z-50 outline-none focus:outline-none`}
      >
        <div
          onClick={(e) => handleChildElementClick(e)}
          className='relative modal__content max-w-[560px] my-6 mx-auto'
        >
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
              <BsArrowLeft className='mr-5 text-base cursor-pointer' />
              <Text
                variant='paragraph_1'
                className='font-bold text-base md:text-xl text-[#0F2137] mr-auto'
              >
                Verify your company's details.
              </Text>
              <span
                className='text-[#23262F] ml-auto my-1.5 inline-block text-2xl font-bold cursor-pointer'
                onClick={() => setShowVerifyEmployeeCompModal(false)}
              >
                &times;
              </span>
            </div>

            {/*body*/}
            <div className='relative p-6 flex-auto'>
              <Text
                variant='paragraph_4'
                className='font-medium text-[#2F294D] text-center'
              >
                Kindly fill in the information below.
              </Text>

              <form
                className='w-full flex flex-col items-center justify-start mt-8'
                onSubmit={handleEmployeeCompanySubmit}
              >
                <div className='pb-1.5 mb-1.5 md:w-11/12 w-full'>
                  <Label htmlFor='bvn'>
                    Bank Verification Number (BVN)
                    <span className='text-red-600'>*</span>
                  </Label>
                  <Input
                    id='bvn'
                    name='bvn'
                    type='tel'
                    className={` ${
                      formErrors.bvn ? 'border-red-600' : 'border-[#DFDFE6]'
                    } `}
                    value={employeeCompanyState.bvn}
                    onChange={handleChange}
                  />
                  {formErrors.bvn && (
                    <h3 className='text-red-600 text-xs pt-1'>
                      {formErrors.bvn}
                    </h3>
                  )}
                </div>

                <div className='pb-1.5 mb-1.5 md:w-11/12 w-full'>
                  <Label htmlFor='companyRole'>
                    what's your role in the company?
                    <span className='text-red-600'>*</span>
                  </Label>
                  <Input
                    id='companyRole'
                    name='companyRole'
                    type='text'
                    className={` ${
                      formErrors.companyRole
                        ? 'border-red-600'
                        : 'border-[#DFDFE6]'
                    } `}
                    value={employeeCompanyState.companyRole}
                    onChange={handleChange}
                  />
                  {formErrors.companyRole && (
                    <h3 className='text-red-600 text-xs pt-1'>
                      {formErrors.companyRole}
                    </h3>
                  )}
                </div>

                <div className='pb-1.5 mb-1.5 md:w-11/12 w-full'>
                  <Label htmlFor='companyReg'>
                    What's the company's registration number?
                    <span className='text-red-600'>*</span>
                  </Label>
                  <Input
                    id='companyReg'
                    name='companyReg'
                    type='text'
                    className={` ${
                      formErrors.companyReg
                        ? 'border-red-600'
                        : 'border-[#DFDFE6]'
                    } `}
                    value={employeeCompanyState.companyReg}
                    onChange={handleChange}
                  />
                  {formErrors.companyReg && (
                    <h3 className='text-red-600 text-xs pt-1'>
                      {formErrors.companyReg}
                    </h3>
                  )}
                </div>

                <div className='pb-1.5 mb-1.5 md:w-11/12 w-full'>
                  <Label htmlFor='companyLoc'>
                    Where is the company located?
                    <span className='text-red-600'>*</span>
                  </Label>
                  <Input
                    id='companyLoc'
                    name='companyLoc'
                    type='text'
                    className={` ${
                      formErrors.companyLoc
                        ? 'border-red-600'
                        : 'border-[#DFDFE6]'
                    } `}
                    value={employeeCompanyState.companyLoc}
                    onChange={handleChange}
                  />
                  {formErrors.companyLoc && (
                    <h3 className='text-red-600 text-xs pt-1'>
                      {formErrors.companyLoc}
                    </h3>
                  )}
                </div>

                <div className='pb-1.5 mb-1.5 md:w-11/12 w-full'>
                  <Label htmlFor='validDoc'>
                    Upload a valid registed document
                    <span className='text-red-600'>*</span>
                  </Label>
                  <input
                    id='validDoc'
                    name='validDoc'
                    type='file'
                    value={employeeCompanyState.validDoc}
                    onChange={handleChange}
                    aria-describedby='file_input'
                    title=' '
                    className={`block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 
                    dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 px-2 py-[6px]`}
                  />
                  <p
                    className='mt-1 md:text-sm text-xs text-gray-500 dark:text-gray-300'
                    id='file_input'
                  >
                    SVG, PNG, JPG or GIF (MAX. 800x400px).
                  </p>

                  {formErrors.validDoc && (
                    <h3 className='text-red-600 text-xs pt-1'>
                      {formErrors.validDoc}
                    </h3>
                  )}
                </div>

                {/* <Button className='mb-3 mt-1 md:w-11/12 w-full flex-auto block bg-[#E6F0FB] p-4 rounded-xl flex justify-center items-center'>
                  <Text variant='paragraph_4' className="font-semibold sm:text-sm text-xs text-[#2F294D] sm:mr-auto mr-0">Connect Bank Statement</Text>
                  <BsArrowRight className='sm:ml-auto ml-0 sm:block hidden' />
                </Button> */}

                <Button className='py-2.5 grow px-4 mt-6 w-full block bg-[#00B0F0] rounded-xl'>
                  <Text variant='paragraph_4' className='font-bold text-white'>
                    Submit
                  </Text>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-30 fixed inset-0 z-40 bg-black'></div>
    </>
  )
}

export default VerifyEmployeeCompanyModal

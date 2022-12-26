import React, { Dispatch, SetStateAction, useState } from 'react'
import { Text } from '../../typography/typography'
import { BsArrowLeft } from 'react-icons/bs'
import { Tab } from '@headlessui/react'
import { BsArrowRight } from 'react-icons/bs'
import { Input } from '../../inputField/inputField'
import { Label } from '../../inputFieldLabel/inputFieldLabel'
import { Button } from '../../button/button'


interface IMyProp {
  verifyEmp_StudIsOpen: boolean;
  setVerifyEmp_StudIsOpen: Dispatch<SetStateAction<boolean>>;
}


function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

// Prevents child element from inheriting parent element's onClick
const handleChildElementClick = (e: any) => {
  e.stopPropagation()
}

function VerifyEmp_StudModal({setVerifyEmp_StudIsOpen, verifyEmp_StudIsOpen}: IMyProp) {

  let [categories] = useState({
    Employee: [
      {
        id: 1,
        children: 'Bank Verification Number (BVN)*',
        htmlFor: 'bvn',
        inputId: 'bvn',
        name: 'bvn',
        type: 'number'
      },
      {
        id: 2,
        children: "What's your monthly income?*",
        htmlFor: 'income',
        inputId: 'income',
        name: 'income',
        type: 'number'
      },
      {
        id: 3,
        children: "What state do you live in or work?*",
        htmlFor: 'resident',
        inputId: 'resident',
        name: 'resident',
        type: 'text'
      },
      {
        id: 4,
        children: "What's your address?*",
        htmlFor: 'address',
        inputId: 'address',
        name: 'address',
        type: 'text'
      },
      {
        id: 5,
        children: 'Upload a valid ID*',
        htmlFor: 'idUpload',
        inputId: 'idUpload',
        name: 'idUpload',
        type: 'file',
      }
    ],
    Student: [
      {
        id: 1,
        children: 'Bank Verification Number (BVN)*',
        htmlFor: 'bvn',
        inputId: 'bvn',
        name: 'bvn',
        type: 'number'
      },
      {
        id: 2,
        children: "What's the name of your school?*",
        htmlFor: 'schoolName',
        inputId: 'schoolName',
        name: 'schoolName',
        type: 'text'
      },
      {
        id: 3,
        children: "What's your matric number?*",
        htmlFor: 'matricNumber',
        inputId: 'matricNumber',
        name: 'matricNumber',
        type: 'text'
      },
      {
        id: 4,
        children: "What's your address?*",
        htmlFor: 'address',
        inputId: 'address',
        name: 'address',
        type: 'text'
      },
      {
        id: 5,
        children: 'Upload your student ID*',
        htmlFor: 'idUpload',
        inputId: 'idUpload',
        name: 'idUpload',
        type: 'file'
      }
    ],
  })
  

  return (
    <>
      <div
        className="fixed z-50 left-0 top-0 w-full h-full overflow-auto bg-black opacity-75"
        onClick={() => setVerifyEmp_StudIsOpen(!verifyEmp_StudIsOpen)}
      >
        <div 
          className="modal__content bg-[#FEFEFE] bg-red rounded-xl m-[8%] mx-auto max-w-[700px] lg:w-w-2/4 sm:w-4/6 w-full relative shadow-lg"
          onClick={(e) => handleChildElementClick(e)}
        >
          <div className="pb-8 border-b-2 border-solid border-[#DFDFE6] flex justify-center items-center pt-6 pb-8 md:px-8 px-6">
            <BsArrowLeft className='mr-5 text-lg cursor-pointer' />
            <Text variant='paragraph_1' className='font-bold text-base md:text-xl text-[#0F2137] mr-auto'>
              Verify your personal details.
            </Text>
            <span 
              className="text-[#23262F] ml-auto mb-1.5 inline-block text-2xl font-bold cursor-pointer"
              onClick={() => setVerifyEmp_StudIsOpen(!verifyEmp_StudIsOpen)}
            >
              &times;
            </span>
          </div>

          <div className="w-full py-8 pb-6 md:px-8 px-6">
            <Tab.Group>
              <Tab.List className="flex space-x-2 rounded-xl bg-blue-900/20 p-1">
                {Object.keys(categories).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        'w-full rounded-lg md:py-2.5 py-1.5 md:text-base text-sm font-semibold leading-5 text-[#1E1F4B]',
                        selected
                          ? 'bg-[#FEFEFE] shadow border border-2 border-[#00B0f0]'
                          : 'text-[#1E1F4B] hover:bg-[#F4F7FE] opacity-50'
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>

              <Tab.Panels className="mt-2">
                {Object.values(categories).map((forms, idx) => (
                  <Tab.Panel
                    key={idx}
                    className={classNames(
                      'rounded-xl bg-white p-3',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-[#00B0f0] focus:outline-none focus:ring-2'
                    )}
                  >
                    <form className="w-full flex flex-col items-center justify-start">
                      {forms.map((form) => (
                        <div key={form.id} className="pb-1.5 mb-1.5 md:w-11/12 w-full">
                          <Label htmlFor={form.htmlFor}>
                            <Text variant='paragraph_4' className='font-semibold'>{form.children}</Text>
                          </Label>
                          <Input id={form.inputId} name={form.name} type={form.type} />
                        </div>
                      ))}
                      <Button className='mb-3 mt-1 md:w-11/12 w-full flex-auto block bg-[#E6F0FB] p-4 rounded flex justify-center items-center'>
                        <Text variant='paragraph_4' className="font-semibold sm:text-sm text-xs text-[#2F294D] sm:mr-auto mr-0">Connect Bank Statement</Text>
                        <BsArrowRight className='sm:ml-auto ml-0 sm:block hidden' />
                      </Button>

                      <Button className='py-2.5 px-4 mt-6 w-full flex-auto block bg-[#00B0F0] rounded'>
                        <Text variant='paragraph_4' className="font-bold text-white">Submit</Text>
                      </Button>
                    </form>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </>
  )
}

export default VerifyEmp_StudModal
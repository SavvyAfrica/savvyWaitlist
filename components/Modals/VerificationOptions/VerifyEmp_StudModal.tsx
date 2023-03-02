import React, { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Button } from '../../Button/Button'
import { Text } from '../../typography/typography'
import { Tab } from '@headlessui/react'
import { Label } from '../../Label/Label'
import { Input } from '../../Input/Input'
import useForm from '../../../Hooks/useForm'

interface MyProps {
  setShowVerifyEmp_StudModal: React.Dispatch<React.SetStateAction<boolean>>
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

function VerifyEmp_StudModal({ setShowVerifyEmp_StudModal }: MyProps) {
  let [categories] = useState({
    Employee: [
      {
        id: 1,
        children: (
          <>
            Bank Verification Number (BVN)
            <span className='text-red-600'>*</span>
          </>
        ),
        htmlFor: 'bvn',
        inputId: 'bvn',
        name: 'bvn',
        type: 'tel',
      },
      {
        id: 2,
        children: (
          <>
            What's your monthly income?<span className='text-red-600'>*</span>
          </>
        ),
        htmlFor: 'income',
        inputId: 'income',
        name: 'income',
        type: 'tel',
      },
      {
        id: 3,
        children: (
          <>
            What state do you live in or work?
            <span className='text-red-600'>*</span>
          </>
        ),
        htmlFor: 'residentState',
        inputId: 'residentState',
        name: 'residentState',
        type: 'text',
      },
      {
        id: 4,
        children: (
          <>
            What's your address?<span className='text-red-600'>*</span>
          </>
        ),
        htmlFor: 'homeAddress',
        inputId: 'homeAddress',
        name: 'homeAddress',
        type: 'text',
      },
      {
        id: 5,
        children: (
          <>
            Upload a valid ID<span className='text-red-600'>*</span>
          </>
        ),
        htmlFor: 'idUpload',
        inputId: 'idUpload',
        name: 'idUpload',
        type: 'file',
      },
    ],
    Student: [
      {
        id: 1,
        children: (
          <>
            Bank Verification Number (BVN)
            <span className='text-red-600'>*</span>
          </>
        ),
        htmlFor: 'bvn',
        inputId: 'bvn',
        name: 'bvn',
        type: 'tel',
      },
      {
        id: 2,
        children: (
          <>
            What's the name of your school?
            <span className='text-red-600'>*</span>
          </>
        ),
        htmlFor: 'schoolName',
        inputId: 'schoolName',
        name: 'schoolName',
        type: 'text',
      },
      {
        id: 3,
        children: (
          <>
            What's your matric number?<span className='text-red-600'>*</span>
          </>
        ),
        htmlFor: 'matricNo',
        inputId: 'matricNo',
        name: 'matricNo',
        type: 'text',
      },
      {
        id: 4,
        children: (
          <>
            What's your address?<span className='text-red-600'>*</span>
          </>
        ),
        htmlFor: 'homeAddress',
        inputId: 'homeAddress',
        name: 'homeAddress',
        type: 'text',
      },
      {
        id: 5,
        children: (
          <>
            Upload your student ID<span className='text-red-600'>*</span>
          </>
        ),
        htmlFor: 'idUpload',
        inputId: 'idUpload',
        name: 'idUpload',
        type: 'file',
      },
    ],
  })

  const { handleChange, employeeState, studentState, formErrors } =
    useForm(empl_StudForm)

  // Callback function when form is submitted!
  async function empl_StudForm() {
    // try {
    //   await userService.register(formRegData);
    //   router.push('/login');
    //   notify('Registration successful', 'success');
    // } catch {
    //   notify('Unsuccessful registration', 'error');
    // }
  }

  // Prevents child element from inheriting parent element's onClick
  const handleChildElementClick = (e: any) => {
    e.stopPropagation()
  }

  return (
    <>
      <div
        onClick={() => setShowVerifyEmp_StudModal(false)}
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
                Verify your personal details.
              </Text>
              <span
                className='text-[#23262F] ml-auto my-1.5 inline-block text-2xl font-bold cursor-pointer'
                onClick={() => setShowVerifyEmp_StudModal(false)}
              >
                &times;
              </span>
            </div>

            {/*body*/}
            <div className='relative p-6 flex-auto'>
              <div className='w-full'>
                <Tab.Group>
                  <Tab.List className='flex space-x-2 rounded-xl bg-blue-900/20 p-1'>
                    {Object.keys(categories).map((category) => (
                      <Tab
                        key={category}
                        className={({ selected }) =>
                          classNames(
                            'w-full rounded-lg md:py-2.5 py-1.5 md:text-base text-sm font-semibold leading-5 text-[#1E1F4B]',
                            selected
                              ? 'bg-[#FEFEFE] shadow border border-[#00B0f0] border-solid'
                              : 'text-[#1E1F4B] hover:bg-[#F4F7FE] opacity-50'
                          )
                        }
                      >
                        {category}
                      </Tab>
                    ))}
                  </Tab.List>

                  <Tab.Panels className='mt-5'>
                    {Object.values(categories).map((forms, idx) => (
                      <Tab.Panel
                        key={idx}
                        className={classNames('rounded-xl bg-white')}
                      >
                        <form className='w-full flex flex-col items-center justify-start'>
                          {forms.map((form) => (
                            <div key={form.id} className='pb-1.5 mb-1.5 w-full'>
                              <Label htmlFor={form.htmlFor}>
                                {form.children}
                              </Label>
                              <Input
                                id={form.inputId}
                                name={form.name}
                                type={form.type}
                                value=''
                                className=''
                                onChange={handleChange}
                              />
                            </div>
                          ))}
                          {/* <Button className='mb-3 mt-1 w-full flex-auto block bg-[#E6F0FB] p-4 rounded-xl flex justify-center items-center'>
                                  <Text variant='paragraph_4' className="font-semibold sm:text-sm text-xs text-[#2F294D] sm:mr-auto mr-0">Connect Bank Statement</Text>
                                  <BsArrowRight className='sm:ml-auto ml-0 sm:block hidden' />
                                </Button> */}

                          <Button className='py-2.5 px-4 mt-6 w-full flex-auto block bg-[#00B0F0] rounded-xl'>
                            <Text
                              variant='paragraph_4'
                              className='font-bold text-white'
                            >
                              Submit
                            </Text>
                          </Button>
                        </form>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-30 fixed inset-0 z-40 bg-black'></div>
    </>
  )
}

export default VerifyEmp_StudModal

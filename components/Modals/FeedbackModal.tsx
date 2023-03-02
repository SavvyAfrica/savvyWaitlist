import Link from 'next/link'
import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { Button } from '../Button/Button'
import { Text } from '../typography/typography'
import Image from 'next/image'
import EditIcon from '../../assets/png/edit_black.png'
import { Input } from '../Input/Input'
import { Label } from '../Label/Label'

function FeedbackModal() {
  const [showModal, setShowModal] = React.useState(false)

  // Prevents child element from inheriting parent element's onClick
  const handleChildElementClick = (e: any) => {
    e.stopPropagation()
  }

  function handleChange(event: any): void {
    throw new Error('Function not implemented.')
  }

  return (
    <>
      <span
        className='cursor-pointer inline-block xl:w-[59px] w-[40px] xl:h-[59px] h-[40px] bg-[#F4F7FE] flex items-center justify-center rounded-full'
        onClick={() => setShowModal(true)}
      >
        <Image src={EditIcon} alt='edit' className='w-[18px] h-[18px]' />
      </span>

      {showModal ? (
        <>
          <div
            onClick={() => setShowModal(false)}
            className='left-0 top-0 overflow-auto fixed inset-0 z-50 outline-none focus:outline-none'
          >
            <div
              onClick={(e) => handleChildElementClick(e)}
              className='relative modal__content max-w-[560px] my-6 mx-auto'
            >
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                  <Text
                    variant='paragraph_1'
                    className='font-bold text-base md:text-xl text-[#0F2137] mr-auto'
                  >
                    Send a feedback
                  </Text>
                  <span
                    className='text-[#23262F] ml-auto my-1.5 inline-block text-2xl font-bold hover:cursor-pointer'
                    onClick={() => setShowModal(false)}
                  >
                    &times;
                  </span>
                </div>

                {/*body*/}
                <div className='relative p-6 flex-auto'>
                  <Text
                    variant='paragraph_4'
                    className='font-medium text-center text-[#2F294D] mb-7'
                  >
                    Let’s help with troubleshooting, Installation, repair, and
                    other issues.
                    <br />
                    <br />
                    <Link href='/terms'>
                      <a className='text-red-600 underline'>
                        Terms and Conditions apply
                      </a>
                    </Link>
                  </Text>

                  <form className='w-full flex flex-col items-center justify-start'>
                    <div className='pb-1.5 mb-1.5 md:w-11/12 w-full'>
                      <Label htmlFor='feedbackSubject'>Subject</Label>
                      <Input
                        id='feedbackSubject'
                        name='feedbackSubject'
                        type='text'
                        className=''
                        value=''
                        onChange={handleChange}
                      />
                    </div>

                    <div className='pb-1.5 mb-1.5 md:w-11/12 w-full'>
                      <Label htmlFor='feedbackMessage'>Message</Label>
                      <textarea
                        id='feedbackMessage'
                        name='feedbackMessage'
                        className='w-full h-[114px] bg-white rounded border outline-[#DFDFE6] outline-0 flex-auto p-2 text-black'
                        value=''
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </form>

                  <Button className='w-full rounded-xl font-semibold text-center py-2.5 px-4 bg-[#00B0F0]'>
                    <Text
                      variant='paragraph_4'
                      className='font-bold text-white'
                    >
                      Send Message
                    </Text>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-30 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  )
}

export default FeedbackModal

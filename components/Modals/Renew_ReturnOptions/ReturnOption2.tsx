import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Button } from '../../Button/button'
import { Input } from '../../Input/Input'
import { Label } from '../../Label/Label'
import { Text } from '../../typography/typography'

interface IMyProp {
  ctaBtn: string
}

function ReturnOption2({ ctaBtn }: IMyProp) {
  const [showModal, setShowModal] = React.useState(false)

  function handleChange(event: any): void {
    throw new Error('Function not implemented.')
  }

  // Prevents child element from inheriting parent element's onClick
  const handleChildElementClick = (e: any) => {
    e.stopPropagation()
  }

  return (
    <>
      <button
        className='bg-white hover:bg-[#dcebf9] w-[140px] h-[41px] rounded-lg flex justify-center items-center'
        onClick={() => setShowModal(true)}
      >
        <span className='inline-block text-sm font-medium text-[#0F2137]'>
          {ctaBtn}
        </span>
      </button>

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
                  <BsArrowLeft className='mr-5 text-base cursor-pointer' />
                  <Text
                    variant='paragraph_1'
                    className='font-bold text-base md:text-xl text-[#0F2137] mr-auto'
                  >
                    I am returning the device today
                  </Text>
                  <span
                    className='text-[#23262F] ml-auto my-1.5 inline-block text-2xl font-bold cursor-pointer'
                    onClick={() => setShowModal(false)}
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
                    Tell us your pickup location and contact <br /> information.
                    We’ll give you a call.
                  </Text>

                  <form className='w-full flex flex-col items-center justify-start mt-8'>
                    <div className='pb-1.5 mb-1.5 w-full'>
                      <Label htmlFor='bvn'>Address</Label>
                      <Input
                        id='bvn'
                        name='bvn'
                        type='text'
                        value=''
                        className=''
                        onChange={handleChange}
                      />
                    </div>

                    <div className='pb-1.5 mb-1.5 w-full'>
                      <Label htmlFor='compRole'>Phone Number</Label>
                      <Input
                        id='compRole'
                        name='compRole'
                        type='text'
                        value=''
                        className=''
                        onChange={handleChange}
                      />
                    </div>

                    <div className='pb-1.5 mb-1.5 w-full'>
                      <Label htmlFor='compReg'>Contact Person</Label>
                      <Input
                        id='compReg'
                        name='compReg'
                        type='text'
                        value=''
                        className=''
                        onChange={handleChange}
                      />
                    </div>

                    <Button className='py-2.5 px-4 mt-6 w-full flex-auto block bg-[#00B0F0] rounded-xl'>
                      <Text
                        variant='paragraph_4'
                        className='font-bold text-white'
                      >
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
      ) : null}
    </>
  )
}

export default ReturnOption2

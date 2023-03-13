import React, { useCallback, useState } from 'react'
import { GrStatusGood } from 'react-icons/gr'
import { Button } from '../../Button/button'
import { Text } from '../../typography/typography'

interface IMyProp {
  ctaBtn: string
}

function SwapOption2({ ctaBtn }: IMyProp) {
  const [showModal, setShowModal] = React.useState(false)

  const [selected, setSelected] = useState('Good condition')

  const renderIcon = useCallback((element: React.ReactNode) => {
    if (element) {
      return <GrStatusGood className='h-4 w-4 ml-auto absolute top-0 right-0' />
    }
  }, [])

  const swapOption2Data = [
    'Good condition',
    'Cracked screen',
    'Draining battery',
    'Faulty speaker or mouthpiece',
    'other issues',
  ]

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
                  <Text
                    variant='paragraph_1'
                    className='font-bold text-base md:text-xl text-[#0F2137] mr-auto'
                  >
                    Swap Mac book core i5
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
                  <div className='flex flex-col justify-center items-center mb-8 w-full'>
                    <Text
                      variant='paragraph_4'
                      className='font-medium text-center text-[#2F294D]'
                    >
                      Tell us the condition of the product.
                    </Text>
                  </div>

                  <div className='flex flex-col w-full mb-8'>
                    {swapOption2Data.map((element, index): React.ReactNode => {
                      return (
                        <span
                          key={index}
                          onClick={() => setSelected(element)}
                          className={`inline-block cursor-pointer py-2 pl-2 pr-4 mb-2.5 rounded-xl relative flex justify-center items-center 
                                ${
                                  selected === element
                                    ? 'bg-[#E6F0FB]'
                                    : 'bg-[#F6F6F6] hover:bg-[#E6F0FB]'
                                }`}
                        >
                          <Text
                            variant='paragraph_4'
                            className='font-semibold text-[#2F294D] mr-auto'
                          >
                            {element}
                          </Text>
                          {selected === element ? renderIcon(element) : ''}
                        </span>
                      )
                    })}
                  </div>

                  <Button className='py-2.5 px-4 mt-6 w-full flex-auto block bg-[#00B0F0] rounded-xl'>
                    <Text
                      variant='paragraph_4'
                      className='font-bold text-white'
                    >
                      Continue
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

export default SwapOption2

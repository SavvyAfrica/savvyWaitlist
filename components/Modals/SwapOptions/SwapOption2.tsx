import React, { Dispatch, SetStateAction, useCallback, useState } from 'react'
import { GrStatusGood } from 'react-icons/gr';
import { Button } from '../../button/button';
import { Text } from '../../typography/typography'


interface IMyProp {
  swapOption2IsOpen: boolean;
  setSwapOption2IsOpen: Dispatch<SetStateAction<boolean>>;
}

function SwapOption2({setSwapOption2IsOpen, swapOption2IsOpen}: IMyProp) {
  const [selected, setSelected] = useState("Good condition");

  const renderIcon = useCallback((element: React.ReactNode) => {
    if(element) {
      return <GrStatusGood className='h-4 w-4 ml-auto' />
    }
  }, []);
  
  const swapOption2Data = [
    "Good condition", 
    "Cracked screen",
    "Draining battery",
    "Faulty speaker or mouthpiece",
    "other issues"
  ];


  // Prevents child element from inheriting parent element's onClick
  const handleChildElementClick = (e: any) => {
    e.stopPropagation()
  }

  return (
    <>
      <div
        className="fixed z-50 left-0 top-0 w-full h-full bg-black opacity-75 overflow-auto"
        onClick={() => setSwapOption2IsOpen(!swapOption2IsOpen)}
      >
        <div
          className="modal__content bg-[#FEFEFE] bg-red rounded-xl m-[8%] mx-auto max-w-[700px] lg:w-w-2/4 sm:w-4/6 w-full relative shadow-lg"
          onClick={(e) => handleChildElementClick(e)}
        >
          <div className="border-b-2 border-solid border-[#DFDFE6] flex justify-center items-center pt-6 pb-8 md:px-8 px-6">
            <Text variant='paragraph_1' className='font-bold text-base md:text-xl text-[#0F2137] mr-auto'>Swap Mac book core i5</Text>
            <span 
              className="text-[#23262F] ml-auto mb-1.5 inline-block text-2xl font-bold hover:cursor-pointer"
              onClick={() => setSwapOption2IsOpen(!swapOption2IsOpen)}
            >
              &times;
            </span>
          </div>

          <div className="w-full py-8 pb-6 md:px-8 px-6 flex flex-col justify-start items-center">
            <div className="flex flex-col justify-center items-center mb-8 md:w-11/12 w-full">
              <Text 
                variant='paragraph_3' 
                className='font-semibold text-base text-center text-[#2F294D]'>
                  Tell us the condition of the product.
              </Text>
            </div>

            <div className="flex flex-col md:w-11/12 w-full mb-8">
              {swapOption2Data.map((element, index): React.ReactNode => {
                return (
                  <span 
                    key={index}
                    onClick={() => setSelected(element)}
                    className={`inline-block py-2 pl-2 pr-4 mb-2.5 rounded flex justify-center items-center 
                      ${selected === element
                      ? "bg-[#E6F0FB]"
                      : "bg-[#F6F6F6] hover:bg-[#E6F0FB]"
                      }`}
                  >
                    <Text variant="paragraph_4" className='font-semibold text-[#2F294D] mr-auto'>{element}</Text>
                    {selected === element ? renderIcon(element) : ''}
                  </span>
                )
              })}
            </div>

            <Button className='py-2.5 px-4 mt-6 w-full flex-auto block bg-[#00B0F0] rounded'>
              <Text variant='paragraph_4' className="font-bold text-white">Continue</Text>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SwapOption2
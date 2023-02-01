import React, { Dispatch, SetStateAction, useCallback, useState } from 'react'
import { GrStatusGood } from 'react-icons/gr';
import { Button } from '../../Button/Button';
import { Text } from '../../typography/typography'


interface IMyProp {
  returnOptionIsOpen: boolean;
  setReturnOptionIsOpen: Dispatch<SetStateAction<boolean>>;
}

function ReturnOptionModal({setReturnOptionIsOpen, returnOptionIsOpen}: IMyProp) {
  const [selected, setSelected] = useState("I am returning the device today");

  const renderIcon = useCallback((element: React.ReactNode) => {
    if(element) {
      return <GrStatusGood className='h-4 w-4 ml-auto' />
    }
  }, []);
  
  const returnData = [
    "I am returning the device today", 
    "I will return the device tomorrow ", 
    "Later this week"
  ];


  // Prevents child element from inheriting parent element's onClick
  const handleChildElementClick = (e: any) => {
    e.stopPropagation()
  }

  return (
    <>
      <div
        className="fixed z-50 left-0 top-0 w-full h-full bg-black opacity-75 overflow-auto"
        onClick={() => setReturnOptionIsOpen(!returnOptionIsOpen)}
      >
        <div
          className="modal__content bg-[#FEFEFE] bg-red rounded-xl m-[8%] mx-auto max-w-[700px] lg:w-w-2/4 sm:w-4/6 w-full relative shadow-lg"
          onClick={(e) => handleChildElementClick(e)}
        >
            <div className="border-b-2 border-solid border-[#DFDFE6] flex justify-center items-center pt-6 pb-8 md:px-8 px-6">
                <Text variant='paragraph_1' className='font-bold text-base md:text-xl text-[#0F2137] mr-auto'>Return iPhone 13 - 64GB</Text>
                <span 
                    className="text-[#23262F] ml-auto mb-1.5 inline-block text-2xl font-bold hover:cursor-pointer"
                    onClick={() => setReturnOptionIsOpen(!returnOptionIsOpen)}
                >
                &times;
                </span>
            </div>

            <div className="w-full py-8 pb-6 md:px-8 px-6 flex flex-col justify-start items-center">
                <div className="flex flex-col justify-center items-center mb-8 md:w-11/12 w-full">
                    <Text 
                        variant='paragraph_3' 
                        className='font-semibold text-base text-center text-[#2F294D]'>
                            Choose when you would prefer to return or end your rent. An expert will reach 
                            out to you for device pickup. <br/> <br /> (All agents are available during business hours: 8:00am to 8:00pm)
                        </Text>
                </div>

                <div className="flex flex-col md:w-11/12 w-full">
                    {returnData.map((element, index): React.ReactNode => {
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
                    <Text variant='paragraph_4' className="font-bold text-white">Next</Text>
                </Button>
            </div>
        </div>
      </div>
    </>
  )
}

export default ReturnOptionModal
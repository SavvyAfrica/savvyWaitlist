import React, { Dispatch, SetStateAction, useCallback, useState } from 'react'
import { GrStatusGood } from 'react-icons/gr';
import { Button } from '../../button/button';
import { Text } from '../../typography/typography'


interface IMyProp {
  actionOptionsIsOpen: boolean;
  setActionOptionsIsOpen: Dispatch<SetStateAction<boolean>>;
}

function ActionOptionsModal({setActionOptionsIsOpen, actionOptionsIsOpen}: IMyProp) {
  const [selected, setSelected] = useState("Renew");

  const renderIcon = useCallback((element: React.ReactNode) => {
    if(element) {
      return <GrStatusGood className='h-4 w-4 ml-auto' />
    }
  }, []);
  
  const actionOptionsData = ["Renew", "Return Early", "End Rent"];


  // Prevents child element from inheriting parent element's onClick
  const handleChildElementClick = (e: any) => {
    e.stopPropagation()
  }

  return (
    <>
      <div
        className="fixed z-50 left-0 top-0 w-full h-full bg-black opacity-75 overflow-auto"
        onClick={() => setActionOptionsIsOpen(!actionOptionsIsOpen)}
      >
        <div
          className="modal__content bg-[#FEFEFE] bg-red rounded-xl m-[8%] mx-auto max-w-[700px] lg:w-w-2/4 sm:w-4/6 w-full relative shadow-lg"
          onClick={(e) => handleChildElementClick(e)}
        >
          <div className="border-b-2 border-solid border-[#DFDFE6] flex justify-center items-center pt-6 pb-8 md:px-8 px-6">
            <Text variant='paragraph_1' className='font-bold text-base md:text-xl text-[#0F2137] mr-auto'>Choose an action</Text>
            <span 
              className="text-[#23262F] ml-auto mb-1.5 inline-block text-2xl font-bold hover:cursor-pointer"
              onClick={() => setActionOptionsIsOpen(!actionOptionsIsOpen)}
            >
              &times;
            </span>
          </div>

          <div className="w-full py-8 pb-6 md:px-8 px-6 flex flex-col justify-start items-center">
            <div className="flex sm:flex-row flex-col justify-center items-center mb-8 md:w-11/12 w-full">
              <span className="text-center sm:text-left block mr-0 sm:mr-auto mb-4 sm:mb-0">
                <Text variant='paragraph_3' className='font-semibold text-[#2F294D]'>IPhone 13</Text>
                <span className="font-bold text-[#2F294D] text-base">₦39,700</span>
              </span>

              <span className="text-center sm:text-left block ml-0 sm:ml-auto">
                <Text variant='paragraph_4' className='font-semibold text-xs text-[#2F294D]'>May 16, 2022</Text>
                <Text variant='paragraph_4' className='font-semibold text-xs text-[#2F294D]'>Rent due on Jun 16, 2022</Text>
              </span>
            </div>

            <div className="flex flex-col md:w-11/12 w-full">
              {actionOptionsData.map((element, index): React.ReactNode => {
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

export default ActionOptionsModal
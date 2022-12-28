import React, { Dispatch, SetStateAction, useCallback, useState } from 'react'
import { Button } from '../button/button';
import { Text } from '../typography/typography'
import { GrStatusGood } from 'react-icons/gr'


interface IMyProp {
    setupAccountIsOpen: boolean;
    setSetupAccountIsOpen: Dispatch<SetStateAction<boolean>>;
}

function SetupAccountModal({setSetupAccountIsOpen, setupAccountIsOpen}: IMyProp) {
    const [selected, setSelected] = 
        useState('EMPLOYEE OR STUDENT Do you work in an organization and a earn salary or you are an undergraduate?');
            

    const renderIcon = useCallback((element: React.ReactNode) => {
    if(element) {
        return <GrStatusGood className='h-4 w-4 ml-auto' />
    }
    }, []);
  
    const setupAcctData = [
    'EMPLOYEE OR STUDENT Do you work in an organization and a earn salary or you are an undergraduate?', 
    'STARTUP OR CORPORATE ORGANIZATION Are you an IT, finance and procurement leader or you own a business?'
    ];


    // Prevents child element from inheriting parent element's onClick
    const handleChildElementClick = (e: any) => {
        e.stopPropagation()
    }

  return (
    <>
        <div 
            className="fixed z-50 left-0 top-0 w-full h-full overflow-auto bg-black opacity-75"
            onClick={() => setSetupAccountIsOpen(!setupAccountIsOpen)}
        >
            <div 
                className="modal__content bg-[#FEFEFE] bg-red rounded-xl m-[8%] mx-auto max-w-[700px] lg:w-w-2/4 sm:w-4/6 w-full relative shadow-lg"
                onClick={(e) => handleChildElementClick(e)}
            >
                <div className="pb-8 border-b-2 border-solid border-[#DFDFE6] flex justify-center items-center pt-6 pb-8 md:px-8 px-6">
                    <Text variant='paragraph_1' className='font-bold text-base md:text-xl text-[#0F2137] mr-auto'>
                        Let’s set up your account
                    </Text>
                    <span 
                        className="text-[#23262F] ml-auto mb-1.5 inline-block text-2xl font-bold hover:cursor-pointer"
                        onClick={() => setSetupAccountIsOpen(!setupAccountIsOpen)}
                    >
                        &times;
                    </span>
                </div>

                <div className="py-8 pb-6 md:px-8 px-6 flex flex-col items-center justify-start">
                    <div className="flex flex-col justify-center items-center mb-8 md:w-11/12 w-full">
                    <Text 
                        variant='paragraph_3' 
                        className='font-semibold text-base text-center text-[#2F294D]'
                    >
                        Select which best describe you
                    </Text>
                    </div>

                    <div className="flex flex-col md:w-11/12 w-full mb-8">
                    {setupAcctData.map((element, index): React.ReactNode => {
                        return (
                        <span 
                            key={element}
                            onClick={() => setSelected(element)}
                            className={`inline-block py-2 pl-2 pr-4 mb-2.5 rounded flex justify-start items-center 
                            ${selected === element
                            ? "bg-[#E6F0FB]"
                            : "bg-[#F6F6F6] hover:bg-[#E6F0FB]"
                            }`}
                        >
                            <Text variant="paragraph_4" className='font-semibold text-[#2F294D] md:mr-auto md:w-[300px] sm:w-[260px] w-[220px]'>{element}</Text>
                            {selected === element ? renderIcon(element) : null}
                        </span>
                        )
                    })}
                    </div>

                    <Button className='w-full rounded-xl font-semibold text-center text-[#FFFFFF] text-xl sm:py-4 py-3 px-2.5 bg-[#00B0F0]'>
                        Continue
                    </Button>
                </div>
            </div>
        </div>
    </>
  )
}

export default SetupAccountModal
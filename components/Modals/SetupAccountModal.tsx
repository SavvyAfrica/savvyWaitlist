import React, { useCallback, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { GrStatusGood } from "react-icons/gr";
import { Button } from "../Button/Button";
import { Text } from '../typography/typography';


function SetupAccountModal() {
  const [showModal, setShowModal] = React.useState(false);

    const [selected, setSelected] = 
        useState('EMPLOYEE OR STUDENT Do you work in an organization and a earn salary or you are an undergraduate?');
            

    const renderIcon = useCallback((element: React.ReactNode) => {
    if(element) {
        return <GrStatusGood className='h-4 w-4 ml-auto absolute top-0 right-0' />
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
            className="w-[40px] h-[40px] rounded-full bg-[#F4F7FE] hover:bg-[#dcebf9] flex items-center justify-center sm:ml-auto ml-0 cursor-pointer"
            onClick={() => setShowModal(true)}
        >
            <BsArrowRight />
        </div>

        {showModal ? (
        <>
            <div
                onClick={() => setShowModal(false)}
                className="left-0 top-0 overflow-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div 
                    onClick={(e) => handleChildElementClick(e)} 
                    className="relative modal__content w-auto my-6 mx-auto max-w-3xl"
                >

                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                        {/*header*/}
                        <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <Text variant='paragraph_1' className='font-bold text-base md:text-xl text-[#0F2137] mr-auto'>
                                Let’s set up your account
                            </Text>
                            <span 
                                className="text-[#23262F] ml-auto my-1.5 inline-block text-2xl font-bold hover:cursor-pointer"
                                onClick={() => setShowModal(false)}
                            >
                                &times;
                            </span>
                        </div>

                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <Text 
                                variant='paragraph_4' 
                                className='font-medium text-center text-[#2F294D] mb-7'
                            >
                                Select which best describe you
                            </Text>


                            <div className="flex flex-col w-full mb-8">
                                {setupAcctData.map((element, index): React.ReactNode => {
                                    return (
                                    <span 
                                        key={element}
                                        onClick={() => setSelected(element)}
                                        className={`cursor-pointer inline-block py-2 pl-2 relative pr-4 mb-2.5 rounded-xl flex justify-start items-center 
                                        ${selected === element
                                        ? "bg-[#E6F0FB]"
                                        : "bg-[#F6F6F6] hover:bg-[#E6F0FB]"
                                        }`}
                                    >
                                        <Text 
                                            variant="paragraph_4" 
                                            className='font-semibold text-[#2F294D] mr-10 max-w-[448px]'
                                        >
                                            {element}
                                        </Text>
                                        {selected === element ? renderIcon(element) : null}
                                    </span>
                                    )
                                })}
                            </div>

                            <Button className='w-full rounded-xl font-semibold text-center py-2.5 px-4 bg-[#00B0F0]'>
                                <Text variant='paragraph_4' className="font-bold text-white">Continue</Text>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
        </>
        ) : null}
    </>
  );
}

export default SetupAccountModal;
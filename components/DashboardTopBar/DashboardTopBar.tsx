import React, { Fragment } from 'react';
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { MdOutlineShoppingCart } from 'react-icons/md';
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2';
import { CgProfile } from 'react-icons/cg';
import Image from 'next/image';
import Profile from '../../assets/png/profile.png';
import { Text } from '../typography/typography';
import { useGlobalContext } from '../../global/GlobalContext';



const DashboardTopBar = () => {
    const { showNav, setShowNav } = useGlobalContext()

    return (
        <div 
            className="w-full h-auto"
        >
            <div className="pb-6 w-full flex justify-between items-start">

                <div>
                    <div className="lg:hidden block -translate-x-1">
                        <HiOutlineBars3BottomLeft 
                            className='h-8 w-8 cursor-pointer text-gray-700' 
                            onClick={() => setShowNav(!showNav)} 
                        />
                    </div>
                
                    <div className="w-auto lg:mt-0 mt-7">
                        <Text variant='paragraph_4' className='text-[#707eae] font-bold'>Hi Andrei,</Text>
                        <Text className='font-bold text-[#292d32] lg:text-[30px] sm:text-2xl text-sm'>Welcome to Savvy!</Text>
                    </div>
                </div>

                <div className="flex md:flex-row flex-row-reverse items-center">
                    <div className="md:mr-5 mr-0 md:ml-0 ml-2.5 lg:mr-8 cursor-pointer text-gray-700 bg-white rounded-full">
                        {/* <Link href=''> */}
                            <MdOutlineShoppingCart className="sm:h-10 h-[25px] sm:w-10 w-[25px] sm:p-2 p-1" />
                        {/* </Link> */}
                    </div>

                
                    <div className="w-full sm:py-1 py-0 sm:px-2 px-0 rounded-xl hover:bg-[#dcebf9]">
                        <Link href={'/dashboard/account'}>
                            <a className='inline-block flex w-full justify-center items-center'>
                                <span className="inline-block sm:h-10 h-[25px] sm:w-10 w-[25px]">
                                    <Image 
                                        src={Profile} 
                                        width='100%' 
                                        height='100%' 
                                        alt="profile picture" 
                                        className="rounded-full h-8 md:mr-4 border-2 border-white shadow-xl" 
                                    />
                                </span>
                            
                                <div className="md:block hidden ml-3 flex flex-col items-start">
                                    <Text variant='paragraph_4' className="font-semibold text-gray-700">Karim Andrei</Text>
                                    <Text variant='paragraph_4' className='font-normal'>User</Text>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardTopBar;
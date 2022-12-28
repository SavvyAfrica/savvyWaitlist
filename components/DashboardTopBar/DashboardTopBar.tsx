import React, { Fragment } from 'react';
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { MdOutlineShoppingCart } from 'react-icons/md';
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2';
import { CgProfile } from 'react-icons/cg';
import Image from 'next/image';
import Profile from '../../assets/png/profile.png';
import { Text } from '../typography/typography';
import { useGlobalContext } from '../../Global/GlobalContext';



const DashboardTopBar = () => {
    const { showNav, setShowNav } = useGlobalContext()

    return (
        <div 
            className="w-full h-auto"
        >
            <div className="py-6 pr-9 pl-9 lg:pl-0 w-full flex justify-between items-start">

                <div>
                    <div className="lg:hidden block -translate-x-1">
                        <HiOutlineBars3BottomLeft 
                            className='h-8 w-8 cursor-pointer text-gray-700' 
                            onClick={() => setShowNav(!showNav)} 
                        />
                    </div>
                
                    <div className="w-auto lg:mt-0 mt-7">
                        <Text variant='paragraph_4' className='text-color1 font-bold'>Hi Andrei,</Text>
                        <Text variant='home_heading_4_32px' className='font-bold text-color2 lg:text-[30px] sm:text-2xl text-lg lg:leading-10'>Welcome to Savvy!</Text>
                    </div>
                </div>

                <div className="flex md:flex-row flex-row-reverse items-center">
                    <div className="md:mr-5 mr-0 md:ml-0 ml-2.5 lg:mr-8 cursor-pointer text-gray-700 bg-white rounded-full">
                        {/* <Link href=''> */}
                            <MdOutlineShoppingCart className="h-10 w-10 p-2" />
                        {/* </Link> */}
                    </div>

                
                    <div className="w-full sm:py-1 py-0 sm:px-2 px-0 rounded-xl hover:bg-[#dcebf9]">
                        <Link href={'/dashboard/account'}>
                            <a className='inline-block flex w-full justify-center items-center'>
                                <Image 
                                    src={Profile} 
                                    width={40} 
                                    height={40} 
                                    alt="profile picture" 
                                    className="rounded-full h-8 md:mr-4 border-2 border-white shadow-xl" 
                                />
                            
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
import React from 'react'
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2'
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout'
import { useGlobalContext } from '../../../Global/GlobalContext'
import { Text } from '../../../components/typography/typography'
import { MdOutlineShoppingCart } from 'react-icons/md';
import Link from 'next/link';
import Profile from '../../../assets/png/profile.png'
import Image from 'next/image';


function favourites() {
    const { showNav, setShowNav } = useGlobalContext();

    return (
        <>
            <DashboardLayout>
                <div className="w-full flex justify-between items-start">
                    <div>
                        <div className="lg:hidden -translate-x-1">
                            <HiOutlineBars3BottomLeft 
                                className='h-8 w-8 cursor-pointer text-gray-700' 
                                onClick={() => setShowNav(!showNav)} 
                            />
                        </div>
                    
                        <div className="w-auto lg:mt-0 mt-7">
                            <Text className='font-bold text-[#292d32] lg:text-[30px] sm:text-2xl text-sm'>Favourites</Text>
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
            </DashboardLayout>
        </>
      )
}

export default favourites
import React, { useState } from 'react';
import { AiFillMessage } from 'react-icons/ai';
import { IoIosClose } from 'react-icons/io';
import { MdLogin, MdManageAccounts } from 'react-icons/md';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { Text } from '../typography/typography';
import { BsFillStarFill } from 'react-icons/bs';
import { AiTwotoneHome } from 'react-icons/ai';
import { useAppStore } from '../../global/store';
import { userService } from '../../services';
import { Button } from '../Button/Button';
import Logo from '../../assets/png/logo.png';
import HomeIcon from '../../assets/png/homeIcon.png';
import AccountIcon from '../../assets/png/walletIcon.png';
import MessageIcon from '../../assets/png/messageIcon.png';
import FavouriteIcon from '../../assets/png/favouriteIcon.png';



const DashboardSideBar = () => {
  const { showNav, setShowNav } = useAppStore();

  const router = useRouter();

  const handleLogout = () => {
    return userService.logout();
  }

  return (
    <div 
      className={`fixed left-0 top-0 w-60 sm:w-80 lg:w-60 xl:w-72 duration-[400ms] h-full z-30 bg-white shadow-md
        ${showNav
        ? '-translate-x-full lg:translate-x-0'
        : '-translate-x-0 origin-right'
        }`}
    >
      <div className="flex justify-center mt-7 mb-14 border-b border-[#F4F7FE] border-solid pb-5">
        <div className="w-full flex justify-between items-center ml-12 mr-4">
          <Link href='/home'>
            <a>
              <Image src={Logo} alt="logo" />
            </a>
          </Link>
          <IoIosClose
            className={`h-8 w-8 lg:hidden block cursor-pointer text-gray-700 `}
            onClick={() => setShowNav(!showNav)} 
          />
        </div>
      </div>

      <ul className="flex flex-col mb-24 block">
        <li className='block'>
          <Link href='/home'>
            <a className={`block flex items-center pl-6 py-3 mx-7 mb-3 rounded 
              text-center cursor-pointer transition-colors text-[#292D32]
              ${router.asPath === '/home'
              ? 'bg-[#00B0F0]'
              : 'bg-white hover:bg-[#dcebf9]'
              }`}
            >
              
              <Image src={HomeIcon} alt="home" className="w-full h-full" />
             
              <span className="inline-block ml-4">
                <Text
                  variant='paragraph_3'
                  className={`font-bold capitalize`}
                >
                  Home
                </Text>
              </span>
            </a>
          </Link>
        </li>

        <li className='block'>
          <Link href='/home/account'>
            <a className={`block flex items-center pl-6 py-3 mx-7 mb-3 rounded 
              text-center cursor-pointer transition-colors text-[#292D32]
              ${router.asPath === '/home/account'
              ? 'bg-[#00B0F0]'
              : 'bg-white hover:bg-[#dcebf9]'
              }`}
            >
              
              <Image src={AccountIcon} alt="account" className="w-full h-full" />

              <span className="inline-block ml-4">
                <Text
                  variant='paragraph_3'
                  className={`font-bold capitalize`}
                >
                  Account
                </Text>
              </span>
            </a>
          </Link>
        </li>

        <li className='block'>
          <Link href='/home/messages'>
            <a className={`block flex items-center pl-6 py-3 mx-7 mb-3 rounded 
              text-center cursor-pointer transition-colors text-[#292D32]
              ${router.asPath === '/home/messages'
              ? 'bg-[#00B0F0]'
              : 'bg-white hover:bg-[#dcebf9]'
              }`}
            >
              
              <Image src={MessageIcon} alt="message" className="w-full h-full" />

              <span className="inline-block ml-4">
                <Text
                  variant='paragraph_3'
                  className={`font-bold capitalize`}
                >
                  Messages
                </Text>
              </span>
            </a>
          </Link>
        </li>

        <li className='block'>
          <Link href='/home/favourites'>
            <a className={`block flex items-center pl-6 py-3 mx-7 mb-3 rounded 
              text-center cursor-pointer transition-colors text-[#292D32]
              ${router.asPath === '/home/favourites'
              ? 'bg-[#00B0F0]'
              : 'bg-white hover:bg-[#dcebf9]'
              }`}
            >

              <Image src={FavouriteIcon} alt="favourite" className="w-full h-full" />

              <span className="inline-block ml-4">
                <Text
                  variant='paragraph_3'
                  className={`font-bold capitalize`}
                >
                  Favourites
                </Text>
              </span>
            </a>
          </Link>
        </li>
      </ul>

      <Button 
        className='block flex items-center pl-6 py-3 mx-7 mb-3 text-center cursor-pointer'
        onClick={handleLogout}
      >
          <MdLogin className='mr-2.5 h-5 w-5'/>
          <Text variant='paragraph_3' className='font-bold'>Log Out</Text>
      </Button>
    </div>
  )
}


export default DashboardSideBar;

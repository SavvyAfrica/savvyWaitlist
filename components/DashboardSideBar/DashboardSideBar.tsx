import React, { useState } from 'react';
import { AiFillMessage } from 'react-icons/ai';
import { IoIosClose } from 'react-icons/io';
import { MdLogin, MdManageAccounts } from 'react-icons/md';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/png/logo.png';
import { Text } from '../typography/typography';
import { BsFillStarFill } from 'react-icons/bs';
import { AiTwotoneHome } from 'react-icons/ai';
import { useGlobalContext } from '../../global/GlobalContext';
import { userService } from '../../services';
import { Button } from '../Button/Button';



const DashboardSideBar = () => {
  const { showNav, setShowNav } = useGlobalContext();

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
              <span className="mr-2 inline-block">
                <AiTwotoneHome 
                  className={`h-[24px] w-[24px] mr-1 ${router.asPath === '/home' ? 'fill-white' : 'fill-black'}`} 
                />
              </span>

              <span className="inline-block">
                <Text
                  variant='paragraph_3'
                  className={`font-bold capitalize ${router.asPath === '/home' ? 'text-white' : 'text-black'}`}
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
              <span className="mr-2 inline-block">
                <MdManageAccounts 
                  className={`h-7 w-7 ${router.asPath === '/home/account' ? 'fill-white' : 'fill-black'}`} 
                />
              </span>

              <span className="inline-block">
                <Text
                  variant='paragraph_3'
                  className={`font-bold capitalize ${router.asPath === '/home/account' ? 'text-white' : 'text-black'}`}
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
              <span className="mr-2 inline-block">
                <AiFillMessage 
                  className={`h-[22px] w-[22px] mr-1 ${router.asPath === '/home/messages' ? 'fill-white' : 'fill-black'}`} 
                />
              </span>

              <span className="inline-block">
                <Text
                  variant='paragraph_3'
                  className={`font-bold capitalize ${router.asPath === '/home/messages' ? 'text-white' : 'text-black'}`}
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
              <span className="mr-2 inline-block">
                <BsFillStarFill 
                  className={`h-[22px] w-[22px] mr-1 ${router.asPath === '/home/favourites' ? 'fill-white' : 'fill-black'}`}  
                />
              </span>

              <span className="inline-block">
                <Text
                  variant='paragraph_3'
                  className={`font-bold capitalize ${router.asPath === '/home/favourites' ? 'text-white' : 'text-black'}`}
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

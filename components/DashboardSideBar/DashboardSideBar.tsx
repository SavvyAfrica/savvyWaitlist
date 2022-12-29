import React from 'react';
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
import { useGlobalContext } from '../../Global/GlobalContext';



const DashboardSideBar = () => {
  const { showNav, setShowNav } = useGlobalContext();

  const router = useRouter();

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
          <Link href='/dashoard'>
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
          <Link href='/dashboard'>
            <a className={`block flex items-center pl-6 py-3 mx-7 mb-3 rounded 
              text-center cursor-pointer transition-colors text-[#292D32]
              ${router.asPath === '/dashboard'
              ? 'bg-[#00B0F0]'
              : 'bg-white hover:bg-[#dcebf9]'
              }`}
            >
              <span className="mr-2 inline-block">
                <AiTwotoneHome className='h-4 w-4 mr-1' />
              </span>

              <span className="inline-block">
                <Text
                  variant='paragraph_3'
                  className="font-bold capitalize"
                >
                  Home
                </Text>
              </span>
            </a>
          </Link>
        </li>

        <li className='block'>
          <Link href='/dashboard/account'>
            <a className={`block flex items-center pl-6 py-3 mx-7 mb-3 rounded 
              text-center cursor-pointer transition-colors text-[#292D32]
              ${router.asPath === '/dashboard/account'
              ? 'bg-[#00B0F0]'
              : 'bg-white hover:bg-[#dcebf9]'
              }`}
            >
              <span className="mr-2 inline-block">
                <MdManageAccounts className='h-5 w-5' />
              </span>

              <span className="inline-block">
                <Text
                  variant='paragraph_3'
                  className="font-bold capitalize"
                >
                  Account
                </Text>
              </span>
            </a>
          </Link>
        </li>

        <li className='block'>
          <Link href='/dashboard/messages'>
            <a className={`block flex items-center pl-6 py-3 mx-7 mb-3 rounded 
              text-center cursor-pointer transition-colors text-[#292D32]
              ${router.asPath === '/dashboard/messages'
              ? 'bg-[#00B0F0]'
              : 'bg-white hover:bg-[#dcebf9]'
              }`}
            >
              <span className="mr-2 inline-block">
                <AiFillMessage className='h-4.5 w-4.5' />
              </span>

              <span className="inline-block">
                <Text
                  variant='paragraph_3'
                  className="font-bold capitalize"
                >
                  Messages
                </Text>
              </span>
            </a>
          </Link>
        </li>

        <li className='block'>
          <Link href='/dashboard/favourites'>
            <a className={`block flex items-center pl-6 py-3 mx-7 mb-3 rounded 
              text-center cursor-pointer transition-colors text-[#292D32]
              ${router.asPath === '/dashboard/favourites'
              ? 'bg-[#00B0F0]'
              : 'bg-white hover:bg-[#dcebf9]'
              }`}
            >
              <span className="mr-2 inline-block">
                <BsFillStarFill className='h-4 w-4' />
              </span>

              <span className="inline-block">
                <Text
                  variant='paragraph_3'
                  className="font-bold capitalize"
                >
                  Favourites
                </Text>
              </span>
            </a>
          </Link>
        </li>
      </ul>

      <div>
        <Link href='/'>
          <a className='block flex items-center pl-6 py-3 mx-7 mb-3 text-center cursor-pointer'>
            <MdLogin className='mr-2.5 h-5 w-5'/>
            <Text variant='paragraph_3' className='font-bold'>Log Out</Text>
          </a>
        </Link>
      </div>
    </div>
  )
}


export default DashboardSideBar;

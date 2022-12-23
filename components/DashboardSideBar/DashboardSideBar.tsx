import React, { Dispatch, forwardRef, SetStateAction } from 'react';
import { RiHome4Fill } from 'react-icons/ri';
import { IoMdWallet } from 'react-icons/io';
import { TbMessage2 } from 'react-icons/tb';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2';
import { MdLogin } from 'react-icons/md';
import { SingletonRouter, useRouter } from 'next/router';
import Link from 'next/router';
import Image from 'next/image';
import Logo from '../../assets/png/logo.png';
import { Text } from '../typography/typography';


interface IMyProps {
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
}


const DashboardSideBar: React.FC<IMyProps> = forwardRef(({ showNav, setShowNav }, ref: any) => {
  const router = useRouter();

  return (
    <div ref={ref} className="h-full">
      <div className="flex justify-center mt-7 mb-14">
        <div className="w-full flex justify-between items-center ml-12 mr-4">
          {/* <Link href='/dashboard'> */}
            <Image src={Logo} alt="logo" />
          {/* </Link> */}
          <HiOutlineBars3BottomLeft 
            className={`h-8 w-8 lg:hidden block cursor-pointer text-gray-700 ${showNav ? 'block' : 'hidden'}`}
            onClick={() => setShowNav(!showNav)} 
          />
        </div>
      </div>

      <div className="flex flex-col mb-24">
        {/* <Link href="/"> */}
          <div 
            className={`pl-6 py-3 mx-7 mb-3 rounded text-center cursor-pointer flex items-center transition-colors ${
              router.pathname == "/"
              ? "bg-[#00B0f0]"
              : "text-gray-600 hover:bg-[#00B0f0] hover:text-neutral-800"
            }`}
          >
            <div className="mr-2">
              <RiHome4Fill className='h-5 w-5' />
            </div>

            <div>
              <Text 
                variant='paragraph_3' 
                className={`${router.pathname == "/" ? "font-bold" : "font-medium"}`}
              >
                Home
              </Text>
            </div>
          </div>
        {/* </Link> */}

        {/* <Link href="/account"> */}
          <div 
            className={`pl-6 py-3 mx-7 mb-3 rounded text-center cursor-pointer flex items-center transition-colors ${
              router.pathname == "/account"
              ? "bg-[#00B0f0]"
              : "text-gray-600 hover:bg-[#00B0f0] hover:text-neutral-800"
            }`}
          >
            <div className="mr-2">
              <IoMdWallet className='h-5 w-5' />
            </div>

            <div>
              <Text 
                variant='paragraph_3' 
                className={`${router.pathname == "/" ? "font-bold" : "font-medium"}`}
              >
                Account
              </Text>
            </div>
          </div>
        {/* </Link> */}

        {/* <Link href="/messages"> */}
          <div 
            className={`pl-6 py-3 mx-7 mb-3 rounded text-center cursor-pointer flex items-center transition-colors ${
              router.pathname == "/messages"
              ? "bg-[#00B0f0]"
              : "text-gray-600 hover:bg-[#00B0f0] hover:text-neutral-800"
            }`}
          >
            <div className="mr-2">
              <TbMessage2 className='h-5 w-5' />
            </div>

            <div>
              <Text 
                variant='paragraph_3' 
                className={`${router.pathname == "/" ? "font-bold" : "font-medium"}`}
              >
                Messages
              </Text>
            </div>
          </div>
        {/* </Link> */}

        {/* <Link href="/favourites"> */}
          <div 
            className={`pl-6 py-3 mx-7 mb-3 rounded text-center cursor-pointer flex items-center transition-colors ${
              router.pathname == "/favourites"
              ? "bg-[#00B0f0]"
              : "text-gray-600 hover:bg-[#00B0f0] hover:text-neutral-800"
            }`}
          >
            <div className="mr-2">
              <MdOutlineFavoriteBorder className='h-5 w-5' />
            </div>

            <div>
              <Text 
                variant='paragraph_3' 
                className={`${router.pathname == "/" ? "font-bold" : "font-medium"}`}
              >
                Favourites
              </Text>
            </div>
          </div>
        {/* </Link> */}
      </div>

      <div className="flex items-center pl-6 py-3 mx-7 mb-3 text-center cursor-pointer">
        {/* <Link href=''> */}
          <MdLogin className='mr-2.5 h-5 w-5'/>
          <Text variant='paragraph_3' className='font-medium'>Log Out</Text>
        {/* </Link> */}
      </div>
    </div>
  )
})

DashboardSideBar.displayName = "DashboardSideBar";

export default DashboardSideBar;

import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { AiFillMessage } from 'react-icons/ai';
import { IoIosClose } from 'react-icons/io';
import { MdLogin, MdManageAccounts } from 'react-icons/md';
import { SingletonRouter, useRouter } from 'next/router';
import Link from 'next/router';
import Image from 'next/image';
import Logo from '../../assets/png/logo.png';
import { Text } from '../typography/typography';
import { BsFillStarFill, BsHouseFill } from 'react-icons/bs';


interface IMyProps {
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
}


const DashboardSideBar: React.FC<IMyProps> = ({ showNav, setShowNav }: IMyProps) => {
  const [currentRoute, setCurrentRoute] = useState("Home");

  const renderIcon = useCallback((element: React.ReactNode) => {
    switch (element) {
      case "Home":
        return <BsHouseFill className='h-4 w-4' />;
      case "Account":
        return <MdManageAccounts className='h-5 w-5' />;
      case "Messages":
        return <AiFillMessage className='h-4.5 w-4.5' />;
      case "Favourites":
        return <BsFillStarFill className='h-4 w-4' />;
    }
  }, []);
  const navigationData = ["Home", "Account", "Messages", "Favourites"];

  
  const router = useRouter();

  return (
    <div 
      className={`fixed left-0 top-0 w-60 sm:w-72 duration-[400ms] h-full z-30 bg-white shadow-md
        ${showNav
        ? '-translate-x-full lg:translate-x-0'
        : '-translate-x-0 origin-right'
        }`}
    >
      <>
      <div className="flex justify-center mt-7 mb-14">
        <div className="w-full flex justify-between items-center ml-12 mr-4">
          {/* <Link href='/dashboard'> */}
            <Image src={Logo} alt="logo" />
          {/* </Link> */}
          <IoIosClose
            className={`h-8 w-8 lg:hidden block cursor-pointer text-gray-700 `}
            onClick={() => setShowNav(!showNav)} 
          />
        </div>
      </div>

      <ul className="flex flex-col mb-24 block">
        {navigationData.map((element, index): React.ReactNode => {
          return (
            <li
              key={index}
              onClick={() => setCurrentRoute(element)}
              className={`pl-6 py-3 mx-7 mb-3 rounded text-center cursor-pointer flex items-center transition-colors block 
                ${currentRoute === element
                ? "bg-[#00B0F0]"
                : "text-[#292D32] hover:bg-[#dcebf9]"
                }`}
            >
              {/* <Link href=''> */}
                <span className="mr-2 inline-block">
                  {renderIcon(element)}
                </span>

                <span className="inline-block">
                  <Text
                    variant='paragraph_3'
                    className="font-bold"
                  >
                    {element}
                  </Text>
                </span>
              {/* </Link> */}
            </li>
          )
        })}
      </ul>

      <div className="flex items-center pl-6 py-3 mx-7 mb-3 text-center cursor-pointer">
        {/* <Link href=''> */}
          <MdLogin className='mr-2.5 h-5 w-5'/>
          <Text variant='paragraph_3' className='font-medium'>Log Out</Text>
        {/* </Link> */}
      </div>
      </>
    </div>
  )
}


export default DashboardSideBar;

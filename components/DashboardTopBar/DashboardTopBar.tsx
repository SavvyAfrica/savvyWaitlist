import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { MdOutlineShoppingCart } from 'react-icons/md';
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2';
import Image from 'next/image';
import defaultProfile from '../../assets/png/defaultProfile.png';
import { Text } from '../typography/typography';
import { useAppStore } from '../../global/store';
import { userService } from '../../services';
import { Tooltip } from 'react-tooltip'


let image = defaultProfile;

const DashboardTopBar = () => {
    const { showNav, setShowNav } = useAppStore();


    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState<string>('data:image/png;base64,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');
    
    
    async function profileImgUpdate(params: any) {
        try {
            await userService.update(params);
        } catch {}
    }

    // profile picture upload to client
    const uploadToClient = (event: any) => {
        if (event.target.files && event.target.files[0]) {
          const i = event.target.files[0];
    
          setImage(i);
          setCreateObjectURL(URL.createObjectURL(i));
        }
    };
    
    // profile picture upload to server if false
    // const uploadToServer = async (event: any) => {
    //     const body = new FormData();
    //     body.append("file", image);
    //     const response = await fetch("/api/file", {
    //       method: "POST",
    //       body
    //     });
    // };


    const [currentSubject, setCurrentSubject] = useState<any>();
    useEffect(() => {
        // Getting current logged in user
        const subject = userService.userValue;
        // const isLoggedIn = subject && subject.token;

        if (subject !== undefined){
           setCurrentSubject(subject);
        }
    }, [])


    return (
        <div 
            className="w-full h-auto"
        >
            <div className="pb-6 pt-9 w-full flex justify-between items-start">

                <div>
                    <div className="lg:hidden block -translate-x-1">
                        <HiOutlineBars3BottomLeft 
                            className='h-8 w-8 cursor-pointer text-gray-700' 
                            onClick={() => setShowNav(!showNav)} 
                        />
                    </div>
                
                    <div className="w-auto lg:mt-0 mt-7">
                        <Text variant='paragraph_4' className='text-[#707eae] font-bold'>
                            {`Hi ${currentSubject === undefined ? 'Guest' : currentSubject.firstName}`}
                        </Text>
                        <Text className='font-bold text-[#292d32] lg:text-[30px] sm:text-2xl text-sm'>Welcome to Savvy!</Text>
                    </div>
                </div>

                <div className="flex md:flex-row flex-row-reverse items-center">
                    <div className="md:mr-5 mr-0 md:ml-0 ml-2.5 lg:mr-8 cursor-pointer text-gray-700 bg-white rounded-full">
                        {/* <Link href=''> */}
                            <MdOutlineShoppingCart className="sm:h-10 h-[25px] sm:w-10 w-[25px] sm:p-2 p-1" />
                        {/* </Link> */}
                    </div>

                
                    <div 
                        className="w-full sm:py-1 py-0 sm:px-2 px-0 rounded-xl flex w-full justify-center items-center"
                        data-tooltip-content="Profile"
                        id="profile" 
                    >
                        
                        <div className="inline-block sm:h-10 h-[25px] sm:w-10 w-[25px]">
                            <span className="inline-block w-full h-full relative">
                                {currentSubject === undefined ?
                                    <img 
                                        src={createObjectURL} 
                                        alt="profile picture" 
                                        className="inline-block h-full w-full rounded-full" 
                                    /> : 
                                    <img 
                                        src={createObjectURL} 
                                        alt="profile picture" 
                                        className="inline-block h-full w-full rounded-full" 
                                    />
                                }

                                <input 
                                    type="file" 
                                    accept="image/*" 
                                    name="myImage" 
                                    title=" "
                                    onChange={uploadToClient}
                                    className="w-full h-full opacity-0 absolute inset-0" 
                                />
                            </span>
                        </div>
                            
                        <div 
                            className="md:block hidden ml-3 flex flex-col items-start"
                            data-tooltip-content={`${currentSubject === undefined ? 'User' : currentSubject.userType}`}
                        >
                            <Text variant='paragraph_4' className="font-semibold text-gray-700">
                                {`${currentSubject === undefined ? 
                                    'Guest' : 
                                    `${currentSubject.firstName} ${currentSubject.lastName}`
                                }`}
                            </Text>
                            <Text variant='paragraph_4' className='font-normal capitalize'>
                                {`${currentSubject === undefined ? 'User' : currentSubject.userType}`}
                            </Text>
                        </div>

                        <Tooltip anchorId="profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardTopBar;
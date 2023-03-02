import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2';
import { Text } from '../typography/typography';
import { useAppStore } from '../../global/store';
import { userService } from '../../services';


// const CLOUDINARY_UPLOAD_PRESET  = 'inm54fsh';
// const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dfrp4wi75'

const DashboardTopBar = () => {
    const [createObjectURL, setCreateObjectURL] = useState<string>('http://cdn.onlinewebfonts.com/svg/img_569204.png');
    const [profileImage, setProfileImage] = useState<any>({
        profilePicture:''
    });

    const profilePictureRef = React.useRef<HTMLInputElement>(null);


    // useContext
    const { showNav, setShowNav } = useAppStore();


    const [currentSubject, setCurrentSubject] = useState<any>();
    useEffect(() => {
        // Getting current logged in user
        const subject = userService.userValue;

        if (subject !== undefined){
           setCurrentSubject(subject);
        }
    }, []);


    const onSubmit = useCallback(
        async () => {
            try {
                // const formData = new FormData();

                // formData.append('profilePicture', profileImage);

                await userService.update('image', profileImage);

            } catch (e) {
                // toast.error(e.message);

            } finally {
                // setIsLoading(false);
            }
    }, []);


    // profile picture upload to client/server
    const onAvatarChange = useCallback((event: any) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];

            // const formData = new FormData();
            // formData.append('profilePicture', file);
            // formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
            
            setProfileImage({
                profilePicture: file,
            });

            console.log(file);

            setCreateObjectURL(URL.createObjectURL(file));
        }

        onSubmit()
    }, []);
    


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
                    >
                        <div className="inline-block sm:h-10 h-[25px] sm:w-10 w-[25px] relative">
                            {currentSubject === undefined ?
                                <img
                                    className='inline-flex justify-center items-center h-full w-full rounded-full'
                                    src={createObjectURL}
                                    alt='profile'
                                /> : 
                                <img
                                    className='inline-flex justify-center items-center h-full w-full rounded-full'
                                    src={createObjectURL}
                                    alt='profile'
                                />
                            }

                            <input
                                aria-label="Your Avatar"
                                type="file"
                                accept="image/*"
                                ref={profilePictureRef}
                                onChange={onAvatarChange}
                                title=" "
                                className='absolute inset-0 w-full h-full opacity-0 z-[1] cursor-pointer'
                            />
                        </div>
                            
                        <div className="md:block hidden ml-3 flex flex-col items-start">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardTopBar;
import React, { useEffect, useState } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2';
import { Text } from '../typography/typography';
import { useAppStore } from '../../global/store';
import { userService } from '../../services';
import DashboardProfileDetails from '../DashboardProfileDetails/DashboardProfileDetails';


const DashboardTopBar = () => {
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

                
                    <DashboardProfileDetails currentSubject={currentSubject} />
                </div>
            </div>
        </div>
    )
}

export default DashboardTopBar

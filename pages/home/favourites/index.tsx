import React, { useEffect, useState } from 'react'
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2'
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout'
import { useAppStore } from '../../../global/store'
import { Text } from '../../../components/typography/typography'
import { MdOutlineShoppingCart } from 'react-icons/md'
import Link from 'next/link'
import Image from 'next/image'
import { userService } from '../../../services'
import { withAuth } from '../../../components/views/protectedRoute'
import DashboardProfileDetails from '../../../components/DashboardProfileDetails/DashboardProfileDetails'

function favourites() {
  const { showNav, setShowNav } = useAppStore()

  const [currentSubject, setCurrentSubject] = useState<any>()

  useEffect(() => {
    // Getting current logged in user
    const subject = userService.userValue

    if (subject !== undefined) {
      setCurrentSubject(subject)
    }
  }, [])

  return (
    <>
      <DashboardLayout>
        <div className='pb-6 pt-9 w-full flex justify-between items-start'>
          <div>
            <div className='lg:hidden -translate-x-1'>
              <HiOutlineBars3BottomLeft
                className='h-8 w-8 cursor-pointer text-gray-700'
                onClick={() => setShowNav(!showNav)}
              />
            </div>

            <div className='w-auto lg:mt-0 mt-7'>
              <Text className='font-bold text-[#292d32] lg:text-[30px] sm:text-2xl text-sm'>
                Favourites
              </Text>
            </div>
          </div>

          <div className='flex md:flex-row flex-row-reverse items-center'>
            <div className='md:mr-5 mr-0 md:ml-0 ml-2.5 lg:mr-8 cursor-pointer text-gray-700 bg-white rounded-full'>
              {/* <Link href=''> */}
              <MdOutlineShoppingCart className='sm:h-10 h-[25px] sm:w-10 w-[25px] sm:p-2 p-1' />
              {/* </Link> */}
            </div>

            <DashboardProfileDetails currentSubject={currentSubject} />
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

export default withAuth(favourites)

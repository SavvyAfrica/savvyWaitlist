import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import defaultProfile from '../../../assets/png/logo.png'
import Smiley from '../../../assets/png/smiley.png'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { Text } from '../../../components/typography/typography'
import Image from 'next/image'
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2'
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout'
import { useAppStore } from '../../../global/store'
import { userService } from '../../../services'
import DbMessageBox from '../../../components/DbMessageBox/DbMessageBox'
import FeedbackModal from '../../../components/Modals/FeedbackModal'
import { withAuth } from '../../../components/views/protectedRoute'
import DashboardProfileDetails from '../../../components/DashboardProfileDetails/DashboardProfileDetails'

function messages() {
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
        <div className='md:pb-[70px] pb-[40px] pt-9 w-full flex justify-between items-start'>
          <div>
            <div className='lg:hidden -translate-x-1'>
              <HiOutlineBars3BottomLeft
                className='h-8 w-8 cursor-pointer text-gray-700'
                onClick={() => setShowNav(!showNav)}
              />
            </div>

            <div className='w-auto lg:mt-0 mt-7'>
              <Text className='font-bold text-[#292d32] lg:text-[30px] sm:text-2xl text-sm'>
                Messages & Notifications
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

        <div className='gap-3.5 flex md:flex-row flex-col-reverse items-start'>
          <section className='md:w-4/6 w-full'>
            <DbMessageBox className={`${'max-w-full'}`}>
              <div className='flex items-start justify-start sm:mb-4 mb-7'>
                <div className='sm:block hidden'>
                  <Image src={Smiley} alt='smiley' />
                </div>

                <span className='sm:max-w-[280px] max-w-full lg:h-[40px] h-full inline-block sm:ml-[18px] ml-0'>
                  <Text
                    variant='paragraph_4'
                    className='text-ellipsis font-semibold text-[#1A1F36]'
                  >
                    This is a reminder that your iPhone 13 rent is due this
                    week. For early renewal…
                  </Text>
                </span>
              </div>

              <span className='w-full flex sm:flex-row flex-col sm:items-center items-end justify-between'>
                <Text
                  variant='paragraph_4'
                  className='text-[#A5ACB8] w-auto sm:ml-10 ml-0'
                >
                  Jola from Savvy
                </Text>
                <Text
                  variant='paragraph_4'
                  className='text-[#A5ACB8] sm:mt-0 mt-2'
                >
                  Today at 9:42 AM
                </Text>
              </span>
            </DbMessageBox>

            <DbMessageBox className={`${'max-w-full'}`}>
              <div className='flex items-start justify-start sm:mb-4 mb-7'>
                <div className='sm:block hidden'>
                  <Image src={Smiley} alt='smiley' />
                </div>

                <span className='max-w-[280px] max-w-full lg:h-[40px] h-full inline-block sm:ml-[18px] ml-0'>
                  <Text
                    variant='paragraph_4'
                    className='text-ellipsis font-semibold text-[#1A1F36]'
                  >
                    This is a reminder that your iPhone 13 rent is due this
                    week. For early renewal…
                  </Text>
                </span>
              </div>

              <span className='w-full flex sm:flex-row flex-col sm:items-center items-end justify-between'>
                <Text
                  variant='paragraph_4'
                  className='text-[#A5ACB8] w-auto sm:ml-10 ml-0'
                >
                  Jola from Savvy
                </Text>
                <Text
                  variant='paragraph_4'
                  className='text-[#A5ACB8] sm:mt-0 mt-2'
                >
                  Today at 9:42 AM
                </Text>
              </span>
            </DbMessageBox>

            <DbMessageBox className={`${'max-w-full'}`}>
              <div className='flex items-start justify-start sm:mb-4 mb-7'>
                <div className='sm:block hidden'>
                  <Image src={Smiley} alt='smiley' />
                </div>

                <span className='max-w-[280px] max-w-full lg:h-[40px] h-full inline-block sm:ml-[18px] ml-0'>
                  <Text
                    variant='paragraph_4'
                    className='text-ellipsis font-semibold text-[#1A1F36]'
                  >
                    This is a reminder that your iPhone 13 rent is due this
                    week. For early renewal…
                  </Text>
                </span>
              </div>

              <span className='w-full flex sm:flex-row flex-col sm:items-center items-end justify-between'>
                <Text
                  variant='paragraph_4'
                  className='text-[#A5ACB8] w-auto sm:ml-10 ml-0'
                >
                  Jola from Savvy
                </Text>
                <Text
                  variant='paragraph_4'
                  className='text-[#A5ACB8] sm:mt-0 mt-2'
                >
                  Today at 9:42 AM
                </Text>
              </span>
            </DbMessageBox>
          </section>

          <DbMessageBox className='max-w-full md:w-2/6 h-[108px] flex items-center justify-between'>
            <span>
              <Text
                variant='paragraph_1'
                className='xl:text-xl text-base text-[#1B2559] mb-2.5 font-bold'
              >
                New message
              </Text>
              <Text variant='paragraph_4' className='text-[#A1A0BD]'>
                Send a message
              </Text>
            </span>

            <FeedbackModal />
          </DbMessageBox>
        </div>
      </DashboardLayout>
    </>
  )
}

export default withAuth(messages)

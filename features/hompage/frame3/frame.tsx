import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import IMAGE from '../../../assets/png/ui2.png'
import { Button } from '../../../components/button/button'
import { Text } from '../../../components/typography/typography'
import CustomModal from '../../../components/modal/Modal'

const Frame = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div
      className={`maxWidth mx-auto w-full flex md:justify-center justify-between 
        items-center md:flex-row flex-col-reverse py-5 px-5 lg:pt-5 lg:pb-5 lg:pl-10 lg:pr-10 md:mb-36 mb-20`}
    >
      <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className='md:w-[35%] w-full  md:mr-0 mr-auto'>
        <Text
          variant='home_heading_3_32px'
          className='font-semibold sm:text-[32px] text-[25px] lg:mb-8 sm:mb-6 mb-[20px]'
        >
          Shop Your Way
        </Text>

        <Text variant='paragraph_3' className='font-normal text-[#A6A6A6]'>
          Buy your favorite gadgets for fun or work, and return them later for
          swap or sell it back to Savvy – from anywhere. Enjoy special prices,
          deals. express delivery, and more
        </Text>

        <div className='w-full'>
          <Button
            className='bg-white border border-[#00B0F0] w-[146px] h-[39px] rounded-lg mt-4'
            onClick={() => setIsModalOpen(true)}
          >
            <Text variant='paragraph_4' className='font-medium '>
              Join the waitlist
            </Text>
          </Button>
        </div>
      </div>

      <div
        className={`md:w-[50%] w-full md:mr-auto mr-0 md:ml-0 ml-auto 
        inline-flex md:justify-center justify-center`}
      >
        <Image src={IMAGE} width='250' height='250' />
      </div>
    </div>
  )
}

export default Frame

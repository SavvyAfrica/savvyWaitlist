import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import IMAGE from '../../../assets/png/ui.png'
import { Button } from '../../../components/button/button'
import { Text } from '../../../components/typography/typography'
import CustomModal from '../../../components/modal/Modal'

const Frame = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div
      className={`maxWidth mx-auto w-full flex md:justify-center justify-between 
        items-center md:flex-row flex-col py-5 px-5 lg:pt-5 lg:pb-5 lg:pl-[6rem] lg:pr-[6rem]  md:mb-36 mb-20`}
    >
      <div
        className={`md:w-[50%] w-full  ml-0 md:mr-0 mr-auto 
        md:mb-0 mb-7 inline-flex md:justify-start justify-center`}
      >
        <Image src={IMAGE} width='250' height='250' />
      </div>

      <div className='md:w-[35%] w-full md:mr-auto md:ml-0 ml-auto'>
        <Text
          variant='home_heading_3_32px'
          className='font-semibold sm:text-[32px] text-[25px] lg:mb-8 sm:mb-6 mb-[20px]'
        >
          Rent With Ease
        </Text>
        <CustomModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        <Text variant='paragraph_3' className='font-normal text-[#A6A6A6]'>
          Rent tech products for a small amount, renew or end your subscription
          anytime through your account. Complete online verification, order,
          enjoy, and send it back.
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
    </div>
  )
}

export default Frame

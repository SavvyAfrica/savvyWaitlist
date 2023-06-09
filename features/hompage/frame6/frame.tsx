import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Phones from '../../../assets/png/phones.png'
import { Button } from '../../../components/button/button'
import { Text } from '../../../components/typography/typography'
import CustomModal from '../../../components/modal/Modal'

function Frame() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div
      className={`maxWidth mx-auto w-full flex justify-between 
        items-center md:flex-row flex-col-reverse py-5 px-5 lg:pt-5 lg:pb-5 lg:pl-[6rem] lg:pr-[6rem] md:mb-36 mb-20`}
    >
      <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className='md:w-[35%] w-full md:mr-auto mr-0'>
        <Text
          variant='home_heading_3_32px'
          className='font-semibold sm:text-[32px] text-[25px max-w-[400px]'
        >
          Gadget subscription made for everyone
        </Text>

        <div className='w-full mb-[28px] mt-[46px] '>
          <Button
            className='bg-[#00B0F0] w-[146px] h-[39px] rounded-lg'
            onClick={() => setIsModalOpen(true)}
          >
            <Text variant='paragraph_4' className='font-medium text-white'>
              Join the waitlist
            </Text>
          </Button>
        </div>

        <Text variant='paragraph_4' className='font-normal text-black'>
          *Additional fee applies for damages or replacement.
        </Text>
        <Text variant='paragraph_4' className='font-normal text-black'>
          *Restrictions apply to unverifiable users.
        </Text>
        <Text variant='paragraph_4' className='font-normal text-black'>
          *Read our terms of use at sign-up.
        </Text>
      </div>

      <div className='md:w-[50%] w-full md:ml-auto ml-0 flex md:justify-end justify-center items-center'>
        <Image src={Phones} width='500' height='500' />
      </div>
    </div>
  )
}

export default Frame

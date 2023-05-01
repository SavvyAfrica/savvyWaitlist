import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../../../assets/png/logo.png'
import { Button } from '../../../components/button/button'
import { Text } from '../../../components/typography/typography'
import CustomModal from '../../../components/modal/Modal'

function header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className='w-full maxWidth mx-auto shadow2 px-5 py-2.5 sticky lg:block top-0 bg-white z-[1000]'>
        <CustomModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        <div className='flex items-center justify-between'>
          <div className='w-[20%] cursor-pointer'>
            <Link href={'/'}>
              <Image src={Logo} alt='Logo' />
            </Link>
          </div>

          <div
            className='flex justify-end items-center w-[20%]'
            onClick={() => setIsModalOpen(true)}
          >
            <Button className='bg-[#00B0F0] w-[146px] h-[39px] rounded-lg'>
              <Text variant='paragraph_4' className='font-medium text-white'>
                Join the waitlist
              </Text>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default header

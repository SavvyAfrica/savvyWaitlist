import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import IMAGE from '../../../assets/png/ui.png'
import { Button } from '../../../components/Button/button'
import { Text } from '../../../components/typography/typography'

const Frame = () => {
  return (
    <div
      className={`maxWidth mx-auto w-full flex md:justify-center justify-between 
        items-center md:flex-row flex-col py-5 px-5 lg:pt-5 lg:pb-5 lg:pl-10 lg:pr-10  md:mb-36 mb-20`}
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

        <Text variant='paragraph_3' className='font-normal text-[#A6A6A6]'>
          Rent tech products for a small amount, renew or end your subscription
          anytime through your account. Complete online verification, order,
          enjoy, and send it back.
        </Text>

        <div className='w-full'>
          <Button className='bg-white border border-[#00B0F0] w-[118px] h-[39px] rounded-lg mt-4'>
            <Link href='#'>
              <a>
                <Text variant='paragraph_4' className='font-medium'>
                  Rent Now
                </Text>
              </a>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Frame

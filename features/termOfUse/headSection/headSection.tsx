import Image from 'next/image'
import React from 'react'
import { Text } from '../../../components/typography/typography'
import Terms from '../terms/terms'

function HeadSection() {
  return (
    <div className=' w-full flex flex-col justify-center items-center px-5 py-5 '>
      <div className='heading flex justify-center min-h-[30vh]'>
        <div className='w-[50%] relative flex flex-col justify-center items-center  '>
          <div className='flex justify-start items-start w-full'>
            <Text variant='home_heading_4_32px' className='font-bold'>
              Savvy Terms of Use
            </Text>
          </div>
          <div className='absolute top-2 left-0'>
            <Image src={'/Decore.svg'} width={400} height={100} />
          </div>
          <div className=' mt-6'>
            <Text variant='paragraph_3' className='font-normal text-sm'>
              Welcome to Savvy. These terms of use ("Terms of Use") are between
              you and Savvy. Before using this service, as defined below, please
              read these Terms of Use, by Savvy.africa. If you do not accept the
              terms of this Agreement, then you may not use the Savvy Service.
            </Text>

            <p className='font-normal text-sm text-[#00B0F0] mt-4'>
              Last updated: 5/29/2022
            </p>
          </div>
        </div>
      </div>
      <Terms />
    </div>
  )
}

export default HeadSection

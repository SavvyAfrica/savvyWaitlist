import React from 'react'
import { Text } from '../../../components/typography/typography'
import Link from 'next/link'
import Image from 'next/image'

function HeadSection() {
  return (
    <div className='heading w-full grid grid-cols-2 px-8 py-8 mt-8'>
      <div className='flex flex-col justify-between space-y-6'>
        <div>
          <Text variant='paragraph_2' className='text-black'>
            Useful tips
          </Text>
          <Text variant='home_heading_4_32px' className='text-black font-bold'>
            The most useful gadgets to monitor your baby.
          </Text>
        </div>
        <div className='text-[#00B0F0] flex items-center space-x-2'>
          <Link href='#'>Read More</Link>
          <svg
            width='13'
            height='10'
            viewBox='0 0 13 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='flex items-center mt-[4px]'
          >
            <path
              d='M0 4.75H11.5M11.5 4.75L7 0.75M11.5 4.75L7 9.25'
              stroke='#00B0F0'
              stroke-width='2'
            />
          </svg>
        </div>
      </div>
      <div className='w-full h-full relative'>
        <Image
          src={'/baby.png'}
          alt='baby pics'
          layout='fill'
          objectFit='contain'
        />
      </div>
    </div>
  )
}

export default HeadSection

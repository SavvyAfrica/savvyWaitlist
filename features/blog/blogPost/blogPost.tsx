import React from 'react'
import { Text } from '../../../components/typography/typography'
import Link from 'next/link'
import { Button } from '../../../components/button/button'

function BlogPost() {
  return (
    <div className='w-full flex justify-center items-center flex-col space-x-10  mt-[4rem] pb-[4rem]'>
      <div className='grid grid-cols-2 gap-[4rem]'>
        <div>
          <div className='blog-img'></div>
          <div className='mt-5 space-y-4'>
            <div>
              <Text variant='paragraph_1' className='text-black font-medium'>
                Product Review
              </Text>
              <Text variant='paragraph_2' className='text-[#545964] font-light'>
                Be ready for any adventure with this easy-to-carry drones.
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
        </div>
        <div>
          <div className='blog-img'></div>
          <div className='mt-5 space-y-4'>
            <div>
              <Text variant='paragraph_1' className='text-black font-medium'>
                Product Review
              </Text>
              <Text variant='paragraph_2' className='text-[#545964] font-light'>
                Be ready for any adventure with this easy-to-carry drones.
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
        </div>
      </div>
      <div className='w-full flex justify-center items-center mt-8'>
        <Button className='border border-[#F4B183] rounded-[10px] w-[152px] h-[50px] space-x-2'>
          <Text variant='paragraph_4' className='font-light'>
            Load More
          </Text>
          <svg
            width='14'
            height='10'
            viewBox='0 0 14 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='mt-[3px]'
          >
            <path
              d='M0.75 4.75H12.25M12.25 4.75L7.75 0.75M12.25 4.75L7.75 9.25'
              stroke='black'
              stroke-width='2'
            />
          </svg>
        </Button>
      </div>
    </div>
  )
}

export default BlogPost

import React from 'react'
import { Text } from '../../../components/typography/typography'
import Image from 'next/image'
import User from '../../../assets/Image.png'

const Frame = () => {
  return (
    <div className='w-full grid grid-cols-2 gap-5 items-center px-5 h-[320px]'>
      <div className='space-y-4'>
        <Text variant='paragraph_4' className='text-[#A6A6A6]'>
          Customer Review
        </Text>
        <Text variant='home_heading_3_32px' className='font-bold text-[22px]'>
          What People Say About Us.
        </Text>
        <div className='flex space-x-4'>
          <div className='w-[10px] h-[10px] bg-[#E5E5E5] rounded-full cursor-pointer'></div>
          <div className='w-[10px] h-[10px] bg-[#E5E5E5] rounded-full cursor-pointer'></div>
          <div className='w-[10px] h-[10px] bg-[#E5E5E5] rounded-full cursor-pointer'></div>
        </div>
      </div>
      <div className='p-5 relative h-full'>
        <div className='w-[60px] h-[60px] rounded-full absolute z-[9999]'>
          <Image
            src={User}
            height={100}
            width={100}
            className='w-full h-full'
          />
        </div>
        <div className='w-[450px] p-5 h-[180px] absolute  rounded-[10px] customer right-[5.5rem] top-[2.5rem] space-y-3 bg-white'>
          <Text variant='paragraph_4' className='text-[#5E6282]'>
            We were on the hunt for better work tools with a small budget before
            we discovered Savvy. Their service really increased the productivity
            of our team.
          </Text>
          <Text variant='paragraph_4' className='font-bold text-[#5E6282]'>
            Frank Ighodalo
          </Text>
          <Text variant='paragraph_4' className='text-[#5E6282]'>
            CEO Protia Technologies
          </Text>
        </div>
        <div className='w-[450px] p-5 h-[180px] absolute rounded-[10px] z-[-9999] border-2  right-[1rem] top-[8rem] customer__2 space-y-3'>
          <Text variant='paragraph_4' className='text-[#5E6282]'>
            We were on the hunt for better work tools with a small budget before
            we discovered Savvy. Their service really increased the productivity
            of our team.
          </Text>
          <Text variant='paragraph_4' className='font-bold text-[#5E6282]'>
            Frank Ighodalo
          </Text>
          <Text variant='paragraph_4' className='text-[#5E6282]'>
            CEO Protia Technologies
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Frame

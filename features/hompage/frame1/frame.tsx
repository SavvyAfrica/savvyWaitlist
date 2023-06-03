import React from 'react'
import { ArrowRight } from 'react-feather'
import { Text } from '../../../components/typography/typography'

function Frame() {
  return (
    <div className='flex flex-col items-center justify-center w-full px-5 py-5 mx-auto mb-20 maxWidth lg:pt-5 lg:pb-5 lg:pl-10 lg:pr-10 md:mb-36'>
      <div
        className={`frame rounded-[10px] xl:w-[52%] lg:w-[70%] 
        md:w-[80%] w-full sm:h-[98px] h-auto flex justify-center items-center`}
      >
        <Text
          variant='home_heading_3_32px'
          className='text-[19px] lg:text-[24px] text-center sm:px-0 px-10 sm:py-0 py-3 font-semibold text-[#292D32] mx-auto'
        >
          Save Beyond Your Expectations
        </Text>
      </div>

      <div className='lg:w-[42%] sm:w-[60%] w-[80%] mt-5 flex justify-center items-center mb-12'>
        <Text
          variant='paragraph_3'
          className='font-normal text-center text-[#A6A6A6] '
        >
          Save on all the coolest gadgets you can’t live without and get access
          to a huge range of products from the newest computers to obscure
          gaming gadgets, drones, and more without the usual stress.
        </Text>
      </div>
    </div>
  )
}

export default Frame

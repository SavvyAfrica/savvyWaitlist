import React from 'react'
import { ArrowRight } from 'react-feather'
import { Text } from '../../../components/typography/typography'

function Frame() {
  return (
    <div className='maxWidth mx-auto w-full flex flex-col justify-center items-center py-5 px-5 lg:pt-5 lg:pb-5 lg:pl-10 lg:pr-10 md:mb-36 mb-20'>
      <div
        className={`frame rounded-[10px] xl:w-[52%] lg:w-[70%] 
        md:w-[80%] w-full sm:h-[98px] h-auto flex justify-center items-center`}
      >
        <Text
          variant='home_heading_3_32px'
          className='sm:text-[32px] text-[24px] text-center sm:px-0 px-10 sm:py-0 py-3 font-semibold text-[#292D32] mx-auto'
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

      <div className='flex justify-around items-center'>
        <div className='w-[50%] mx-auto'>
          <Text
            variant='paragraph_1'
            className='font-semibold text-[#292D32] underline decoration-1 mb-3'
          >
            Explore all features
          </Text>
          <Text
            variant='paragraph_4'
            className='font-normal text-[#A6A6A6] mb-3'
          >
            Take a quick tour and check out all that Savvy has to offer.
          </Text>
        </div>

        <div
          className={`sm:w-[80px] w-[60px] sm:h-[80px] h-[60px] rounded-full bg-[#F4F7FE] flex justify-center 
          items-center hover:scale-105 transition-all ease-in-out mx-auto cursor-pointer`}
        >
          <ArrowRight size={30} />
        </div>
      </div>
    </div>
  )
}

export default Frame

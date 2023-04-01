import React from 'react'
import { Text } from '../../../components/typography/typography'

function Frame() {
  return (
    <div className='w-full flex justify-center items-center mt-8 py-5 px-5 lg:pt-5 lg:pb-5 lg:pl-10 lg:pr-10'>
      <div className='w-[50%] py-4 frame rounded-[10px] flex justify-evenly items-center'>
        <div>
          <Text
            variant='paragraph_1'
            className='font-bold text-center text-[#00B0F0]'
          >
            2022
          </Text>
          <Text variant='paragraph_3' className='font-light text-[#292D32]'>
            Year founded
          </Text>
        </div>
        <div>
          <Text
            variant='paragraph_1'
            className='font-bold text-[#00B0F0] text-center'
          >
            7
          </Text>
          <Text variant='paragraph_3' className='font-light text-[#292D32]'>
            Team Size
          </Text>
        </div>
        <div>
          <Text
            variant='paragraph_1'
            className='font-bold text-[#00B0F0] text-center'
          >
            50+
          </Text>
          <Text variant='paragraph_3' className='font-light text-[#292D32]'>
            Satisfied Users
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Frame

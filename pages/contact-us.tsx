import React from 'react'
import { Text } from '../components/typography/typography'
import Image from 'next/image'

function Contactus() {
  return (
    <div className='w-full flex flex-col items-center justify-center  h-full'>
      <div className='heading h-[400px]  w-full grid grid-cols-2 items-center '>
        <div className='relative '>
          <div>
            <Text
              variant='home_heading_4_32px'
              className='font-bold text-center'
            >
              We’d love to hear from you
            </Text>
          </div>
          <div className='absolute top-7 right-[8rem]'>
            <Image src={'/Decore.svg'} width={400} height={100} />
          </div>
        </div>

        <div className='relative w-full h-full'>
          <Image
            src={'/sony.png'}
            alt='sonny'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>
      <div className='px-5 w-full h-full'>
        <div className='w-full border-2'>
          <div>
            <div className='relative w-full h-fulll'>
              <Image src={'/location.svg'} layout='fill' objectFit='contain' />
            </div>
            <div>
              <p>ADDRESS</p>
              <div>
                <p>ADDRESS</p>
                <p>ADDRESS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus

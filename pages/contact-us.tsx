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
      <div className='px-5 w-full h-full mt-5 mb-5'>
        <div className='w-full space-y-6 border-l-2 border-r-2 border-b-4 p-5'>
          <div className='flex items-center space-x-4'>
            <div className=''>
              <Image src={'/location.svg'} width={30} height={30} />
            </div>
            <div>
              <Text variant='paragraph_4' className='font-semibold mb-1'>
                Address
              </Text>

              <Text variant='paragraph_4' className='font-thin'>
                Spectrum Plaza, Zomputer Village, No 18, Otigba Street, Ikeja,
                Lagos.
              </Text>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <div className=''>
              <Image src={'/phone.svg'} width={30} height={30} />
            </div>
            <div>
              <Text variant='paragraph_4' className='font-semibold mb-1'>
                Phone
              </Text>

              <Text variant='paragraph_4' className='font-thin'>
                08081676438
              </Text>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <div className=''>
              <Image src={'/email.svg'} width={30} height={30} />
            </div>
            <div>
              <Text variant='paragraph_4' className='font-semibold mb-1'>
                Email
              </Text>

              <Text variant='paragraph_4' className='font-thin'>
                info@savvy.africa
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus

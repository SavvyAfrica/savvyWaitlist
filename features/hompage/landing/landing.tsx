import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Mask from '../../../assets/png/mask.png'
import Mask2 from '../../../assets/png/mask2.png'
import Mask3 from '../../../assets/png/mask3.png'
import { Button } from '../../../components/button/button'
import { Text } from '../../../components/typography/typography'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import CustomModal from '../../../components/modal/Modal'

function Landing() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className='heading maxWidth mx-auto w-full py-5 px-5 lg:pt-5 lg:pb-5 lg:pl-10 lg:pr-10 mt-3 '>
      <div className='w-full flex md:flex-row flex-col justify-around items-center'>
        <div className='md:w-[50%] w-full'>
          <div className='lg:max-w-[450px] md:max-w-[300px] sm:max-w-[45%] max-w-full'>
            <Text
              variant='home_heading_50px'
              className={`font-extrabold lg:text-[40px] text-[30px] w-full 
                sm:mx-0 mx-auto lg:mb-[59px] mb-[30px]`}
            >
              One gadget need. More ways to own.
            </Text>
          </div>

          <div className='lg:max-w-[470px] md:max-w-[399px] max-w-[80%]'>
            <Text
              variant='paragraph_3'
              className={`font-medium text-[#292D32] w-full 
                sm:mx-0 mx-auto lg:mb-[55px] mb-[35px]`}
            >
              Savvy is the smartest way to buy and rent quality tech products
              without weighing it down in your pocket.
            </Text>
          </div>

          <CustomModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
          <div className='w-full mb-4'>
            <Button
              className='bg-[#00B0F0] w-[146px] h-[39px] rounded-lg'
              onClick={() => setIsModalOpen(true)}
            >
              <Text variant='paragraph_4' className='font-medium text-white'>
                Join the waitlist
              </Text>
            </Button>
          </div>
        </div>

        <div className='md:w-[50%] w-full'>
          <div className='w-full h-full flex md:justify-end justify-center items-center'>
            <Carousel
              autoPlay
              showArrows={false}
              width='100%'
              interval={5000}
              axis='horizontal'
              showThumbs={false}
              infiniteLoop
              showStatus={false}
              showIndicators={false}
            >
              <Image src={Mask} width='595px' height={500} alt='Mask' />
              <Image src={Mask2} width='595px' height={500} alt='Mask' />
              <Image src={Mask3} width='595px' height={500} alt='Mask' />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing

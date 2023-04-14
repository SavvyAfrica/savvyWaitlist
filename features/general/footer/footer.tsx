import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Facebook, Instagram, Linkedin, Twitter } from 'react-feather'
import Logo from '../../../assets/png/logo.png'
import { Text } from '../../../components/typography/typography'
import { GoPlusSmall } from 'react-icons/go'
import { BiMinus } from 'react-icons/bi'
// import Collapsible from 'react-collapsible';

function footer() {
  const [websiteIsOpen, setWebsiteIsOpen] = useState<boolean>(false)
  const [companyIsOpen, setCompanyIsOpen] = useState<boolean>(false)
  const [resourcesIsOpen, setResourcesIsOpen] = useState<boolean>(false)

  return (
    <div className='maxWidth mx-auto w-full flex flex-col px-5 py-2.5'>
      <div className='w-full grid grid-cols-3 h-full  mb-[90px]'>
        <div className=' md:mb-0 mb-[34px] '>
          <div className='w-full'>
            <Image src={Logo} alt='Logo' />

            <Text
              variant='paragraph_1'
              className='lg:w-[55%] md:w-[65%] w-full text-[#A6A6A6] font-light mt-[18px]'
            >
              The smartest way to buy and rent tech gadgets.
            </Text>
          </div>
        </div>
        <div className=' pt-3'>
          <Text variant='paragraph_1' className='font-semibold text-center'>
            Send us a messages
          </Text>
          <Text variant='paragraph_4' className='font-semibold text-center'>
            Info@savvy.africa
          </Text>
        </div>
        <div className=' pt-3'>
          <Text variant='paragraph_1' className='font-semibold'>
            Follow us
          </Text>
          <div className='flex items-center space-x-5'>
            <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center shadow1'>
              <Facebook color='#444444' size={18} fill='#444444' />
            </div>
            <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center shadow1'>
              <Instagram color='#444444' size={18} />
            </div>
            <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center shadow1'>
              <Twitter color='#444444' size={18} fill='#444444' />
            </div>
            <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center shadow1'>
              <Linkedin color='#444444' size={18} fill='#444444' />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col justify-center space-y-5 md:items-center items-start mb-[25px]'>
        {/* <Text variant='paragraph_4' className='font-semibold'>
          Info@savvy.africa
        </Text> */}
        {/* <div className='flex justify-between items-center space-x-5'>
          <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center shadow1'>
            <Facebook color='#444444' size={18} fill='#444444' />
          </div>
          <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center shadow1'>
            <Instagram color='#444444' size={18} />
          </div>
          <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center shadow1'>
            <Twitter color='#444444' size={18} fill='#444444' />
          </div>
          <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center shadow1'>
            <Linkedin color='#444444' size={18} fill='#444444' />
          </div>
        </div> */}
        <Text variant='paragraph_4' className='font-light text-[#A6A6A6]'>
          © 2022 Savvy. All rights Reserved
        </Text>
      </div>
    </div>
  )
}

export default footer

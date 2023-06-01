import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Facebook, Instagram, Linkedin, Twitter } from 'react-feather'
import Logo from '../../../assets/png/logo.png'
import { Text } from '../../../components/typography/typography'
import { GoPlusSmall } from 'react-icons/go'
import { BiMinus } from 'react-icons/bi'
import { useRouter } from 'next/router'
// import Collapsible from 'react-collapsible';

function footer() {
  const router = useRouter()
  // const [websiteIsOpen, setWebsiteIsOpen] = useState<boolean>(false)
  // const [companyIsOpen, setCompanyIsOpen] = useState<boolean>(false)
  // const [resourcesIsOpen, setResourcesIsOpen] = useState<boolean>(false)

  return (
    <div className='maxWidth mx-auto w-full flex flex-col px-[2rem] py-2.5'>
      <div className='w-full grid grid-cols-1 lg:grid-cols-3 h-full  mb-[90px] space-y-4 lg:space-y-0'>
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
        <div className='pt-3 '>
          <Text variant='paragraph_1' className='font-semibold lg:text-center'>
            Send us a messages
          </Text>
          <Text variant='paragraph_4' className='font-semibold lg:text-center'>
            Info@savvy.africa
          </Text>
        </div>
        <div className='pt-3 '>
          <Text variant='paragraph_1' className='font-semibold'>
            Follow us
          </Text>
          <div className='flex items-center space-x-5'>
            {/* <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center shadow1 cursor-pointer
            '
            
            onClick={() => router.push()}>
              <Facebook color='#444444' size={18} fill='#444444' />
            </div> */}
            <div
              className='w-[40px] h-[40px] rounded-full flex items-center justify-center shadow1 cursor-pointer'
              onClick={() =>
                router.push(
                  'https://instagram.com/savvyafricahq?igshid=NTc4MTIwNjQ2YQ=='
                )
              }
            >
              <Instagram color='#444444' size={18} />
            </div>
            <div
              className='w-[40px] h-[40px] rounded-full flex items-center justify-center shadow1 cursor-pointer'
              onClick={() => router.push('https://twitter.com/savvyafricahq')}
            >
              <Twitter color='#444444' size={18} fill='#444444' />
            </div>
            <div
              className='w-[40px] h-[40px] rounded-full flex items-center justify-center shadow1 cursor-pointer'
              onClick={() =>
                router.push(
                  'https://instagram.com/savvyafricahq?igshid=NTc4MTIwNjQ2YQ=='
                )
              }
            >
              <Linkedin color='#444444' size={18} fill='#444444' />
            </div>
          </div>
        </div>
      </div>
      <Text variant='paragraph_4' className='font-light text-[#A6A6A6]'>
        © 2022 Savvy. All rights Reserved
      </Text>
    </div>
  )
}

export default footer

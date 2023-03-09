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
    <div className='maxWidth mx-auto w-full flex flex-col py-5 px-5 lg:pt-5 lg:pb-5 lg:pl-10 lg:pr-10'>
      <div className='w-full flex md:flex-row flex-col justify-between h-full  mb-[90px]'>
        <div className='md:w-[30%] w-[35%] md:mb-0 mb-[34px]'>
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

        <div
          className={`ft-section flex flex-col items-start w-[23.333%] md:mb-0 mb-[30px] ${
            websiteIsOpen ? '' : 'isOpen'
          }`}
        >
          <div className={`ft-head md:w-auto w-full`}>
            <Text variant='paragraph_1' className='font-semibold inline-block'>
              Website
            </Text>

            <span className='ft-icon inline-block'>
              {websiteIsOpen ? (
                <div className='w-[20px] h-[20px] rounded-full flex items-center justify-center shadow1'>
                  <GoPlusSmall
                    onClick={() => setWebsiteIsOpen((active) => !active)}
                    className='text-xl'
                  />
                </div>
              ) : (
                <div className='w-[20px] h-[20px] rounded-full flex items-center justify-center shadow1'>
                  <BiMinus
                    onClick={() => setWebsiteIsOpen((active) => !active)}
                    className='text-xl w-[16px]'
                  />
                </div>
              )}
            </span>
          </div>

          <div className='ft-nav mt-4'>
            <Link href='login'>
              <a>
                <Text variant='paragraph_3' className='font-medium mb-4'>
                  Login
                </Text>
              </a>
            </Link>
            <Link href='#'>
              <a>
                <Text variant='paragraph_3' className='font-medium mb-4'>
                  Rent & Renew
                </Text>
              </a>
            </Link>
            <Link href='#'>
              <a>
                <Text variant='paragraph_3' className='font-medium'>
                  Buy & Return
                </Text>
              </a>
            </Link>
          </div>
        </div>

        <div
          className={`ft-section flex flex-col items-start w-[23.333%] md:mb-0 mb-[30px] ${
            companyIsOpen ? '' : 'isOpen'
          }`}
        >
          <div className={`ft-head md:w-auto w-full`}>
            <Text variant='paragraph_1' className='font-semibold inline-block'>
              Company
            </Text>

            <span className='ft-icon inline-block'>
              {companyIsOpen ? (
                <div className='w-[20px] h-[20px] rounded-full flex items-center justify-center shadow1'>
                  <GoPlusSmall
                    onClick={() => setCompanyIsOpen((active) => !active)}
                    className='text-xl'
                  />
                </div>
              ) : (
                <div className='w-[20px] h-[20px] rounded-full flex items-center justify-center shadow1'>
                  <BiMinus
                    onClick={() => setCompanyIsOpen((active) => !active)}
                    className='text-xl w-[16px]'
                  />
                </div>
              )}
            </span>
          </div>

          <div className='ft-nav mt-4'>
            <Link href='/about'>
              <a>
                <Text variant='paragraph_3' className='font-medium mb-4'>
                  About Us
                </Text>
              </a>
            </Link>

            <Link href='#'>
              <a>
                <Text variant='paragraph_3' className='font-medium mb-4'>
                  Contact Us
                </Text>
              </a>
            </Link>

            <Link href='/terms'>
              <a>
                <Text variant='paragraph_3' className='font-medium'>
                  Terms of Use
                </Text>
              </a>
            </Link>
          </div>
        </div>

        <div
          className={`ft-section flex flex-col items-start w-[23.333%] md:mb-0 mb-[30px] ${
            resourcesIsOpen ? '' : 'isOpen'
          }`}
        >
          <div className={`ft-head md:w-auto w-full`}>
            <Text variant='paragraph_1' className='font-semibold inline-block'>
              Resources
            </Text>

            <span className='ft-icon inline-block'>
              {resourcesIsOpen ? (
                <div className='w-[20px] h-[20px] rounded-full flex items-center justify-center shadow1'>
                  <GoPlusSmall
                    onClick={() => setResourcesIsOpen((active) => !active)}
                    className='text-xl'
                  />
                </div>
              ) : (
                <div className='w-[20px] h-[20px] rounded-full flex items-center justify-center shadow1'>
                  <BiMinus
                    onClick={() => setResourcesIsOpen((active) => !active)}
                    className='text-xl w-[16px]'
                  />
                </div>
              )}
            </span>
          </div>

          <div className='ft-nav mt-4'>
            <Link href='/faq'>
              <a>
                <Text variant='paragraph_3' className='font-medium mb-4'>
                  FAQs
                </Text>
              </a>
            </Link>
            <Link href='/blog'>
              <a>
                <Text variant='paragraph_3' className='font-medium'>
                  Blog
                </Text>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col justify-center space-y-5 md:items-center items-start mb-[25px]'>
        <Text variant='paragraph_4' className='font-semibold'>
          Info@savvy.africa
        </Text>
        <div className='flex justify-between items-center space-x-5'>
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
        <Text variant='paragraph_4' className='font-light text-[#A6A6A6]'>
          © 2022 Savvy. All rights Reserved
        </Text>
      </div>
    </div>
  )
}

export default footer

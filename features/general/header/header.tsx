import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../../assets/png/log.png'
import { Button } from '../../../components/button/button'
import { Text } from '../../../components/typography/typography'

function header() {
  return (
    <>
      <div className='w-full maxWidth mx-auto shadow2 px-5 py-2.5 sticky lg:block hidden'>
        <div className='flex justify-around items-center'>
          <div className='w-[20%] cursor-pointer'>
            <Link href={'/'}>
              <Image src={Logo} alt='Logo' />
            </Link>
          </div>

          <div className='flex justify-around items-center w-[60%]'>
            <Link href='/login'>
              <a className='ml-auto'>
                <Text variant='paragraph_4' className='font-medium'>
                  Rent & Renew
                </Text>
              </a>
            </Link>
            <Link href='/login'>
              <a className='ml-auto'>
                <Text variant='paragraph_4' className='font-medium'>
                  Buy & Return
                </Text>
              </a>
            </Link>
            <Link href='about'>
              <a className='ml-auto'>
                <Text variant='paragraph_4' className='font-medium'>
                  About Us
                </Text>
              </a>
            </Link>
            <Link href='blog'>
              <a className='ml-auto'>
                <Text variant='paragraph_4' className='font-medium'>
                  Blog
                </Text>
              </a>
            </Link>
            <Link href='contact-us'>
              <a className='mx-auto'>
                <Text variant='paragraph_4' className='font-medium'>
                  Contact us
                </Text>
              </a>
            </Link>
          </div>

          <div className='flex justify-end items-center w-[20%]'>
            <Button className='mr-12 ml-auto'>
              <Link href='login'>
                <a>
                  <Text variant='paragraph_4' className='font-medium'>
                    Login
                  </Text>
                </a>
              </Link>
            </Button>
            <Button className='bg-[#00B0F0] w-[118px] h-[39px] rounded-lg'>
              <Link href='register'>
                <a>
                  <Text variant='paragraph_4' className='font-medium'>
                    Get Started
                  </Text>
                </a>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default header

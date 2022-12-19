import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import Logo from '../assets/png/logo.png';
import { Text } from '../components/typography/typography';
import { Button } from '../components/button/button';
import { Eye, EyeOff } from 'react-feather';
import { Input } from '../components/inputField/inputField';



function signup() {
  return (
    <>
      <div className='w-full max-w-full mt-20 min-h-screen relative'>
        <div className="w-full max-w-lg mx-auto my-0 flex flex-col justify-center items-center">
          <div className="w-60 flex justify-center items-center">
            <Image src={Logo} alt="Logo" />
          </div>
          <Text variant='paragraph_1' className='font-extrabold text-2xl mt-1.5'>Create your Savvy Account</Text>
          <Text variant='paragraph_4' className='font-normal mt-1.5'>Let's get to know you</Text>
        </div>
        <div className="w-full flex flex-col justify-center items-center flex-initial max-w-lg mx-auto my-0 relative p-6 mt-11">
          <form className="w-full">
            <div className="pb-1.5 mb-1.5">
              <label htmlFor="fname" className="inline-block mb-2 text-gray-500">
                <Text variant='paragraph_4'>First Name</Text>
              </label> 
              <Input id='fname' name='fname' type='text' />
            </div>

            <div className="pb-1.5 mb-1.5">
              <label htmlFor="lname" className="inline-block mb-2 text-gray-500">
                <Text variant='paragraph_4'>Last Name</Text>
              </label> 
              <Input id='lname' name='lname' type='text' />
            </div>

            <div className="pb-1.5 mb-1.5">
              <label htmlFor="phone" className="inline-block mb-2 text-sm text-gray-500">
                <Text variant='paragraph_4'>Mobile Number</Text>
              </label> 
              <Input id='phone' name='phone' type='tel' pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}' />
            </div>

            <div className="pb-1.5 mb-1.5">
              <label htmlFor="email" className="inline-block mb-2 text-sm text-gray-500">
                <Text variant='paragraph_4'>Email Address</Text>
              </label> 
              <Input id='email' name='email' type='email' />
            </div>

            <div className="pb-3 mb-3 relative">
              <label htmlFor="password" className="inline-block mb-2 text-sm text-gray-500">
                <Text variant='paragraph_4'>Password</Text>
              </label> 
              <Input id='password' name='password' type='password' placeholder='8+ characters' />

              {/* <Eye size={15} className="text-gray-400 inline-block absolute right-4 top-11" /> */}
              <EyeOff size={15} className="text-gray-400 inline-block absolute right-4 top-11" />
            </div>

            <Button className='py-2.5 px-4 mb-6 w-full flex-auto block bg-[#00B0F0] rounded'>
              <Text variant='paragraph_4' className="font-bold text-white">Create your Account</Text>
            </Button>

            <div className="w-full text-center mb-6">
              <Text variant='paragraph_4'>Already a member? 
                <span className='font-bold text-sky-500'>
                  <Link href='/sign-in'> Sign in </Link>
                </span>
              </Text>
            </div>

            <div className="w-full text-center">
              <Text variant="paragraph_4">By continuing, you agree to our 
                <b className='underline decoration-gray-300'> Terms of use </b> and <b className='underline decoration-gray-300'>Privacy Policy</b>
              </Text>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default signup;
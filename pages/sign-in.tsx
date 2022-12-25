import React, { useState } from 'react'
import { FormHead } from '../components/formHeader/formHeader';
import { Text } from '../components/typography/typography';
import { Label } from '../components/inputFieldLabel/inputFieldLabel';
import { Input } from '../components/inputField/inputField';
import { Eye, EyeOff } from 'react-feather';
import { Button } from '../components/button/button';
import Link from 'next/link';


function signin() {
    const [passwordShown, setPasswordShown] = useState(false);

    // Password toggle handler
    const togglePassword = () => {
      setPasswordShown(!passwordShown);
    };

  return (
    <>
        <div className='signin w-full max-w-full mt-16 min-h-screen relative'>
            <FormHead>
                <Text variant='paragraph_1' className='font-extrabold sm:text-2xl text-xl mt-1.5'>Log in to your Account</Text>
                <Text variant='paragraph_4' className='font-normal mt-1.5'>Welcome back</Text>
            </FormHead>

            <div className="w-full flex flex-col justify-center items-center flex-initial max-w-lg mx-auto my-0 relative p-6 mt-11">
                <form className="w-full">
                    <div className="pb-1.5 mb-1.5">
                        <Label htmlFor='email'>
                            <Text variant='paragraph_4' className='font-semibold'>Email Address</Text>
                        </Label>
                        <Input id='email' name='email' type='email' />
                    </div>

                    <div className="pb-3 mb-3 relative">
                        <Label htmlFor='password'>
                            <Text variant='paragraph_4' className='font-semibold'>Password</Text>
                        </Label>
                        <Input id='password' name='password' type={passwordShown ? "text" : "password"} placeholder='8+ characters' />

                        {passwordShown ? <Eye size={15} className="text-gray-400 inline-block absolute right-4 top-11" onClick={togglePassword} /> : 
                        <EyeOff size={15} className="text-gray-400 inline-block absolute right-4 top-11" onClick={togglePassword} />}
                    </div>

                    <Button className='py-2.5 px-4 mb-6 w-full flex-auto block bg-[#00B0F0] rounded'>
                        <Text variant='paragraph_4' className="font-bold text-white">Log in</Text>
                    </Button>

                    <div className="w-full text-center mb-6">
                        <Text variant='paragraph_4'>
                            <span className='font-bold text-sky-500'>
                                <Link href='/forgot-password'>Forgot Password?</Link>
                            </span>
                        </Text>
                    </div>

                    <div className="w-full text-center">
                        <Text variant='paragraph_4'>Don't have an account? 
                          <span className='font-bold text-sky-500'>
                            <Link href='/sign-up'> Sign up </Link>
                          </span>
                        </Text>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default signin;

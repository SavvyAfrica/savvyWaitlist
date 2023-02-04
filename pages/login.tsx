import React, { useState } from 'react'
import { Eye, EyeOff } from 'react-feather';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Input } from '../components/Input/Input';
import { Label } from '../components/Label/Label';
import { FormHead } from '../components/formHeader/formHeader';
import { Text } from '../components/typography/typography';
import { Button } from '../components/Button/Button';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TypeOptions } from 'react-toastify/dist/types';

import useForm from '../Hooks/useForm';
import { userService } from '../services';
import { IFormValues } from "../type/type";



function login() {
    const [passwordShown, setPasswordShown] = useState(false);  // password field visibility state
    const togglePassword = () => {
      setPasswordShown(!passwordShown);
    };

    const router = useRouter();

    const notify = (text: string, type: TypeOptions) => toast(text, { type });

    const {handleChange, handleLoginSubmit, formLogData, formErrors} = useForm(loginForm);



    // Callback function when form is submitted!
    async function loginForm(formLogData: IFormValues) {
        try {
            await userService.login(formLogData);
            // get return url from query parameters or default to '/'
            const returnUrl = (router.query.returnUrl || '/home') as string;
            router.push(returnUrl);
            notify('Logged in successfully', 'success');
        } catch {
            notify('Please verify details provided', 'error');
        }
    }


  return (
    <>
        <div className='signin w-full max-w-full mt-16 min-h-screen relative'>
            <FormHead>
                <Text variant='paragraph_1' className='font-extrabold sm:text-2xl text-xl mt-1.5'>Log in to your Account</Text>
                <Text variant='paragraph_4' className='font-normal mt-1.5'>Welcome back</Text>
            </FormHead>

            <>
                <ToastContainer />
            </>

            <div className="w-full flex flex-col justify-center items-center flex-initial max-w-lg mx-auto my-0 relative p-6 mt-11">
                <form onSubmit={handleLoginSubmit} className="w-full">
                    <div className="pb-1.5 mb-1.5">
                        <Label htmlFor='email'>Email Address</Label>
                        <Input 
                            name='email'
                            type='email'
                            value={formLogData.email}
                            id='email'
                            placeholder="Email Address"
                            onChange={handleChange}
                            className={` ${formErrors.email ? 'border-red-600' : 'border-[#DFDFE6]'} `}
                        />
                        {formErrors.email && <h3 className="text-red-600 text-xs pt-1">{formErrors.email}</h3>}
                    </div>

                    <div className="pb-3 mb-3 relative">
                        <Label htmlFor='password'>Password</Label>
                        <Input 
                            name='password'
                            type={passwordShown ? "text" : "password"}
                            value={formLogData.password}
                            id='password'
                            placeholder="Password"
                            onChange={handleChange}
                            className={` ${formErrors.password ? 'border-red-600' : 'border-[#DFDFE6]'} `}
                        />
                        {formErrors.password && <h3 className="text-red-600 text-xs pt-1">{formErrors.password}</h3>}

                        {passwordShown ? <Eye size={15} className="text-gray-400 inline-block absolute right-4 top-11" onClick={togglePassword} /> : 
                        <EyeOff size={15} className="text-gray-400 inline-block absolute right-4 top-11" onClick={togglePassword} />}
                    </div>

                    <Button className='py-2.5 px-4 mb-6 w-full flex-auto block bg-[#00B0F0] rounded'>
                        <Text variant='paragraph_4' className="font-bold text-white">Log in</Text>
                    </Button>

                    <div className="w-full text-center mb-6">
                        <Text variant='paragraph_4'>
                            <span className='font-bold text-sky-500'>
                                <Link href='/forgot-password'>
                                    <a>Forgot Password?</a>
                                </Link>
                            </span>
                        </Text>
                    </div>

                    <div className="w-full text-center">
                        <Text variant='paragraph_4'>Don't have an account?&nbsp; 
                          <span className='font-bold text-sky-500'>
                            <Link href='/register'>
                                <a>register</a>
                            </Link>
                          </span>
                        </Text>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default login;

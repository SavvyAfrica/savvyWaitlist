import React, { useState } from 'react'
import { FormHead } from '../components/formHeader/formHeader';
import { Text } from '../components/typography/typography';
import { Input } from '../components/inputField/inputField';
import { Eye, EyeOff } from 'react-feather';
import { Button } from '../components/button/button';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { IFormValues } from "../type/type";
import { Label } from '../components/inputFieldLabel/inputFieldLabel';
import { userService } from '../services';
import { useRouter } from 'next/router';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TypeOptions } from 'react-toastify/dist/types';



function login() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
      setPasswordShown(!passwordShown);
    };

    const router = useRouter();

    const notify = (text: string, type: TypeOptions) => toast(text, { type });
    
    // form validation rules
    const validationSchema = Yup.object().shape({
        email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
        password: Yup.string()
          .required('Password is required')
          .min(6, 'Password must be at least 6 characters')
          .max(40, 'Password must not exceed 40 characters'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };


    // get functions to build form with useForm() hook
    const {register, handleSubmit, formState} = useForm<IFormValues>(formOptions);
    const { errors } = formState;


    async function onSubmit(user: IFormValues) {
        try {
            await userService.login(user);
            // get return url from query parameters or default to '/'
            const returnUrl = (router.query.returnUrl || '/') as string;
            router.push(returnUrl);
            // notify('Logged In successful');
        } catch { 
            // notify('Logging In unsuccessful');
        }
    }


    // const onSubmit = async (data: IFormValues) => {
    //     // Send the data to the server in JSON format.
    //     const JSONdata = JSON.stringify(data)
      
      
    //     // API endpoint where we send form data.
    //     const endpoint = '/api/form'
      
      
    //     // Form the request for sending data to the server.
    //     const options = {
    //       // The method is POST because we are sending data.
    //       method: 'POST',
    //       // Tell the server we're sending JSON.
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       // Body of the request is the JSON data we created above.
    //       body: JSONdata,
    //     }
      
      
    //     // Send the form data to our forms API and get a response.
    //     const response = await fetch(endpoint, options)
      
      
    //     // Get the response data from server as JSON.
    //     // If server returns the name submitted, that means the form works.
    //     const result = await response.json()
    //     alert(`this your full data: ${result.data}`)
    //   };

  return (
    <>
        <div className='signin w-full max-w-full mt-16 min-h-screen relative'>
            <FormHead>
                <Text variant='paragraph_1' className='font-extrabold sm:text-2xl text-xl mt-1.5'>Log in to your Account</Text>
                <Text variant='paragraph_4' className='font-normal mt-1.5'>Welcome back</Text>
            </FormHead>

            <div className="w-full flex flex-col justify-center items-center flex-initial max-w-lg mx-auto my-0 relative p-6 mt-11">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <div className="pb-1.5 mb-1.5">
                        <Label>Email Address</Label>
                        <Input 
                            name="email"
                            register={register} 
                            required
                            className={` ${errors.email ? 'border-red-600' : null} `}
                        />
                        <div className="text-red-600 text-sm">{errors.email?.message}</div>
                    </div>

                    <div className="pb-3 mb-3 relative">
                        <Label>Password</Label>
                        <Input 
                            type={passwordShown ? "text" : "password"} 
                            name="password" 
                            register={register} 
                            required
                            className={` ${errors.password ? 'border-red-600' : null} `}
                            placeholder='8+ characters' 
                        />
                        <div className="text-red-600 text-sm">{errors.password?.message}</div>

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

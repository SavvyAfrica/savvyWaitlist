import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Text } from '../components/typography/typography';
import { Button } from '../components/button/button';
import { Eye, EyeOff } from 'react-feather';
import { Input } from '../components/inputField/inputField';
import { FormHead } from '../components/formHeader/formHeader';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { IFormValues } from "../type/type";
import { Label } from '../components/inputFieldLabel/inputFieldLabel';
import { userService } from '../services';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TypeOptions } from 'react-toastify/dist/types';




function register() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const router = useRouter();

  const notify = (text: string, type: TypeOptions) => toast(text, { type });


  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('First Name is required'),
    lastName: Yup.string()
      .required('Last Name is required'),
    phoneNumber: Yup.string()
      .required('Mobile Number is required'),
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
  const {register, handleSubmit, reset, formState} = useForm<IFormValues>(formOptions);
  const { errors } = formState;



  async function onSubmit(user: IFormValues) {
    try {
      await userService.register(user);
      notify('Registration successful', 'success');
      reset();
      router.push('login');
    } catch {
      notify('Unsuccessful registration', 'error');
    }
  }
  

  return (
    <>
      <div className='signup w-full max-w-full mt-16 min-h-screen relative'>
        <FormHead>
          <Text variant='paragraph_1' className='font-extrabold sm:text-2xl text-xl mt-1.5'>Create your Savvy Account</Text>
          <Text variant='paragraph_4' className='font-normal mt-1.5'>Let's get to know you</Text>
        </FormHead>

        <div>
          <ToastContainer />
        </div>
        

        <div className="w-full flex flex-col justify-center items-center flex-initial max-w-lg mx-auto my-0 relative p-6 mt-11">

          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="pb-1.5 mb-1.5">
              <Label>First Name</Label>
              <Input 
                name='firstName'
                register={register} 
                required
                className={` ${errors.firstName ? 'border-red-600' : null} `}
              />
              <div className="text-red-600 text-sm">{errors.firstName?.message}</div>
            </div>

            <div className="pb-1.5 mb-1.5">
              <Label>Last Name</Label>
              <Input 
                name='lastName'
                register={register} 
                required
                className={` ${errors.lastName ? 'border-red-600' : null} `}
              />
              <div className="text-red-600 text-sm">{errors.lastName?.message}</div>
            </div>

            <div className="pb-1.5 mb-1.5"> 
              <Label>Mobile Number</Label>
              <Input 
                name='phoneNumber'
                register={register} 
                required
                className={` ${errors.phoneNumber ? 'border-red-600' : null} `}     
              />
              <div className="text-red-600 text-sm">{errors.phoneNumber?.message}</div>           
            </div>

            <div className="pb-1.5 mb-1.5">
              <Label>Email Address</Label>
              <Input 
                name='email'
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
              <Text variant='paragraph_4' className="font-bold text-white">Create your Account</Text>
            </Button>

            <div className="w-full text-center mb-6">
              <Text variant='paragraph_4'>Already a member?&nbsp; 
                <span className='font-bold text-sky-500'>
                  <Link href='/login'> 
                    <a>Login</a>
                  </Link>
                </span>
              </Text>
            </div>

            <div className="w-full text-center">
              <Text variant="paragraph_4">By continuing, you agree to our&nbsp; 
                <strong className='hover:underline'><Link href='/terms-of-use'> Terms of use&nbsp; </Link></strong> &nbsp;and&nbsp;  
                <strong className='hover:underline'><Link href='privacy-policy'> &nbsp;Privacy Policy </Link></strong>
              </Text>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default register;
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Eye, EyeOff } from 'react-feather';

import { Input } from '../components/Input/Input';
import { Label } from '../components/Label/Label';
import { FormHead } from '../components/formHeader/formHeader';
import { Text } from '../components/typography/typography';
import { Button } from '../components/Button/Button';
import PhoneNumInput from '../components/PhoneNumInput/PhoneNumInput';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TypeOptions } from 'react-toastify/dist/types';

import useForm from '../Hooks/useForm';
import { userService } from '../services';
import { IFormValues } from "../type/type";



function register() {
  const [passwordShown, setPasswordShown] = useState(false);  // password field visibility state
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const router = useRouter();

  const notify = (text: string, type: TypeOptions) => toast(text, { type });

  const {handleChange, handleRegisterSubmit, formData, formErrors} = useForm(registerForm);


  // Callback function when form is submitted!
  async function registerForm(formData: IFormValues) {
    console.log("Callback function when form is submitted!");

    try {
      await userService.register(formData);
      notify('Registration successful', 'success');
      router.push('/login');
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

        <>
          <ToastContainer />
        </>
        

        <div className="w-full flex flex-col justify-center items-center flex-initial max-w-lg mx-auto my-0 relative p-6 mt-11">

          <form onSubmit={handleRegisterSubmit} className="w-full">
            {/* First Name */}
            <div className="pb-1.5 mb-1.5">
              <Label htmlFor='firstName'>First Name</Label>
              <Input 
                name='firstName'
                type='text'
                value={formData.firstName}
                placeholder="First Name"
                id='firstName'
                onChange={handleChange}
                className={` ${formErrors.firstName ? 'border-red-600' : 'border-[#DFDFE6]'} `}
              />
              {formErrors.firstName && <h3 className="text-red-600 text-xs pt-1">{formErrors.firstName}</h3>}
            </div>
            
            {/* Last Name */}
            <div className="pb-1.5 mb-1.5">
              <Label htmlFor='lastName'>Last Name</Label>
              <Input 
                name='lastName'
                type='text'
                value={formData.lastName}
                placeholder="Last Name"
                id='lastName'
                onChange={handleChange}
                className={` ${formErrors.lastName ? 'border-red-600' : 'border-[#DFDFE6]'} `}
              />
              {formErrors.lastName && <h3 className="text-red-600 text-xs pt-1">{formErrors.lastName}</h3>}
            </div>
            
            {/* Phone Number */}
            <div className="pb-1.5 mb-1.5"> 
              <Label htmlFor="countryCode">Country Select</Label>
              <PhoneNumInput
                phoneNumber={formData.phoneNumber}
                phoneNumberError={formErrors.phoneNumber}
                countryCode={formData.countryCode}
                handleChange={handleChange}
              />
            </div>
            
            {/* Email Address */}
            <div className="pb-1.5 mb-1.5">
              <Label htmlFor='email'>Email Address</Label>
              <Input 
                name='email'
                type='email'
                value={formData.email}
                id='email'
                placeholder="Email Address"
                onChange={handleChange}
                className={` ${formErrors.email ? 'border-red-600' : 'border-[#DFDFE6]'} `}
              />
              {formErrors.email && <h3 className="text-red-600 text-xs pt-1">{formErrors.email}</h3>}
            </div>
            
            {/* Password */}
            <div className="pb-3 mb-3 relative">
              <Label htmlFor='password'>Password</Label>
              <Input 
                name='password'
                type={passwordShown ? "text" : "password"}
                value={formData.password}
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
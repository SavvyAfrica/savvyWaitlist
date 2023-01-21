import React from "react";
import { Path, UseFormRegister } from "react-hook-form"
import { IFormValues } from "../../type/type";



type InputProps = {
  name: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  className?: string;
  placeholder?: string;
  type?: string;
};


export const Input = ({ name, register, required, className, placeholder, type }: InputProps) => {
  
  return (
    <input {...register(name, { required })} placeholder={placeholder} type={type}
      className={`block text-gray-400 flex-auto w-full p-2 rounded bg-white 
      border-[#DFDFE6] border-2 outline-[#DFDFE6] outline-0 ${className}`}
    />
  );
};
import React from "react";
import { Text } from '../typography/typography';


type LabelProps = {
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
};


export const Label = ({ children, className, htmlFor }: LabelProps) => {
  
  return (
    <label className={`inline-block mb-2 text-[#23262F] ${className}`} htmlFor={htmlFor}>
      <Text variant='paragraph_4' className='font-semibold capitalize'>{children}</Text>
    </label>
  );
};
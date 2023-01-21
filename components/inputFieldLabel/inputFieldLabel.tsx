import React from "react";
import { Text } from '../../components/typography/typography';


type LabelProps = {
  children: React.ReactNode;
  className?: string;
};


export const Label = ({ children, className }: LabelProps) => {
  
  return (
    <label className={`inline-block mb-2 text-[#23262F] ${className}`}>
      <Text variant='paragraph_4' className='font-semibold capitalize'>{children}</Text>
    </label>
  );
};
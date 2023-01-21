import React from "react";
import Image from "next/image";
import Logo from '../../assets/png/logo.png';
import { IFormHead } from "../../type/type";


export const FormHead = (props: IFormHead) => {
  const { children } = props;
  
  return (
    <div className="w-full max-w-lg mx-auto my-0 flex flex-col justify-center items-center">
      <div className="max-w-full mx-auto">
        <Image src={Logo} alt="Logo" />
      </div>
      {children}
    </div>
  );
};
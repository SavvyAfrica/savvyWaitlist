import React from "react";

export const Input = (props: IInput) => {
  const { className, id, name, type, placeholder, pattern } = props;
  
  return (
    <input id={id} name={name} type={type} placeholder={placeholder} pattern={pattern} 
        className={`block text-gray-400 flex-auto w-full p-2 rounded bg-white 
            border-gray-500 border outline-gray-500 outline-0 ${className}`}
    />
  );
};
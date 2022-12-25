import React from "react";

export const Label = (props: ILabel) => {
  const { className, children, htmlFor } = props;
  
  return (
    <label htmlFor={htmlFor} className={`inline-block mb-2 text-[#23262F] ${className}`}>
        {children}
    </label>
  );
};
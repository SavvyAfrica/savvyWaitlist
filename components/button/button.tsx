import React from "react";

export const Button = (props: IButton) => {
  const { className, children, onClick } = props;
  return (
    <button
      className={`hover:scale-105 transition-all ease-in-out flex items-center justify-center ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
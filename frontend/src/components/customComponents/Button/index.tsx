import React from "react";

interface ButtonProps {
  children: string | React.ReactNode | React.ReactNode[];
  className?: string;
  varient: "primary" | "secondary";
}

function Button({ children, className, varient, ...props }: ButtonProps) {
  const primaryButton =
    "bg-white px-5 py-[10px] flex items-center hover:bg-black hover:text-white transition-all duration-300 hover:cursor-pointer uppercase font-semibold text-xs";

  const secondaryButton =
    "bg-white px-10 py-[17px] flex items-center  hover:text-white relative  before:transition-all duration-500 overflow-hidden hover:cursor-pointer uppercase font-semibold text-xs before:translate-x-[-101%] z-10  hover:before:translate-x-[0] before:w-full before:h-full before:z-[-1] before:bg-black before:absolute before:top-0 before:right-0 ";

  const buttons = {
    primary: primaryButton,
    secondary: secondaryButton,
  };
  return (
    <button {...props} className={` ${buttons[varient]} ${className}`}>
      {children ?? "Button"}
    </button>
  );
}

export default Button;

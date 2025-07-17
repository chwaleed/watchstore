import React from "react";

interface ButtonProps {
  text?: string;
  className?: string;
  varient: "primary" | "secondary";
}

function Button({ text, className, varient }: ButtonProps) {
  const primaryButton =
    "bg-white px-5 py-[10px] hover:bg-black hover:text-white transition-all duration-300 hover:cursor-pointer uppercase font-semibold text-xs";

  const secondaryButton =
    "bg-white px-10 py-[17px]   hover:text-white relative  before:transition-all duration-300 overflow-hidden hover:cursor-pointer uppercase font-semibold text-xs before:translate-x-[-100%] z-10  hover:before:translate-x-[0] before:w-full before:h-full before:z-[-1] before:bg-black before:absolute before:top-0 before:right-0 ";

  const buttons = {
    primary: primaryButton,
    secondary: secondaryButton,
  };
  return (
    <button className={` ${buttons[varient]} ${className}`}>
      {text ?? "Button"}
    </button>
  );
}

export default Button;

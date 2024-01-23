"use client";
import { ButtonProps } from "@/types";
import Image from "next/image";

const Button = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
}: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={` rounded-xl lg:px-6 p-4 hover:bg-transparent transition-all gradient-background ease-out duration-300 border-white group ${containerStyles}`}
      onClick={handleClick}
    >
      <span
        className={`flex-1 text-white regular   ${textStyles}`}
      >
        {title}
      </span>
      
    </button>
  );
};

export default Button;

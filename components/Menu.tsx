import React from "react";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { MenuProps } from "@/types";

const Menu = ({menuClick,active}:MenuProps) => {
  return (
    <div className={active?"w-full absolute h-screen bg-[#000614]/90 z-50 gap-8 flex flex-col items-center justify-center overflow-hidden":"hidden"}>
        <button className='p-3 bg-white/10 hover:bg absolute top-10 right-10 rounded-md' onClick={menuClick}>
            <CgClose className='text-white'/>
        </button>

      <h1 className="font-bold text-5xl text-white">Menu</h1>

      <div className="gap-5 flex flex-col items-center ">
        {NavLinks.map((link) => (
          <Link
            href={link.link}
            className="font-medium text-lg text-white/60 hover:text-white/100"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;

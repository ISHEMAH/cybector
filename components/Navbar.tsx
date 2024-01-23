import React from 'react'
import { NavLinks } from '@/constants'
import Link from 'next/link'
import { Button } from '.'
import Image from 'next/image'
import { FiMenu } from "react-icons/fi";
import { NavbarProps } from '@/types'



const Navbar = ({menuClick}:NavbarProps) => {
  return (
    <div className='w-full bg-[#000614] lg:px-24  px-10 fixed h-28 justify-between flex items-center'>
      <h1 className='gradient-text gradientAnimation font-extrabold text-5xl gradientAnimation'>C</h1>
      <div className='gap-5 flex max-md:hidden'>
        {NavLinks.map(link=>(
        <Link href={link.link} className='font-medium  text-white/60 hover:text-white/100'>{link.name}</Link>
        ))}
      </div>
      <Button title='Hire Us' containerStyles='max-md:hidden'/>
      <button className='p-3 bg-white/10 hover:bg md:hidden rounded-md' onClick={menuClick}>
        <FiMenu className='text-white'/>
      </button>
    </div>
  )
}

export default Navbar

import React from 'react'
import { HeaderProps } from '@/types'
import Image from 'next/image'

const Header = ({title}:HeaderProps) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-white text-[40px]'>{title}</h1>
      <Image src={'/line.svg'} alt='line' width={300} height={100} className='w-full'/>
    </div>
  )
}

export default Header

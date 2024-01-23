import React from 'react'
import Image from 'next/image'
import { PartnersImages } from '@/constants'

const Partners = () => {
  return (
    <div className='w-full lg:p-20 p-10 flex relative justify-between items-center'>
      <Image src={'/Ellipse.svg'} alt='glow' width={200} height={200} className='absolute -left-20'/>
      {PartnersImages.map(partner =>(
        <Image src={'/'+partner.name +'.svg'} alt='partner' width={100} height={100} />
      ))}
    </div>
  )
}

export default Partners

import React from 'react'
import Image from 'next/image'
import { Button } from '.'

const Hero = () => {
  return (
    <div className='w-full pt-40 flex flex-col gap-14 relative items-center'>
      <div className='w-full flex flex-col items-center justify-center'>
        <h1 className='grotesk text-white font-extrabold text-7xl flex items-center'>Creative<span><Image src="/nft.png" alt='nft' width={180} height={180}/></span>Digital</h1>
        <h1 className='grotesk text-white font-light text-4xl flex items-center'>IT Consulting Agency</h1>
        <h1 className='text-white py-8'>Welcome to the <span className='gradient-text'>Futuristic</span> World of <span  className='gradient-text'>Web3</span> Development!</h1>
        <Button title='Contact us'/>
      </div>

      <Image src={'/square.svg'} width={200} height={200} className='absolute -right-10 flex self-center align-middle opacity-20' alt='dots'/>
      <div className='w-full flex items-between justify-center lg:p-20 p-10'>
        <div className='w-2/5 '>
          <Image src={'/coding.png'} width={200} height={200} alt='coding' className='w-full'/>
        </div>
        <div className=' flex flex-col relative w-2/5 '>
          <Image src={"/glow.svg"} width={200} height={200} alt='glow' className='w-full' />
          <div className='flex flex-col absolute'>
            <h1 className='gradient-text font-bold text-4xl'>Unleash the Power of Blockchain and Beyond!</h1>
          <p className='text-white -left-10 text-2xl'>Are you ready to revolutionize your digital presence and stay ahead in the decentralized future? Look no further! Our Web3 Development Services are here to turn your ideas into reality.</p>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Hero

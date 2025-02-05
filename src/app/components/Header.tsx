import Image from 'next/image'
import React from 'react'
import { assets } from '../../../assets/assets'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <div>
        <Image src={assets.my_profile_img} alt='' className='rounded-full w-32'/>
      </div>
      <h3 className='flex ml-2 gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
            Hello, I am Harshada Bhondave <Image src={assets.hand_icon} alt='' className='w-7'/>
      </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        Full Stack Developer based in Pune, India
      </h1>
      <p className='max-w-2xl mx-auto font-Ovo'>
      I am a Full Stack Developer from Pune, Maharashtra, India. I create efficient, user-friendly solutions tailored to client needs. Passionate continuous learning, I thrive in dynamic environments where I can contribute to innovative projects.  
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>
            Contact me<Image src={assets.right_arrow_white} alt='' className='w-4'/></a>

        <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
        my resume<Image src={assets.download_icon} alt='' className='w-4'/></a>
      </div>
    </div>
  )
}

export default Header

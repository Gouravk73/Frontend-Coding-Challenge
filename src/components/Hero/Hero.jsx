import React from 'react'
import bgImage  from '../../assets/image/Hero/Vector.png'
import Navbar from './Navbar'
import cube from '../../assets/image/Hero/intro-cube1.png'
import introStair from '../../assets/image/Hero/intro-stairs1.png'
import introPhone from '../../assets/image/Hero/intro-phone 1.png'
 import FixedFooter from '../../utils/Fixed_footer'


const Hero = () => {
  return (
    <div 
        className=" relative max-auto  bg-black w-full h-screen shrink-0 bg-no-repeat bg-cover bg-center py-4" 
        style={{backgroundImage:`url(${bgImage})`}}>
       <Navbar/>
       <div className='text-white'>
        <img 
            src={cube} 
            alt="cube" 
            className='  w-[74px] h-[74px] absolute top-[7%]  left-[23%] z-[2] object-cover' />
        <img 
            src={introStair} 
            alt="intro Stair" 
            className='hidden sm:block w-[200px] h-[ 260px] absolute  top-[7%] right-[19%] z-[2] object-cover' />
      </div>

      <div>
        <h1
            className="absolute top-[25%]  w-full text-center text-white text-[130px] sm:text-[193px] font-[800] uppercase tracking-[0.5px] leading-[166px] z-[3]"
        >Cash
        </h1>
        <img
            src={introPhone}
            alt="Flex Intro Phone"
            className="border   h-[350px] sm:h-[453px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[4] object-cover"
            />
            <h1
            className="absolute  top-[20%] sm:top-[25%] w-full text-center text-white text-[130px] sm:text-[193px] font-[800] uppercase tracking-[0.5px] leading-[166px] z-[5]"
        >
            <br />
            app
        </h1>
      </div>

      <FixedFooter/>
      
    </div>
  )
}

export default Hero
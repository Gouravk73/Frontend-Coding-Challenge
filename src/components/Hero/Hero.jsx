import React from 'react'
import bgImage  from '../../assets/image/Hero/Vector.png'
import Navbar from './Navbar'
import cube from '../../assets/image/Hero/intro-cube1.png'
import introStair from '../../assets/image/Hero/intro-stairs1.png'
import introPhone from '../../assets/image/Hero/intro-phone 1.png'
import Button from '../../utils/Button'
import cubes from '../../assets/image/Hero/intro-cubes 1.png'
import arrow from '../../assets/image/Hero/downarrow.svg'
import insta from '../../assets/image/Hero/insta.svg'
import twitter from '../../assets/image/Hero/twitter.svg'
import frame from '../../assets/image/Hero/frame.svg'

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

      <div className=' flex flex-col md:flex-row '>
      <div>
        <img 
            src={cubes} 
            alt={cubes} 
            className='  w-[188px] h-[176px] absolute top-[67%]  left-[15%]   object-cover'/>
      
      <div className='flex gap-[20px] absolute top-[85%] md:top-[90%]  left-[5%] sm:left-[30%] md:left-[6%]'>
        <Button/>
        <Button/>
      </div>
      <img 
        src={arrow} 
        alt='down-arrow' 
        className='w-[18px] hidden md:block  h-[30px] absolute top-[90%]  left-1/2   object-cover'/>
      <h1 
        className=" absolute top-[90%]  hidden lg:block left-[55%] text-left  w-[363px] text-[#B6B6B6] text-[10px] font-[700] leading-[13px]  "
      >
        Brokerage services by Cash App Investing LLC, member FINRA / SIPC.   <br />
        See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin  trading offered by Cash App. Cash App Investing does not trade bitcoin and  Cash App is not a member of FINRA or SIPC. Cash App facilitates banking   services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</h1>
      </div>


      <div  className=' flex absolute top-[93%] md:top-[90%]  left-[35%] md:left-[83%] gap-[30px] cursor-pointer'>
      <img src={frame} alt='frame' className='w-[24px] h-[24px]     cursor-pointer object-cover'/>
      <img src={twitter} alt='twitter' className='w-[21px] h-[17px] cursor-pointer      object-cover'/>
      <img src={insta} alt='insta' className='w-[21px] h-[21px]     cursor-pointer object-cover'/>
      </div>
      </div>
      
    </div>
  )
}

export default Hero
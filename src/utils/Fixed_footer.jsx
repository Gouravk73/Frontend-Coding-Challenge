import React from 'react'
import Button from './Button'
import {AiFillApple} from 'react-icons/ai'
import {BsGooglePlay} from 'react-icons/bs'
import cubes from '../assets/image/Hero/intro-cube1.png'
import arrow from '../assets/image/Hero/downarrow.svg'
import insta from '../assets/image/Hero/insta.svg'
import twitter from '../assets/image/Hero/twitter.svg'
import frame from '../assets/image/Hero/frame.svg'
const FixedFooter = ({val}) => {
  const imageSocialBlack = val ? 'black-filter' : '';
  return (
    <div className=' flex flex-col md:flex-row '>
      <div>
       {!val&& <img 
            src={cubes} 
            alt={cubes} 
            className='  w-[188px] h-[176px] absolute top-[67%]  left-[15%]   object-cover'/>}
      
      <div className={`flex gap-[20px] absolute ${val?'top-[110%]':'top-[85%]'}  md:top-[90%]  left-[5%] sm:left-[30%] md:left-[6%]`}>
      <Button text="APP STORE " Icon={AiFillApple}/>
        <Button text="GOOGLE PLAY " Icon={BsGooglePlay}/>
      </div>
      <img 
        src={arrow} 
        alt='down-arrow' 
        className='w-[18px] hidden md:block  h-[30px] absolute top-[90%]  left-1/2   object-cover'/>
      <h1 
        className={` absolute top-[90%]  hidden lg:block left-[55%] text-left  w-[363px] ${val?'text-[#606060]':'text-[#B6B6B6]'} text-[10px] font-[700] leading-[13px]  `}
      >
        Brokerage services by Cash App Investing LLC, member FINRA / SIPC.   <br />
        See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin  trading offered by Cash App. Cash App Investing does not trade bitcoin and  Cash App is not a member of FINRA or SIPC. Cash App facilitates banking   services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</h1>
      </div>


      <div  className={` py-2 flex absolute ${val?'top-[117%]':'top-[93%]'} md:top-[90%]  left-[35%] md:left-[83%] gap-[30px] cursor-pointer`}>
       <img src={frame} alt='frame' className={`${imageSocialBlack} w-[24px] h-[24px] cursor-pointer object-cover`} />
      <img src={twitter} alt='twitter' className={`${imageSocialBlack} w-[21px] h-[17px] cursor-pointer      object-cover`}/>
      <img src={insta} alt='insta' className={`${imageSocialBlack} w-[21px] h-[21px]     cursor-pointer object-cover`}/>
      </div>
      </div>
  )
}

export default FixedFooter
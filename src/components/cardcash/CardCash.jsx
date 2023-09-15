import React from 'react'
import stairLeft from '../../assets/image/CardCash/boost-stairs-2.png'
import stairRight from '../../assets/image/CardCash/boost-stairs-1.png'
import Phone from '../../assets/image/CardCash/boost-phone.png'
import Juice from '../../assets/image/CardCash/boost-coffee.png'
import Burger from '../../assets/image/CardCash/boost-burger.png'
import Card from '../../assets/image/CardCash/boost-card.png'
import Hand from '../../assets/image/CardCash/boost-hand.png'
import Shoe from '../../assets/image/CardCash/boost-shoe.png'
const CardCash = () => {
    return (
      <div className='relative w-full h-screen bg-black sm:flex shrink-0 overflow-hidden'  >
          <div
              style={{ backgroundImage: `url(${stairLeft})` }}
              className=' w-auto md:w-[670px] h-[725px] relative bottom-[-21%] object-cover bg-no-repeat flex'>
                    <div className='w-0 md:w-[50%]'>

                    </div>
                    <div className='flex flex-col w-full   px-16 justify-center items-center sm:justify-normal h-full '>
                        <h1 className='text-left text-[#00D54B] text-[40px]  font-[800]   leading-[40px]' >Cash Card & Boost</h1>
                        <p className='  py-4 text-[16px]  text-[#fff] font-[400]   leading-[22px]  tracking-[0.3px] '>The Cash Card is a free, customizable debit card that lets you pay online and in stores. It’s the only way to get Boosts—instant discounts that work at places where you want to spend.</p>
                <img src={Phone} alt="Phone" className='w-[250px] h-[508px]   sm:hidden block   ' />

                    </div>
              </div>
          <div
              style={{ backgroundImage: `url(${stairRight})` }}
              className='    w-[1050px] h-[897.71px] object-cover  hidden      bg-no-repeat sm:flex'>
               
               <div>
                <img src={Phone} alt="Phone" className='w-[250px] h-[508px] absolute top-[20%]' />
               </div>
               <div>
               <img src={Juice} alt="Juice" className='w-[80px] h-[100.87px] absolute top-[71.5%] left-[78.5%]' />
               <img src={Burger} alt="Burger" className='w-[70px] h-[92.615px] absolute top-[52%] left-[71%]' />
               <img src={Card} alt="Card" className='w-[80px] h-[134.493px] absolute top-[28%] left-[79%]' />
               <img src={Hand} alt="Hand" className='w-[75px] h-[93.462px] absolute top-[12%] left-[86.5%]' />
               <img src={Shoe} alt="Shoe" className='w-[100px] h-[80.22px] absolute top-[55%] right-[-2%]' />
 
               </div>
               </div>
       </div>
    )
  }
  
export default CardCash
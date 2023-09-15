import React from 'react'
import img1  from'../../assets/image/payment/payments-column (1).png'
import img11  from'../../assets/image/payment/payments-column (2).png'
import phone  from'../../assets/image/payment/payments-phone 1.png'
import img34 from '../../assets/image/payment/payments-pillar-medium (3).png'
  
const Payments = () => {
  return (
    <div className=' w-full relative h-[100vh] overflow-hidden shrink-0 pt-16'>
        <div className='     md:flex justify-center items-center '>
          <div className='   sm:absolute  md:left-[15%] text-center w-[100%] p-5 md:p-0 sm:w-[25%] ' > 
        <h1 className='text-[#00D54B]  pb-4   text-[40px] font-[800] uppercase leading-[40px]'>Payments</h1>
            <p className='z-[4] text-left'>
          Send and receive money with anyone, donate to an important cause, or tip professionals. Just enter a $cashtag, phone number, or Scan their QR code to pay.
        </p>
        </div>
      <img src={phone}  className='  w-[500px] h-[250px] sm:w-[750px] sm:h-[497.54px]  ' alt="phone" />

     </div>
        <div className=''>
            <img src={img11} alt="" className='  w-[180px] h-[497.54px] absolute top-[50%]  left-[0%]  hidden sm:block  '/>
            <img src={img34} alt="" className='hidden md:block w-[180px] h-[253.73px] absolute top-[60%]  left-[10%]   z-[2] '/>
            <img src={img34} alt="" className=' w-[135px] h-[131.318px] absolute top-[70%]  left-[17%]   z-[1] '/>
            <img src={img34} alt="" className=' w-[172px] h-[253.73px] absolute top-[61%]  left-[41%]   z-[3] '/>
            <img src={img34} alt="" className=' w-[172px] h-[253.73px] absolute top-[75%]  left-[52%]   z-[3] '/>
            <img src={img34} alt="" className=' w-[210px] h-[333.73px] absolute top-[48%]  left-[51%]   z-[2] '/>
            <img src={img1} alt="" className=' w-[810px] h-[497.54px] absolute top-[43.5%]  left-[29%]   z-[3] '/>
            <img src={img34} alt="" className=' w-[172px] h-[253.73px] absolute top-[43%]  left-[73%]   z-[1] '/>
            <img src={img1} alt="" className='hidden md:block w-[810px] h-[497.54px] absolute top-[33%]  left-[46%]   z-[1] '/>

                        

        </div>
    </div>
  )
}

export default Payments
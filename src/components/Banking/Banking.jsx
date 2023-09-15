import React from 'react'
import Phone from '../../assets/image/Banking/banking-phone.png'
import BankingHole from '../../assets/image/Banking/banking-hole.png'
import BankingColumn from '../../assets/image/Banking/banking-column.png'
import BankingStairs from '../../assets/image/Banking/banking-stairs-2.png'
import  BankingRamp from '../../assets/image/Banking/banking-ramp-2.png'
import BankingTrack from '../../assets/image/Banking/banking-track-1.png'
import BankingTrack2 from '../../assets/image/Banking/banking-track-2.png'
import BankingRamp2 from '../../assets/image/Banking/banking-ramp-1.png'
import BankingMonster from '../../assets/image/Banking/banking-track-2.png'
import BankingCube from '../../assets/image/Banking/banking-cubes.png'
import BankingTube from '../../assets/image/Banking/banking-tube.png'
import BankingStair1 from '../../assets/image/Banking/banking-stairs-1.png'


const Banking = () => {
  return (
    <div className='relative w-full h-[100vh] bg-[#00D54B] sm:flex shrink-0 overflow-hidden'>
        <div className='  sm:flex w-full  item-center h-[100vh] items-center justify-center z-[4]  sm:absolute left-[-10%] '>
            <div className='   px-5 sm:px-0   justify-center sm:w-[20%]'>

                <h1 className=' text-center  sm:text-left w-[80%] text-[#fff] text-[40px]  font-[800]   leading-[40px]' >Banking</h1>
                        <p className='  py-4 text-[16px]  text-[#000] font-[400]   leading-[22px]  tracking-[0.3px] '>Receive your paycheck, tax returns, and other direct deposits up to two days early using your Cash App routing 
and account number.</p>

            </div>
            <div className='     '>
            <img src={Phone} alt="Phone" className='w-[350px] h-[407.988px]     ' />

            </div>
        </div>
        <img src={BankingHole} alt="BankingHole" className='w-[380px] h-[159.917px] absolute  hidden sm:block' />
        <img src={BankingColumn} alt="BankingColumn" className='w-[130px] h-[199.815px] absolute top-[15%] left-[8%] hidden sm:block' />
        <img src={BankingStairs} alt="BankingStairs" className='w-[80px] h-[222.785px] absolute top-[50%] left-[5%] hidden sm:block' />
        <img src={BankingRamp} alt="BankingRamp" className='w-[300px] h-[194.483px]  absolute top-[65%] left-[12%] hidden sm:block' />
        <img src={BankingTrack} alt="BankingTrack" className='w-[270px] h-[166.384px] absolute top-[25%] left-[28%] hidden sm:block' />

        <img src={BankingTrack2} alt="BankingTrack2" className='w-[250px] h-[160.417px] absolute   left-[70%] ' />
        <img src={BankingRamp2} alt="BankingRamp" className='w-[300px] h-[194.483px] absolute top-[30%] left-[57%] hidden sm:block' />


        <img src={BankingMonster} alt="BankingMonster" className='w-[120px] h-[79.664px] absolute top-[85%] left-[85%] ' />
        <img src={BankingCube} alt="BankingCube" className='w-[240px] h-[139.115px] absolute top-[75%] left-[60%] ' />
        <img src={BankingHole} alt="BankingHole" className='w-[380px] h-[159.917px] absolute  top-[95%] left-[55%] ' />
        <img src={BankingTube} alt="BankingTube" className='w-[150px] h-[156.923px] absolute  top-[80%] left-[35%]  ' />
        <img src={BankingStair1} alt="BankingStair1" className='w-[90px] h-[247px] absolute top-[40%] left-[89%] hidden sm:block' />

    </div>
  )
}

export default Banking
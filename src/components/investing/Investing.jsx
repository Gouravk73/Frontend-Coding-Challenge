import React from 'react'
import vector1 from '../../assets/image/Investing/floor1.svg'
import vector2 from '../../assets/image/Investing/floor2.svg'
import StocksImage from'../../assets/image/Investing/investing-stocks.png'
import BitcoinImage from '../../assets/image/Investing/investing-bitcoin.png'
import investigationGraph1 from '../../assets/image/Investing/investing-graph-1.png'
import investigationGraph2 from '../../assets/image/Investing/investing-graph-2.png'
import investigationGraph3 from '../../assets/image/Investing/investing-graph-3.png'
import FixedFooter from '../../utils/Fixed_footer'

const Investing = () => {
  return (
    <div className='w-full h-screen relative'>
         <div 
        style={{ backgroundImage: `url(${vector1})` }}
        
        className='bg-[#00D54B] relative w-full h-1/2 object-cover '>
            <div className='w-full h-1/2 flex justify-center items-center'>                 
            <h1 className='text-center text-[#fff] text-[40px]  font-[800]   leading-[40px]' >Investing</h1>
            </div>

            <div>
                <div className='md:flex justify-around gap-16 '>
                    <div className='p-2   lg:pl-[6rem] flex  gap-4' >
                        <div>
                        <h1 className=' text-[22px]  font-[800]   leading-[40px]'>Stocks</h1>
                        <p className='  py-4 text-[16px]  font-[400]   leading-[22px]  tracking-[0.3px] '>Whether you’re an expert or just getting started, Cash App is the fastest and most accessible way to invest in stocks. Start now with as little as $1.</p>
                        </div>
                        <img src={StocksImage} alt="Stock" className='w-[160px] h-[344px]  ' />
                    </div>
                    <div className='p-2 lg:pr-[6rem] flex  gap-4'>
                        
                        <img src={BitcoinImage} alt="Bitcoin"  className='w-[160px] h-[344px]   ' />
                        <div>
                        <h1 className='text-[22px] text-[800] font-[800]   leading-[40px]'>Bitcoin</h1>
                        <p className='  py-4 text-[16px]  font-[400]   leading-[22px]  tracking-[0.3px]'>Cash App is the fastest way to convert dollars to bitcoin. From your home screen, six taps are all it takes to stack sats, buy an entire bitcoin, or just see what it’s all about.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div style={{ backgroundImage: `url(${vector2})` }}
            className='bg-[#ffffff] w-full h-1/2 object-cover  hidden sm:flex'>
                <div 
                    style={{ backgroundImage: `url(${investigationGraph1})` }}
                    className='  w-[1024px] h-[283px] object-cover  bg-no-repeat '
                ></div>
                <div>
                <img src={investigationGraph2} alt="investigationGraph3" className='w-[356px] h-[411px] absolute right-0 top-0' /> 
                <img src={investigationGraph3} alt="investigationGraph3" className='w-[656px] h-[386.5px]' /> 
                </div>            
                
         </div>
         
       <FixedFooter val={true} />
    </div>
  )
}

export default Investing
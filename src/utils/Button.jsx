import React from 'react'
import {AiFillApple} from 'react-icons/ai'
const Button = () => {
  return (
        <button className='bg-black flex items-center justify-center border rounded-md border-white  text-white  w-40 h-10 gap-2 '>
            <AiFillApple className=' text-green-500' size={20}/>
            <span className=' font-bold text-white cursor-pointer'>APP STORE</span>
            </button> 
     
  )
}

export default Button
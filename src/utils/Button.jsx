import React from 'react'

const Button = ({text,Icon}) => {
  return (
        <button className='bg-black flex items-center justify-center border rounded-md border-white  text-white  w-40 h-10 gap-2 '>
            <Icon className=' text-green-500' size={20}/>
            <span className=' font-bold text-white cursor-pointer'>{text}</span>
            </button> 
     
  )
}

export default Button
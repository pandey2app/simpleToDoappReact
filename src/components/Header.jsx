import React from 'react'
import checkIcon from "../images/check.svg"

export default function Header() {
  return (
    <div className='w-full border-b-4 border-red-600 text-center mb-4 p-3 bg-yellow-300'>
        <h1 className='text-4xl font-extrabold font-sherif flex justify-center text-red-600'>Check It <img className='h-10 w-10 ms-4 ' src={checkIcon}/></h1>
        <p className='mt-2 text-xl min-md:text-2xl font-mono font-bold text-green-700'>Daily Tasks Organised...!</p>
      
    </div>
  )
}

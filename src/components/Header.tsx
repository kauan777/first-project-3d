import React from 'react'

export function Header() {
  return (
    <header className='w-full text-gray-50 px-16 py-6 text-center flex justify-between'>
        <h4 className='py-2 px-4 rounded-full'>armChair</h4>
        <ul className='flex gap-2 items-center'>
          <li className='cursor-pointer py-2 px-4 rounded-full'>Home</li>
          <li className='cursor-pointer py-2 px-4 rounded-full'>About</li>
          <li className='cursor-pointer py-2 px-4 rounded-full'>Services</li>
          <li className='cursor-pointer py-2 px-4 rounded-full border border-solid border-white transition-colors
            hover:bg-white hover:text-gray-500
          '>Sign up</li>
        </ul>
    </header>
  )
}

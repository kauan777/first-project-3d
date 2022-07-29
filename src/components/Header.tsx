
export function Header() {
  return (
    <header className='
     w-full text-gray-50 font-extralight px-16 py-8 text-center
     flex justify-between'
     >
        <h4 className='py-2 px-4 rounded-full'>Apple</h4>
        <ul className='flex gap-2 items-center'>
          <li className='cursor-pointer py-2 px-4 rounded-full'>Home</li>
          <li className='cursor-pointer py-2 px-4 rounded-full'>About</li>
          <li className='cursor-pointer py-2 px-4 rounded-full'>Services</li>
          <li className='cursor-pointer py-2 px-4 rounded-full'>Sign up</li>
        </ul>
    </header>
  )
}

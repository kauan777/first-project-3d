
export function Header() {
  return (
    <header className='
     w-full text-gray-50 font-light px-16 py-8 text-center
     flex justify-between'
     >
        <h4 className='py-2 px-4 rounded-full'>Apple</h4>
        <ul className='flex gap-2 items-center'>
          <li className='
            cursor-pointer
            py-2 px-4 rounded-full 
            hover:bg-slate-50
            transition-all
            hover:text-gray-500
            '>Home</li>
                      <li className='
            cursor-pointer
            py-2 px-4 rounded-full 
            hover:bg-slate-50
            transition-all
            hover:text-gray-500
            '>Products</li>
                      <li className='
            cursor-pointer
            py-2 px-4 rounded-full 
            hover:bg-slate-50
            transition-all
            hover:text-gray-500
            '>Contact</li>
          <li className='
                    cursor-pointer 
                    border border-solid 
                    transition-all
                  border-white py-2 px-4 rounded-full
                    hover:bg-gray-50
                    hover:text-gray-500
                  '>Sign in</li>
        </ul>
    </header>
  )
}

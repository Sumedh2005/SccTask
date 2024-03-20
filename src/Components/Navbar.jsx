import React from 'react'

function Navbar() {
  return (
    <>
    <div className="nav bg-light flex flex-row justify-between py-2 px-4 relative ">
        <div className="lft flex flex-row font-bold ">
            <img src='./images/logo.svg' className='h-8 w-8 '></img>
            <p className='px-2 pt-1 text-md'>humankind</p>
        </div>

        <div className="rgt flex flex-row font-semibold">
            <ul className='flex flex-row pr-4 text-sm pt-[5px] pl-[710px]'>
                <li className=' px-4 hover:text-gray'>Wrestle</li>
                <li className='px-4 hover:text-gray'>Collectibles</li>
                <li className='px-4 hover:text-gray'>Shop</li>
                <li className='px-4 hover:text-gray'>Community</li>
                <li className='px-4 hover:text-gray'>Subscribe</li>
            </ul>

            <button className='bg-dark1 text-white px-8 text-sm rounded-2xl'>Play Now</button>
        </div>
    </div>
    </>
  )
}

export default Navbar
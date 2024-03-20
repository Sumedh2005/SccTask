import React from 'react'

function Discover() {
  return (
   <>
   <div className="top ">
     <img src='./images/Discover.png' className='h-[450px] ml-[300px]'></img>
   </div>

   <div className="down flex flex-row justify-between  mx-[350px] pt-10">
      <div className="lft  w-[1600px] text-2xl font-bold text-dark1">
         <p>Designing a universe</p>
      </div>

      <div className="rgt  ">
        <p className=''>We’re building the Humankind brand, its world, stories, and characters. Our goal is to capture the hearts and minds of kids and adults worldwide with epic creations, a unique vision, and community-driven storytelling.</p>
        <button className='border-2  rounded-3xl h-10 w-[200px] mt-4 text-md font-semibold bg-dark1 text-white hover:bg-black hover:text-white'>Discover the Art</button>
      </div>
   </div>
   </>
  )
}

export default Discover
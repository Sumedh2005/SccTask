import React from 'react'

function Hero() {
  return (
    <>
    <div className="top  py-8 mt-4 rounded-3xl mx-10 bg-light1">
      <div className="img mb-52   ">
      <img src='./images/Human.png'className=' z-0 px-20 '></img>
        <img src='./images/Kind.png'className=' z-10 px-20 absolute mt-[-245px]'></img>
      </div> 
        
        <p className='text-center text-3xl font-semibold text-black '>Creating a magical world for the kid in all of us.</p>
           <div className="btns flex justify-center pt-10">
              <button className='border-[3px] border-black rounded-3xl h-12 w-[200px] text-md px-2 mr-10 font-semibold hover:bg-dark1 hover:text-white'>Get a Lunchbox</button>
              <button className=' rounded-3xl h-12 w-[150px] text-md px-2 mr-10 font-semibold bg-dark1 text-white hover:bg-black hover:text-white hover:border-2'>Play Now!</button>
           </div>
        
    </div>
    </>
  )
}

export default Hero
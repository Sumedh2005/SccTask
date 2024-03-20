import React from 'react'

function Join() {
  return (
    <>
       <div className='mx-[250px] border-dark1 border-[2px] mt-8  rounded-3xl hover:shadow-lg'>
        <img className="h-[350] w-[520px] mt-18 ml-[250px]" src="./images/join.webp"></img>
        <h1 className="mt-7 font-bold text-3xl text-center text-dark1">Join our Adventure</h1>
        <p className="px-[150px] text-center mt-5 text-lg" >
            Despite the many evil forces in the world, there is hope. We can still make a positive difference through art and community. We’re looking for other geeks, punks, and freaks like us who believe in the power of storytelling to be a part of our quest.
        </p>
        <button className="h-[40px] w-[180px] mb-8  border-[2px]  rounded-[30px] font-semibold text-base bg-dark1 text-white hover:bg-black hover:text-white mt-5 ml-[400px]" >Join our Discord</button>


    </div>
    </>
 
  )
}

export default Join
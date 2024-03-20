import React from 'react'

function Building() {
  return (
    <div className="flex">
        <img className="h-[800px] w-[1100px]" src="./images/building.webp"></img>
        <div id="text" className="ml-10">
            <h1 className="font-bold text-4xl pt-60 text-dark1">Building together</h1>
            <p className="text-2xl mt-5 mr-10" >Our mission is to entertain and inspire people all over the globe through the power of art, kindness, and unique storytelling in web3.</p>
            <button className=" mt-5 ml-2 h-[60px] w-[150px]   border-[3px]  rounded-[40px] font-semibold bg-dark1 text-white hover:bg-black hover:text-white " >Explore Careers</button>

        </div>

    </div>
  )
}

export default Building
import React from 'react'

function Cards() {
  return (
    <div>
    <div id="first" class=" w-[950px] h-[520px] mx-[110px] my-[70px] ml-[280px] border-[4px] border-dark1 rounded-3xl flex" >
        <div className="h-[420px] w-[410px] ">
            <img className="h-[470px] mx-5 mt-5 w-[420px] rounded-md" src="./images/cd1.webp"></img>
        </div>
        <div className="h-[420px] w-[410px] ml-[100px]">
            <h1 className="pt-24 pl-2 font-bold text-2xl text-dark1 ">Wrestle. Wrestle. Wrestle! </h1>
            <p className="mt-4 mx-2">
            Step into the arena with Wrestle, the latest game feature in Herokind. Pit your Humankind characters against a diverse array of monsters, from the ferocious Alligatornado to the cunning Nerdy Dragon. Strategize your moves and watch your characters grow in this turn-based adventure.
            </p>
            <div className="flex mt-5">
                <button className="h-[45px] w-[120px]  border-[2px]  rounded-3xl font-semibold text-sm  bg-dark1 text-white hover:bg-black hover:text-white" >Learn More</button>
                <button className=" ml-2 h-[45px] w-[120px]  border-[1px] rounded-3xl font-semibold text-sm border-dark1 text-black" >Wrestle Now!</button>
            </div>
        </div>
    </div>


    <div id="second" class=" w-[950px] h-[520px] mx-[110px] ml-[280px] my-[70px] border-[4px] border-dark1 rounded-3xl flex" >
        <div className="h-[520px] w-[410px]  ">
            <img className="h-[470px] mx-5 mt-5 w-[420px] rounded-md" src="./images/cd2.webp"></img>
        </div>
        <div className="h-[520px] w-[410px] ml-[100px]">
            <h1 className="pt-28 pl-2 font-bold text-2xl text-dark1">Play Herokind!</h1>
            <p className="mt-4 mx-2">
            Herokind is a unique game made just for Humankind NFT collectors. It combines the fun of collectibles with the anticipation of daily adventure events.
            </p>
            <p className="mt-4 mx-2">
            Send your Humankind collectibles to places like Tenotch Forest, Skull Volcano, and Cloud Island, where the environment and events are unpredictable and can change at any time.
            </p>
            <div className="flex mt-5">
                
                <button className=" ml-2 h-[45px] w-[120px] bg-dark1 text-white hover:bg-black hover:text-white rounded-3xl font-semibold text-sm " >Play Now!</button>
            </div>
        </div>
    </div>


    <div id="third" class=" w-[950px] h-[520px] mx-[110px] ml-[280px] my-[70px] border-[4px] border-dark1 rounded-3xl flex" >
        <div className="h-[420px] w-[410px]  ">
            <img className="h-[470px] mx-5 mt-5 w-[420px] rounded-md" src="./images/cd3.webp"></img>
        </div>
        <div className="h-[420px] w-[410px] ml-[100px] ">
            <h1 className="pt-24 pl-2 font-bold text-2xl text-dark1">Bring your ideas to life with the Humankind Fund</h1>
            <p className="mt-4 mx-2">
            The Humankind Fund is a community-driven initiative that supports and empowers projects that share the values and mission of the Humankind brand. Join us in bringing creative ideas to life and making a positive impact on the world.
            </p>
            <div className="flex mt-5">
                
                <button className=" ml-2 h-[45px] w-[120px]  bg-dark1 text-white hover:bg-black hover:text-white rounded-3xl font-semibold text-sm " >Learn More
                </button>
            </div>
        </div>
    </div>


    <div id="fourth" class=" w-[950px] h-[520px] mx-[110px] ml-[280px] my-[70px] border-[4px] border-dark1 rounded-3xl flex " >
        <div className="h-[400px] w-[400px] ">
            <img className="h-[450px] mx-5 mt-5 w-[420px] rounded-md" src="./images/cd4.gif"></img>
        </div>
        <div className="h-[400px] w-[420px] ml-[100px]">
            <h1 className="pt-6 pl-2 font-bold text-2xl text-dark1">Grab your lunchbox. It will be a long journey.</h1>
            <p className="mt-4 mx-2">
            We are delighted you’re finally joining our adventure alongside Maya and Dallas. It all starts with a simple and nostalgic object: a lunchbox. A lunchbox? What for? Well, it’s gonna be a long journey!
            </p>
            <p className="mt-4 mx-2">
            Every lunchbox will unlock a Humankind on a brave quest. You’ll be able to claim your Kind with them. We’ve made our generative lunchboxes with art we’ve been creating for the last year.
            </p>
            <div className="flex mt-4">
                <button className="h-[45px] w-[180px] border-[1px] border-dark1 text-black rounded-3xl font-semibold text-sm " >Get one from Opensea</button>
                <button className=" ml-2 h-[45px] w-[120px] bg-dark1 text-white hover:bg-black hover:text-white rounded-3xl font-semibold text-sm " >Learn More</button>
            </div> 
        </div>
    </div>
   

</div>

  )
}

export default Cards
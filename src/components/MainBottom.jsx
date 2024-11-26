import React from 'react'

import girlPhoto from "../assets/girl.png"

const MainBottom = () => {
  return (
    <div className="container min-w-[1280px] w-[100%] mx-auto mt-[80px] mb-11 flex">
      <div className="py-[60px] w-[50%]">
        <img src={girlPhoto} alt="" />
      </div>

      <div className="w-[50%] flex flex-col gap-9  justify-center text-start">
        <h2 className="text-[48px] text-[#3C567B] max-w-[80%]">
          Leading healthcare providers
        </h2>
        <p className="text-[#93C1F9] text-[19px] max-w-[80%]">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver
        </p>
        <button className="w-[200px] h-[68px] rounded-[20px] border-4 border-[#458FF6] text-[#458FF6]">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default MainBottom
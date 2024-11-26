import React from "react";
import doctorFoto from "../assets/doctor.png";

const Main = () => {
  return (
    <div className="container min-w-[1280px] w-[100%] mx-auto flex mt-5">
      <div className="w-[50%] flex flex-col gap-9 items-center justify-center">
        <h1 className="text-[48px] text-[#3C567B] min-w-8">
          Virtual healthcare Saviour for you
        </h1>
        <p className="text-[#93C1F9] text-[19px] min-w-[70%]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.{" "}
        </p>
        <button className="w-[200px] h-[68px] rounded-[20px] bg-[#458FF6]">
          Consult today
        </button>
      </div>

      <div className="py-[60px] w-[50%]">
        <img src={doctorFoto} alt="" />
      </div>
    </div>
  );
};

export default Main;

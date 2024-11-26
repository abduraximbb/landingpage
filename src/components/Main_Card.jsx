import React from 'react'

import { CARD_LIST } from '../static'

const Main_Card = () => {

    const productItem = CARD_LIST?.map((item, inx) => (
      <div
        key={inx}
        className="card__item grid items-center justify-center gap-6 rounded-lg shadow-lg"
      >
        <img
          src={item.url}
          alt=""
          className="mx-auto "
        />
        <h2 className="mx-auto text-[24px] text-black">{item.title}</h2>
        <p className="mx-auto text-[16px] max-w-[270px] text-[#7D7987]">
          {item.desc}
        </p>
      </div>
    ));

  return (
    // <div className="flex flex-row border-2 border-yellow-300">
      <div className="container min-w-[1280px] w-[100%] mx-auto flex flex-row mt-5">
        <div className="w-[100%] grid grid-cols-3 gap-8">{productItem}</div>
      </div>
    // </div>
  );
}

export default Main_Card
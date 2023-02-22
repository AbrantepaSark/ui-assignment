import React from "react";
import Image from "next/image";

import PositionedCard from "./PositionedCard";

const Item = (props) => {
  return (
    <div className=" h-[19rem] w-full  shadow-md">
      <div className="h-1/2 ">
        <Image
          alt="food_image"
          src={props.image}
          width="100"
          height="50"
          className="object-cover h-full w-full rounded-t-md"
        />
      </div>

      <div class="px-4 pb-5 pt-6 h-1/2 rounded-b-md text-center relative">
        <div className="absolute -top-3 right-2">
          <PositionedCard />
        </div>
        <h5 class="mb-1 text-[0.8rem] font-normal leading-tight text-[#712727]">
          {props.title}
        </h5>
        <p class="mb-3 text-[0.8rem] text-gray-400 ">{props.description}</p>

        <p class="mb-2 font-bold text-[0.9rem] text-red-400 ">{props.price}</p>
        <div
          className={`mb-3 mx-auto w-1/5 md:w-2/5 bg-green-200 rounded-xl ${
            props.status === "open" ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <p
            className={`${
              props.status === "open" ? "text-green-700" : "text-red-700"
            } py-1 text-[0.7rem]`}
          >
            {props.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;

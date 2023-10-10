import React from "react";
import backimagejobhunt from "../../../../resources/backimagejobhunt.jpg";
import { AiOutlineSearch } from "react-icons/ai";

const Banner = () => {
  return (
    <div
      className="w-full h-screen bg-cover relative"
      style={{ backgroundImage: `url(${backimagejobhunt})` }}
    >
      <div className="bg-[#10195d] flex items-center justify-center w-full h-full absolute top-0 left-0 bottom-0 right-0 opacity-80">
        <div className="flex justify-center items-center flex-col  w-8/12 mx-auto ">
          <h1 className="text-white text-5xl font-bold ">
            The Easiest Way To Get Your New Job
          </h1>
          <h1 className=" mt-4 text-bold text-gray-300">
            Find Jobs, Employment & Career Opportunities
          </h1>

          <div className="mt-4 flex  gap-4 w-full  ">
            <input
              className="border p-4 w-full outline-none"
              type="text"
              placeholder="Job titles, keyword and company name"
            />
            <input
              type="text"
              className="border w-full p-4 outline-none"
              placeholder="City, province or origin"
            />
            <button className="flex  text-white gap-2  font-semibold justify-center items-center p-4 bg-[#fb236a]">
              Search
              <span>
                <AiOutlineSearch className="text-xl font-bold" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

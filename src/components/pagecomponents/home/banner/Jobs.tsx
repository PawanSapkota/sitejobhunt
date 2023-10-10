import React from "react";
import goggle from "../../../../resources/goggle.png";
import amazon from "../../../../resources/amazon.png";
import { CiLocationOn } from "react-icons/ci";

const Jobdata = [
  {
    logo: goggle,
    post: "Software Engineer",
    company_name: "Goggle",
    Location: <CiLocationOn className="text-gray-200" />,
    location_name: "Canada",
    jobtype: "Fulltime",
  },
  {
    logo: amazon,
    post: "Network Engineer",
    company_name: "Amazon",
    Location: <CiLocationOn className="text-gray-200" />,
    location_name: "USA",
    jobtype: "Fulltime",
  },
];

const Jobs = () => {
  return (
    <div className="w-10/12 mx-auto h-screen">
      <div className="w-full shadow-sm flex  flex-col gap-9 p-4 ">
        {Jobdata.map((val: any, i: number) => {
          return (
            <div
              key={i}
              className="w-full flex  justify-between border-black shadow-lg  hover:cursor-pointer p-4"
            >
              <div className="flex gap-6 items-center p-2">
                <img className="" src={val.logo} />
                <div>
                  <h1 className="font-semibold text-xl">{val.post}</h1>
                  <h1 className="mt-2 font-semibold">{val.company_name}</h1>
                  <div className=" flex gap-2 items-center mt-2 ">
                    <h1 className="text-2xl font-bold text-black">
                      {val.Location}
                    </h1>
                    <span className="text-sm font-thin">
                      {val.location_name}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="hover:bg-[#0f834d] hover:text-white border text-[#0f834d] text-xs font-semibold rounded  bg-white p-2 border-[#0f834d]">
                  {val.jobtype}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;

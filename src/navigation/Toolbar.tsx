import { BsPieChart } from "react-icons/bs";
import { NavData } from "./NavData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineLogin, AiOutlinePlus } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";

const Toolbar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", scrollfixed);
    return () => {
      window.removeEventListener("scroll", scrollfixed);
    };
  }, []);

  const scrollfixed = () => {
    if (window.scrollY > 200) {
      // console.log(scrollY);
      setShow(true);
    } else {
      setShow(false);
    }
  };
  return (
    <div
      className={`${
        show ? "bg-black shadow-lg text-black " : "bg-transparent "
      } fixed top-0 left-0 right-0 z-50 transition-all duration-700 delay-150 origin-top w-full   `}
    >
      <div className="w-10/12 mx-auto  flex justify-between items-center text-white  h-20">
        <div className="flex gap-4  items-center">
          <BsPieChart className="text-xl " />
          <h1 className="text-2xl font-bold">Jobhunt</h1>
        </div>

        <div className="flex items-center gap-4 ">
          <div>
            <ul className="flex gap-4 items-center  ">
              {NavData.map((data, i) => {
                return (
                  <li key={i} className="cursor-pointer   p-2  ">
                    <Link to={data.path} className="relative group  py-2">
                      {data.title}
                      <div
                        className={`absolute  rounded-lg bottom-0 left-0 w-full h-0.5 bg-[#3e64ff] transform scale-x-0 duration-700 delay-100 origin-center transition-transform group-hover:scale-x-100 
                         "bg-[#3e64ff]" : ""
                      `}
                      ></div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <Link to="/form">
              <button className="flex justify-center items-center  gap-2 bg-[#fb236a] px-3 py-2 rounded">
                Post Job{" "}
                <span>
                  <AiOutlinePlus className="text-xl font-bold " />
                </span>
              </button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2">
            <button className="flex gap-1  justify-center items-center">
              <h1 className="">Register </h1>
              <span>
                <AiOutlineSetting className="  font-bold text-xl" />
              </span>
            </button>
            <div className="w-px h-4  bg-white"></div>
            <button className="flex justify-center items-center gap-1">
              Login
              <span>
                <AiOutlineLogin className=" font-bold text-xl" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;

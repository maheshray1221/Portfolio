import React, { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  return (
    <div>
      <div
        className=" h-13 w-full flex justify-between items-center bg-[#121f28] fixed inset-0 top-0 left-0 z-50
      lg:h-[5.6vw] lg:w-full lg:flex lg:justify-between lg:items-center lg:bg-[#18252e] lg:fixed lg:top-0 lg:left-0 lg:z-999"
      >
        <h1 className="text-2xl flex font-semibold ml-2 lg:text-4xl gap-2 text-white lg:gap-4  lg:font-bold lg:ml-20">
          Mahesh <span className="text-[#fb715e]">Ray</span>
        </h1>
        <div className="w-10 h-8 border border-white ml-40 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7 text-[#fb715e] ml-1 mt-0.5 "
            onClick={() => setOpen(!open)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div>
          <ul className="hidden md:flex lg:gap-15 lg:text-white lg:text-2xl ">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li className="lg:text-2xl lg:text-white lg:bg-[#fb715e] lg:rounded-[5px] lg:px-4 lg:py-2 lg:mr-5">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      {open && (
        <div className="md:hidden w-150 h-full text-[black] bg-black/80 p-6 fixed inset-0 z-999 ml-25">
          <div className="flex flex-col gap-7 text-red text-lg ml-3 mt-5 font-semibold">
            <div className="flex flex-col justify-center  bg-white w-50 h-12 px-4  rounded-lg  ">
              <a href="#home" onClick={() => setOpen(false)}>
                Home
              </a>
            </div>

            <div className="flex flex-col justify-center  bg-white w-50 h-12 px-4 rounded-lg  ">
              <a href="#project" onClick={() => setOpen(false)}>
                Project
              </a>
            </div>

            <div className="flex flex-col justify-center  bg-white w-50 h-12 px-4 rounded-lg  ">
              <a href="#contact" onClick={() => setOpen(false)}>
                Contact
              </a>
            </div>
            <div className="flex flex-col justify-center text-white bg-[#fb715e] w-50 h-12 px-4 rounded-lg  ">
              <button onClick={() => setOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#18252e] w-full lg:h-57 flex justify-center items-center mt-7">
      <div className="text-center">
        <h1 className="text-lg lg:text-3xl  text-[#fcffff] ">Mahesh Ray</h1>
        <p className="text-sm leading-10 lg:text-2xl lg:leading-15 text-[#b1bac2]">
          Create with love &copy;2025 Mahesh Ray All Rights Reserved.
        </p>
        <div className=" flex justify-center text-lg gap-3 mb-4 lg:text-4xl lg:gap-9">
          <div className="bg-[#efefed] w-8 h-8 lg:w-13 lg:h-12 rounded-full">
            <a href="mailto:fint1197@gmail.com?subject=Hello mahesh">
              <i className="ri-mail-line "></i>
            </a>
          </div>
          <div className="bg-[#efefed] w-8 h-8 lg:w-13 lg:h-12 rounded-full ">
            <a href="https://github.com/maheshray1221">
                <i className="ri-github-line"></i>
            </a>
          </div>
          <div className="bg-[#efefed] w-8 h-8 lg:w-13 lg:h-12 rounded-full">
            <a href="https://www.linkedin.com/in/mahesh-ray-871194331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <i>in</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

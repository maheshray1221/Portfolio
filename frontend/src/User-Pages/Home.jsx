import React, { useContext, useEffect, useState } from "react";
import { PortfolioContext } from "../context/portfolio_context.jsx";
import  {useNavigate} from "react-router-dom"

export default function Home() {
  const navigate = useNavigate("")
  const [data, setData] = useState("");
  const { getAbout } = useContext(PortfolioContext);

  useEffect(() => {
    const handleGetAbout = async () => {
      let result = await getAbout();
      setData(result.data);

      console.log("result =>", result.data);
    };
    handleGetAbout();
  }, []);
  
  return (
    <div className=" w-full flex flex-col items-center min-h-screen lg:justify-items-normal lg:flex lg:flex-row ">
      <div className="w-full pt-6  order-2 lg:pt-15 lg:order-1 lg:w-1/2 ">
        <h1 className="text-3xl font-semibold px-10 leading-10 lg:text-6xl text-[#fcffff] lg:mt-0 lg:font-semibold lg:ml-15 lg:leading-25">
          Hello <span className="text-[#ff715b]">&bull;</span>
        </h1>
        <div className="flex ">
          <div className="w-20 h-1 mt-9 lg:w-35 lg:h-1 bg-[#ff715b] lg:mt-18"></div>
          <h1 className="text-3xl ml-2 font-light leading-14 text-[#fcffff] lg:text-6xl lg:font-light lg:leading-25 lg:ml-2">
            I'm {data.name}
          </h1>
        </div>
        <h1 className="text-[2rem] px-9 lg:text-7xl font-bold  text-[#fcffff] lg:font-semibold lg:ml-12 lg:leading-25">
          Fullstack Developer
        </h1>
        <div className="mt-10 ml-6 lg:mt-0 lg:ml-0">
          <a onClick={()=> navigate("/talkme")}
            href="#contact"
            className=" px-9.5 py-3 text-lg rounded-lg
          lg:relative lg:top-15 lg:text-2xl bg-[#ff715b] text-[#fcffff] lg:px-6 lg:py-3 
                    dark:md:hover:bg-[#121f28] dark:md:hover:text-[#ff715b] border
                    dark:md:hover:border-[#ff715b] lg:mt-15 lg:ml-21"
          >
            Hire Me
          </a>
          <a
          href="/Mahesh_Resume.pdf"
          download
            className="px-5.5 py-3 text-lg rounded-lg ml-7
           lg:relative lg:top-15 lg:text-2xl border border-[#ff715b]
                   text-[#ff715b] lg:px-5 lg:py-3 lg:ml-9 lg:dark:md:hover:bg-[#ff715b] 
                   lg:dark:md:hover:text-[#fcffff]"
          >
            My resume
          </a>
        </div>
      </div>
      <div
        className="flex items-center overflow-hidden justify-center w-65 h-65 rounded-full border-4 mt-28 border-orange-500 lg:rounded-none  lg:border-none order-1 
      lg:ml-0 lg:order-2 pt-5 lg:pt-0 lg:w-[50%] lg:h-screen lg:mt-20 lg:flex lg:items-center lg:justify-center lg:relative"
      >
        <img
          className="w-full h-full rounded-full object-cover lg:rounded-none lg:object-none  "
          src={data.imageUrl}
          alt="hero"
        />
      </div>
    </div>
  );
}

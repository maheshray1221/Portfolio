import React from "react";

export default function Skill() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-6xl text-[#fcffff]">Explore my stack</h1>
      </div>
     
      <div className="w-350 ml-20 bg-[#17242d] text-4xl text-[#49555f]">
        <div className=" w-full">
          <div className="flex gap-15">
           
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>React.js</p>
            <p>Next.js</p>
            <p>Bootstrap</p>
            <p>Node js</p>
          </div>
          <div className="flex gap-15">
            <p>Express</p>
            <p>MonogoDB</p>
            <p>Framer motion</p>
            <p>Postgree SQL</p>
            <p>Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

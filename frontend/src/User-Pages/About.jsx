import Project from "./Project.jsx";

export default function About() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:flex bg-[#121f28] lg:h-[41vw]">
        <div className="flex order-2 mt-15 lg:order-1 lg:h-[70%] lg:w-[50%] lg:mt-[6vw] lg:ml-[5vw]">
          <div className="flex items-center space-x-6">
            <div className="ml-1 lg:ml-0 relative hidden md:flex flex-col items-center gap-1.5">
              <div className="w-1 h-14 lg:h-30 bg-[#fb715e] "></div>
              <div className="lg:w-4 w-2 h-2 lg:h-4 bg-[#fb715e] rounded-full"></div>
              <div className="w-1 h-14 lg:h-27 bg-[#fb715e] "></div>
              <div className=" w-2 h-2 lg:w-4  lg:h-4 bg-[#fb715e] rounded-full"></div>
              <div className="w-1 h-14 lg:h-30 bg-[#fb715e] "></div>
            </div>
          </div>

          <div className="hidden md:flex flex-col justify-around ml-4 lg:ml-5 text-[#f5faff] ">
            <div className="flex gap-3 lg:gap-7 items-center">
              <i className="ri-code-box-line text-3xl lg:text-7xl"></i>
              <p className="text-[1.8rem] lg:text-3xl">WebSite Devlopment</p>
            </div>
            <div className="flex gap-3 lg:gap-7 items-center">
              <i className="ri-shapes-line text-3xl lg:text-7xl"></i>
              <p className="text-[1.8rem] lg:text-3xl">API Development</p>
            </div>
            <div className="flex gap-3 lg:gap-7 items-center">
              <i className="ri-macbook-line text-3xl lg:text-7xl"></i>
              <p className="text-[1.8rem] lg:text-3xl">Deployment & DevOps</p>
            </div>
          </div>
        </div>
        <div className="w-full order-1 lg:order-2 lg:w-[50%] lg:mt-[7vw]">
          <div className=" text-center lg:text-left">
            <h1 className="text-[2.1rem] font-semibold lg:text-7xl text-[#fcffff]">
              About me
            </h1>
          </div>
          <div className="text-center mt-6 text-[1.3rem] lg:text-left lg:w-[90%] lg:text-2xl lg:mt-12 text-[#b1bac2]">
            <p>
              Hey I am Mahesh Ray a fresher Full Stack Web Developer from
              Uttarakhand, India. I work on both frontend and backend
              development and I am currently learning Generative AI with a goal
              to build smart, AI-powered applications.
            </p>
          </div>
          <div className="hidden md:flex  lg:flex lg:justify-between lg:w-[82%] lg:mt-10 ">
            <div>
              <h1 className="text-5xl text-[#f7fcfa]">
                5 <span className="text-5xl text-[#ff7160]">+</span>
              </h1>
              <p className="text-[#b1bac2] text-2xl">Completed projects</p>
            </div>
            <div>
              <h1 className="text-5xl text-[#f7fcfa]">
                95 <span className="text-5xl text-[#ff7160]">%</span>
              </h1>
              <p className="text-[#b1bac2] text-2xl">Client satisfaction</p>
            </div>
            <div>
              <h1 className="text-5xl text-[#f7fcfa]">
                2 <span className="text-5xl text-[#ff7160]">+</span>
              </h1>
              <p className="text-[#b1bac2] text-2xl">Learning Years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// relative top-[14vw] left-[8vw]

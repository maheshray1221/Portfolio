import React from 'react'
import Project from './Project.jsx'

export default function About() {
  return (
    <div>
      <div>
        <div className='flex justify-around bg-[#17242d] text-3xl text-[#49555f]
            h-[6vw] w-full items-center'>
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>Typescript</p>
          <p>Node.js</p>
          <p>React.js</p>
          <p>Next.js</p>
        </div>
      </div>
      <div className='flex bg-[#121f28] h-[41vw]'>
        <div className='flex h-[70%] w-[50%] mt-[6vw] ml-[5vw]'>
          <div className='flex items-center space-x-6'>
            <div className='relative flex flex-col items-center gap-1.5'>
              <div className='w-1 h-30 bg-[#fb715e] '></div>
              <div className='w-4 h-4 bg-[#fb715e] rounded-full'></div>
              <div className='w-1 h-27 bg-[#fb715e] '></div>
              <div className='w-4 h-4 bg-[#fb715e] rounded-full'></div>
              <div className='w-1 h-30 bg-[#fb715e] '></div>
            </div>
          </div>

          <div className='flex flex-col justify-around ml-5 text-[#f5faff] '>
            <div className='flex gap-7 items-center'>
              <i className="ri-code-box-line text-7xl"></i>
              <p className='text-3xl'>WebSite Devlopment</p>
            </div>
            <div className='flex gap-7 items-center'>
              <i className="ri-shapes-line text-7xl"></i>
              <p className='text-3xl'>API Development</p>
            </div>
            <div className='flex gap-7 items-center'>
              <i className="ri-macbook-line text-7xl"></i>
              <p className='text-3xl'>Deployment & DevOps Basics</p>
            </div>
          </div>
        </div>
        <div className='w-[50%] mt-[7vw]'>
          <div>
            <h1 className='text-7xl text-[#fcffff]'>About me</h1>
          </div>
          <div className='w-[90%] text-2xl mt-12 text-[#b1bac2]'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
              mollitia? Nobis tempore, minus veniam cupiditate, maiores amet, quis
              facilis officiis veritatislaudantium alias facere at voluptas dicta
              nisi architecto perferendis?</p>
          </div>
          <div className='flex justify-between w-[82%] mt-10 '>
            <div>
              <h1 className='text-5xl text-[#f7fcfa]'>120 <span className='text-5xl text-[#ff7160]'>+</span></h1>
              <p className='text-[#b1bac2] text-2xl'>Completed projects</p>
            </div>
            <div>
              <h1 className='text-5xl text-[#f7fcfa]'>95 <span className='text-5xl text-[#ff7160]'>%</span></h1>
              <p className='text-[#b1bac2] text-2xl'>Client satisfaction</p>
            </div>
            <div>
              <h1 className='text-5xl text-[#f7fcfa]'>2 <span className='text-5xl text-[#ff7160]'>+</span></h1>
              <p className='text-[#b1bac2] text-2xl'>Years of experience</p>
            </div>
          </div>
        </div>
      </div>
      <Project/>
    </div>
    
  )
}



// relative top-[14vw] left-[8vw]
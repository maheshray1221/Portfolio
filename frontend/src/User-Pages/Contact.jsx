import React from 'react'
import {useNavigate} from "react-router-dom"
export default function Contact() {
  const navigate = useNavigate("")
  const isMobile = window.innerWidth < 768;
  
  return (
    <div className='w-full mt-15 lg:h-[33vw] lg:w-full lg:mt-23 '>
      <div className='flex gap-3 lg:gap-6'>
        <div className='w-28 h-1 mt-7 lg:w-38 lg:h-1 bg-[#fb715e] lg:mt-7'></div>
        <p className='text-3xl font-semibold lg:text-3xl text-[#fcffff] '>Contacts</p>
      </div>
      <div className='lg:flex '>
        <div className='w-full mt-7 ml-5 text-2xl lg:mt-10 lg:ml-30'>
          <h1 className='leading-10 lg:text-6xl text-[#fcffff] lg:leading-20'>Have a project?</h1>
          <h1 className='leading-10 lg:text-6xl text-[#fcffff] lg:leading-20 lg:mt-3'>Let's talk!</h1>
          {
            isMobile && (
              <button onClick={()=> navigate("/talkme")}
          className="text-lg bg-[#ff715b] text-[#121f28] px-6 py-2 mt-10 rounded-lg">{isMobile?"Talk To Me":" "}</button>
            )
          }
        </div>
        <div className='hidden md:block lg:w-[50%] lg:ml-45l lg:mt-10'>
          <form className='lg:text-2xl text-white'>
            <div >
              <input className=' focus:outline-none' type="text" placeholder='Name' />
              <div className='lg:h-0.5 lg:w-90 bg-[#ff715b] lg:mt-5'></div>
            </div>
            <div className='lg:mt-5 '>
              <input className=' focus:outline-none' type="text" placeholder='Email' />
              <div className='lg:h-0.5 lg:w-90 bg-[#ff715b] lg:mt-5'></div>
            </div>
            <div className='mt-5'>
              <input className=' focus:outline-none' type="text" placeholder='Phone Number' />
              <div className='lg:h-0.5 lg:w-90 bg-[#ff715b] lg:mt-5'></div>
            </div>
            <div className='lg:mt-5'>
              <textarea className='lg:h-25 lg:w-90 focus:outline-none' type="text" placeholder='Message'></textarea>
              <div className='lg:h-0.5 lg:w-90 bg-[#ff715b] lg:mt-1'></div>
            </div>
            <button className="lg:text-2xl bg-[#ff715b] text-[#121f28] lg:px-6 lg:py-2 lg:mt-10 "> Submit</button>
          </form>
        </div>
      </div>
    </div>

  )
}

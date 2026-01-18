import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function MobileContact() {
  const navigate = useNavigate("")
    return (
    <div>
        <div className='w-full min-h-screen bg-[#121f28] overflow-x-hidden'>
          <button className='text-3xl text-orange-600 pl-77 pt-10' onClick={()=>navigate("/")}>X</button>
          <form className='text-lg ml-10 pt-30 text-white'>
            <div >
              <input className=' focus:outline-none' type="text" placeholder='Name' />
              <div className='h-0.5 w-70 bg-[#ff715b] mt-3'></div>
            </div>
            <div className='mt-5 '>
              <input className=' focus:outline-none' type="text" placeholder='Email' />
              <div className='h-0.5 w-70 bg-[#ff715b] mt-5'></div>
            </div>
            <div className='mt-5'>
              <input className=' focus:outline-none' type="text" placeholder='Phone Number' />
              <div className='h-0.5 w-70 bg-[#ff715b] mt-5'></div>
            </div>
            <div className='mt-5'>
              <textarea rows={4} cols={27} className=' focus:outline-none' type="text" placeholder='Message'></textarea>
              <div className='h-0.5 w-70 bg-[#ff715b] mt-1'></div>
            </div>
            <button onClick={()=>navigate("/")} className="text-lg bg-[#ff715b] text-[#121f28] px-28 py-2 mt-15 rounded-lg"> Submit</button>
          </form>
        </div>
    </div>
  )
}

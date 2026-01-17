import React from 'react'
export default function Contact() {
  return (
    <div className='h-[33vw] w-full mt-23 '>
      <div className='flex gap-6'>
        <div className='w-38 h-1 bg-[#fb715e] mt-7'></div>
        <p className='text-3xl text-[#fcffff] '>Contacts</p>
      </div>
      <div className='flex '>
        <div className='w-[50%] mt-10 ml-30'>
          <h1 className=' text-6xl text-[#fcffff] leading-20'>Have a project?</h1>
          <h1 className=' text-6xl text-[#fcffff] leading-20 mt-3'>Let's talk!</h1>
          <button className="text-2xl bg-[#ff715b] text-[#121f28] px-6 py-2 mt-15">Submit</button>
        </div>
        <div className='w-[50%] ml-45 mt-10'>
          <form className='text-2xl text-white'>
            <div >
              <input className=' focus:outline-none' type="text" placeholder='Name' />
              <div className='h-0.5 w-90 bg-[#ff715b] mt-5'></div>
            </div>
            <div className='mt-5 '>
              <input className=' focus:outline-none' type="text" placeholder='Email' />
              <div className='h-0.5 w-90 bg-[#ff715b] mt-5'></div>
            </div>
            <div className='mt-5'>
              <input className=' focus:outline-none' type="text" placeholder='Phone Number' />
              <div className='h-0.5 w-90 bg-[#ff715b] mt-5'></div>
            </div>
            <div className='mt-5'>
              <textarea className='h-25 w-90 focus:outline-none' type="text" placeholder='Message'></textarea>
              <div className='h-0.5 w-90 bg-[#ff715b] mt-1'></div>
            </div>


          </form>
        </div>
      </div>
    </div>

  )
}

import React from 'react'

export default function Footer() {
    return (
        <div className='bg-[#18252e] w-full h-57 flex justify-center items-center'>
            <div className='text-center'>
                <h1 className='text-3xl  text-[#fcffff] '>Mahesh Ray</h1>
                <p className='text-2xl leading-15 text-[#b1bac2]'>Create with love &copy;2025 Mahesh Ray All Rights Reserved.</p>
                <div className='flex justify-center text-4xl gap-9'>
                    <div className='bg-[#efefed] w-13 h-12 rounded-full'>
                        <i className="ri-mail-line "></i>
                    </div>
                    <div  className='bg-[#efefed] w-13 h-12 rounded-full '>
                        <i className="ri-github-line"></i>
                    </div>
                    <div  className='bg-[#efefed] w-13 h-12 rounded-full'>
                        <i>in</i>
                    </div>
                </div>
            </div>
        </div>
    )
}

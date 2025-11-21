import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <div className='h-[10vw] w-full bg-black text-2xl text-white '>
        <div className=' leading-10'>
          <ul className='flex justify-center gap-8 pt-7'>
            <li>
              <Link>
                Home
              </Link>
            </li>

            <li>
              <Link>
                Project
              </Link>
            </li>

            <li>
              <Link>
                Home
              </Link>
            </li>

          </ul>
          <p className='pl-[37%]'>&copy;2025 Mahesh Ray All Rights Reserved . </p>
        </div>
      </div>

    </>

  )
}

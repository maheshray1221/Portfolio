import React from 'react'
import { } from "@mui/material";
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <div className=' pt-25'>
      <div className='h-[5.6vw] w-full flex justify-between items-center bg-black fixed top-0 left-0 z-999'>
        <h2 className='text-4xl text-white font-bold ml-3'>Mahesh <span className='text-blue-800'>Ray</span></h2>
        <div >
          <ul className='flex gap-15 text-white text-2xl '>
            <li >
              <NavLink to='about'
                className={''}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to='skill'
                className={''}>
                Skill
              </NavLink>
            </li>

            <li>
              <NavLink to='project'
                className={''}>
                Project
              </NavLink>
            </li>

            <li>
              <NavLink to='experience'
                className={''}>
                Experience
              </NavLink>
            </li>

          </ul>
        </div>
        <div className='text-2xl text-black bg-white rounded-[5px] px-4 py-2 mr-3'>
          <NavLink to='contact' type='button'
            className={''}>
            Contact Me
          </NavLink>
        </div>
      </div>
    </div>
  )
}

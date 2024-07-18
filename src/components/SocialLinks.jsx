import React from 'react'
import {FaGithub} from 'react-icons/fa'
import { BsFillPersonLinesFill } from "react-icons/bs";


const SocialLinks = () => {
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[10px] hover:rounded-md duration-300'>
                <a href='https://github.com/nihasreddy' 
            className='flex justify-between items-center w-full text-white'>
                <>Github <FaGithub size={30} /></></a></li>

            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[10px] hover:rounded-md duration-300'>
                <a href='/Resume.pdf'  //drag resume into public folder then place the link here
            className='flex justify-between items-center w-full text-white' download={true}>
                <>Resume <BsFillPersonLinesFill size={30} /></></a></li>
                
        </ul>
    </div>
  )
}

export default SocialLinks
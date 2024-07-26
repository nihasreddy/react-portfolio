import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50'>
      <div>
        <h1 className='text-5xl font-signature ml-2'>Nihas</h1>
      </div>
      <ul className='hidden md:flex'>

        <li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200'>
          <Link to='home'  smooth={true} offset={-70} duration={500}>Home</Link>
        </li>

        <li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200'>
          <Link to='about'  smooth={true} offset={-70} duration={500}>About</Link>
        </li>

        <li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200'>
          <Link to='portfolio'  smooth={true} offset={-70} duration={500}>Portfolio</Link>
        </li>

        <li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200'>
          <Link to='experience'  smooth={true} offset={-70} duration={500}>Experience</Link>
        </li>

        <li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200'>
          <Link to='contact'  smooth={true} offset={-70} duration={500}>Contact</Link>
        </li>

      </ul>
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray'>

          <li className='px-4 cursor-pointer py-6 text-4xl'>
            <Link onClick={() => setNav(false)} to='home' spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
          </li>

          <li className='px-4 cursor-pointer py-6 text-4xl'>
            <Link onClick={() => setNav(false)} to='about' spy={true} smooth={true} offset={-70} duration={500}>About</Link>
          </li>

          <li className='px-4 cursor-pointer py-6 text-4xl'>
            <Link onClick={() => setNav(false)} to='portfolio' spy={true} smooth={true} offset={-70} duration={500}>Portfolio</Link>
          </li>

          <li className='px-4 cursor-pointer py-6 text-4xl'>
            <Link onClick={() => setNav(false)} to='experience' spy={true} smooth={true} offset={-70} duration={500}>Experience</Link>
          </li>

          <li className='px-4 cursor-pointer py-6 text-4xl'>
            <Link onClick={() => setNav(false)} to='contact' spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default NavBar;

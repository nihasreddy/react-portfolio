import React from 'react'
import Profile from '../assets/profile.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { useTypewriter } from 'react-simple-typewriter';

const Home = () => {
    const [text] = useTypewriter({
        words: ['  Full Stack\nDeveloper', '  UI Designer'],
        loop: {},
        typeSpeed: 130,
        deleteSpeed: 70,
    });

    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full sm:mt-20'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        I'm a
                        <span className='inline-block min-w-[470px]'>
                            <span className='text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500' dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br />') }}></span>
                        </span>
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I have few years of experience in building and designing web applications. Currently, I love to work on web applications using technologies like React, Tailwind, Nodejs, and Mongodb.
                    </p>
                    <div>
                        <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'><MdKeyboardArrowRight size={25} className='ml-1' /></span>
                        </Link>
                    </div>
                </div>
                <div className='relative w-2/3 md:w-full'>
                    <div className='absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl'></div>
                    <img src={Profile} alt='my-pic' className='relative rounded-2xl mx-auto z-10' />
                </div>
            </div>
        </div>
    )
}

export default Home;

import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p  className='text-xl mt-20'>
            Hello! I'm Nihas, a passionate web developer and a recent college graduate. I specialize in building web applications using cutting-edge technologies like React, Tailwind CSS, Node.js, and MongoDB.
            </p>
            <br/>
            <p className='text-xl'>During my academic journey, I honed my skills in creating dynamic and responsive web applications. I enjoy the challenge of bringing ideas to life through code and am constantly exploring new tools and techniques to improve my work.</p>
            <br/>
            <p className='text-xl'>
            Feel free to check out my projects and get in touch if you'd like to collaborate or learn more about my work!
            </p>
        </div>
    </div>
  )
}

export default About
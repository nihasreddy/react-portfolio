import React from 'react'
import chatapp from '../assets/portfolio/chat.png'
import blog from '../assets/portfolio/blog1.png'
import chnms from '../assets/portfolio/chnms1.png'
import figma from '../assets/portfolio/figma.png'
import gallery from '../assets/portfolio/gallery.png'

const Portfolio = () => {

    const portfolios =[
    {
        id:1,
        src:chatapp,
        href:'https://github.com/nihasreddy?tab=repositories',
    },
    {
        id:2,
        src:blog,
        href:'https://github.com/nihasreddy?tab=repositories',
    },   
    {
        id:3,
        src:chnms,
        href:'https://github.com/nihasreddy?tab=repositories',
    },    
    {
        id:4,
        src:figma,
        href:'https://github.com/nihasreddy/Figma_designs',
    },    
    {
        id:5,
        src:gallery,
        href:'https://github.com/nihasreddy?tab=repositories',
    },    
]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                portfolios.map(({id,src,href})=>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt=""  className='rounded-md duration-200 hover:scale-105'/>
                        <div className='flex items-center justify-center'>
                            <a href={href} className='px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-blue-500'>View</a>
                        </div>
                    </div>
                ))
            }
            </div>

        </div>
    </div>
  )
}

export default Portfolio
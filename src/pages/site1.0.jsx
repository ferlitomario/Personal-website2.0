import React from 'react'
import background from '/public/assets/projects/background.jpg'
import Image from 'next/image'
import {RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const property = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/> 
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={background} alt='/'  />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>My personal site1.0</h2>
                <h3>Gatsby</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>My first personal website created with the React framework Gatsby.</p>
               <a href='https://github.com/ferlitomario/ferlitomarioportfolio'
            target='_blank'
            rel='noreferrer'>
                <button className='px-8 py-2 mt-4'>Code</button>
                </a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>

                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill /> javascript </p>
                    </div>
                    <div>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill /> Gatsby </p>
                    </div>
                    <div>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill /> html </p>
                    </div>
                    <div>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill /> Css </p>
                    </div>
                </div>
            </div>
            <Link href='/#projects'> 
           <p className='underline cursor-pointer'>Back</p>
            </Link>

        </div>
    </div>
  )
}

export default property
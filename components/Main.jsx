import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'



const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div >
                <p className='uppercase text-sm tracking-widest text-gray-600'> It s me Mario </p>
                <h1 className='py-4 text-gray-700'>
                    Hi I m <span className='text-[#5651e5]'>Mario</span>
                    </h1>
                    <h1 className='py-2 text-gray-700'>
                        A computer engineering student
                    </h1>
                    <p className='py-4 text-gary-600 max-w-[70%] m-auto'>
                        Piccola descrizione di me stesso 
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <a href='https://www.linkedin.com/in/mario-ferlito-06bba6174/'
                        target='_blank'
                        rel='noreferrer'
                        >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedin />
                        </div>
                        </a>

                        <a href='https://github.com/ferlitomario'
                        target='_blank'
                        rel='noreferrer'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                        </a>

                        <a href='https://twitter.com/ferlitomario99'
                        target='_blank'
                        rel='noreferrer'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineTwitter />
                        </div>
                        </a>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Main
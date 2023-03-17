import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';



export default function Main ({}, props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi,I'm Mario.html",
            "Computer Engineering student.jsx",
            "<and a Junior Front-End Dev/>"
        ],
        loop:true,
        delaySpeed: 2000,
    });

    return (
        <div id='home' className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden snap-center'>
            <BackgroundCircles />
            <div className='h-32 w-32 '>
            <img classname='relative rounded-full  mx-auto' src='/assets/avatar.png' alt='/'></img>
            
            </div>

            <div className='z-20'>
                <h2 className='text-sm uppercase text-red-700 pb-2 tracking-[15px]'>
                    FrontEnd Dev
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'> 
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor="#F7AB0A"/>
            </h1>
            </div>

        </div>
    )
}


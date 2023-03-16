import React from 'react'


const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div  className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600'> descrizione di chi sono io</p>
                <p className='py-2 text-gray-600'>
                Hi, my name is Mario, I m a computer engineering student at the University of Catania,Sicily.<br/> My main passion is coding and I m interested in technologies like<br/> blockchain, web3.0 and computer science in general.
                </p>
                <p className='py-2 text-gray-600'>
                Besides my passion for technology, I also have a great passion for football.<br/> I like to follow matches and play with friends in my free time.
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>
                    Check out my Projects
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img classname='rounded-xl' src='/assets/avatar.png' alt='/' />
            </div>
        </div>
    </div>
  )
}

export default About;

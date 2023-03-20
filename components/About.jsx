import React from 'react'
import Image from 'next/image';


const About = () => {
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/assets/CV-FerlitoMario2.pdf';
        link.setAttribute('download', 'CV-FerlitoMario2.pdf');
        link.setAttribute('type', 'application/pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

  return (
    <div id='about' className='w-full md:h-screen p-2 items-center py-12'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div  className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600'> </p>
                <p className='py-2 text-gray-600'>
                I am a computer engineering student at the University of Catania with a great passion for football, web3.0<br/> and the blockchain. I love the challenge of creating innovative solutions to modern technology challenges,<br/> and I m always looking for new ways to improve user experiences and simplify everyday tasks through code.
                </p>
                <p className='py-2 text-gray-600'>
                My academic training has provided me with a solid foundation of technical knowledge, which I have further enriched through personal projects.<br/> I am driven, creative and proactive, always trying to keep my skills up to date in an ever changing industry.
                </p>
                <button className='items-center p-2' onClick={downloadCV}>Download CV</button>
            </div >
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img classname='rounded-xl' src='/assets/avatar.png' alt='/' />
            </div>
        </div>
    </div>
  )
}

export default About;

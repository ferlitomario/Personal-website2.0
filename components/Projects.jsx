import React from 'react'
import propertyImg from '/public/assets/projects/site1.png'
import background from '/public/assets/projects/background.jpg'
import OpenAI from '/public/assets/projects/IA.png'
import Projectitem from './Projectitem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I ve Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <Projectitem 
                title='NFT-site' 
                backgroundImg={propertyImg}
                projectUrl='/nft'
                />

                <Projectitem 
                title='site1.0' 
                backgroundImg={background}
                projectUrl='/site1.0'
                />

                 <Projectitem 
                title='OpenAI API-image' 
                backgroundImg={OpenAI}
                projectUrl='/ai'
                />
                 

            </div>

        </div>

    </div>
  )
}

export default Projects;




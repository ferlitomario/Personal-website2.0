import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineTwitter} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import { useRouter } from 'next/router'

const Navbar = () => {

    const [nav,setNav] = useState(false);
    const [shadow,setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3')
    const [linkColor,setLinkColor] = useState('#1f2937')
    const router = useRouter()

    useEffect(() => {
         if (
             router.asPath === '/property' ||
             router.asPath === '/nft' ||
            router.asPath === '/site1.0' ||
            router.asPath === '/ai'
           ) {
         setNavBg('transparent');
           setLinkColor('#ecf0f3');
         } else {
             setNavBg('#ecf0f3');
            setLinkColor('#1f2937');
           }
         }, [router]);


    const handleNav = () => {
        setNav (!nav);
    }

    useEffect(() => {
        const handleShadow = () => {
            if(window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false )
            }
        }
        window.addEventListener('scroll', handleShadow);

    }, [])


  return (
    <div style={{backgroundColor: `${navBg}`}}
     className={
        shadow 
    ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300' 
    : 'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 float-right'>

            <Link href='/'>
            <div className='flex items-center '>
            <Image className='rounded-lg' src='/assets/MF.png' alt='/' width='50' height='50'/>
            <h3 className='pl-2 font-bold '>Mario-Ferlito | dev</h3>
            </div>
            </Link>
            
            
        <div>
            <ul style={{colr: `${linkColor}`}}className='hidden md:flex '>
                <Link href='/#home' scroll={false}> 
                <li className='ml-8 text-base uppercase hover:border-b font-serif'>HOME</li>
                </Link>

                <Link href='/#about' scroll={false}> 
                <li className='ml-8 text-base uppercase hover:border-b font-serif'>About</li>
                </Link>

                <Link href='/#skills' scroll={false}> 
                <li className='ml-8 text-base uppercase hover:border-b font-serif'>Skills</li>
                </Link>

                <Link href='/#projects' scroll={false}> 
                <li className='ml-8 text-base uppercase hover:border-b font-serif'>Projects</li>
                </Link>
            </ul>
            <div onClick={handleNav} className='md:hidden '>
                <AiOutlineMenu size={25}/> {/* ReactIcons icon X*/}
            </div>
        </div>
        </div>

        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/10' : ''}>
            <div className={nav
             ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#fdfbfb] p-10 ease-in duration-500'
             : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
             }
             >
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Image className='rounded-full' src='/../public/assets/MF.png' width='70' height='35' alt='/'  />
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='text-gray-600 border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4 '> Dashboard</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                    <Link href='/#home' scroll={false}>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                    </Link>

                    <Link href='/#about' scroll={false}>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
                    </Link>

                    <Link href='/#skills' scroll={false}>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
                    </Link>

                    <Link href='/#projects' scroll={false}>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
                    </Link>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#5651e5]'>Join Me on Social</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%] '>
                            <a href='https://www.linkedin.com/in/mario-ferlito-06bba6174/'
                        target='_blank'
                        rel='noreferrer'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedinIn />
                            </div>
                            </a>

                            <a href='https://github.com/ferlitomario'
                        target='_blank'
                        rel='noreferrer'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub />
                            </div>
                            </a>

                            <a href='https://twitter.com/ferlitomario99'
                        target='_blank'
                        rel='noreferrer'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <AiOutlineTwitter/>
                            </div>
                            </a>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
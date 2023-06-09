import Head from 'next/head'
import Main from '../../components/Main'
import About from '../../components/About'
import Skills from '../../components/Skills'
import Projects from '../../components/Projects'



export default function Home() {
  return (
    <div className='snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Mario-Ferlito | Developer</title>
        <meta name='description' content='Generated by create next app' />
        <link rel="icon" href="/assets/MF.png" />
      </Head>
      
      <Main />
   
      <About />
      <Skills />
      <Projects />
     
    </div>
  )
}

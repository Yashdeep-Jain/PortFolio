import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import developer1 from '../../public/images/profile/Developer1.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Yashdeep Jain</title>
        <meta name="description" content="Yashdeep Jain" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={developer1} alt="YashdeepJain" className='w-full h-auto'
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className='!text-6xl !text-left'/>
              <p className='my-4 text-base font-medium'>
              As a skilled Software developer, I am dedicated to turning ideas into innovative applications. 
              Explore my latest projects and articles, showcasing my expertise.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/Resume.pdf" target={"_blank"}
                className='flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light
                '>
                  Resume <LinkArrow className={"w-6 ml-1"}/>
                  </Link>
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=yashuofficial7@gmail.com&su=Reaching%20Out" target={"_blank"}
                className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light'
                >Contact</Link>
              </div>
            </div>
          </div>          
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24'> 
          <Image src={lightBulb} alt="YashdeepJain" className='w-full h-auto'  />
        </div>
      </main>
    </>
  )
}

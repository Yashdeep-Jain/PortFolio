import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import githubprofile from "../../public/images/articles/githubprofile.png"
import { motion } from 'framer-motion'

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return(
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12
        '>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
        rounded-br-3xl
        '/>
            <Link href={link} target='_blank'
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='MY-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
            <div className='mt-2 flex items-center'>
            <Link href={github} target='_blank' className='w-10'> <GithubIcon />{" "} </Link>
            <Link href={link} target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark
            '
            >Visit Project</Link>

            </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light dark:bg-dark dark:border-light p-6 relative
        '>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
        rounded-br-3xl dark:bg-light
        '/>
           <Link href={link} target='_blank'
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light'>{title}</h2>
            </Link>
            <div className='w-full mt-2 flex items-center justify-between'>
            <Link href={link} target='_blank'
            className='text-lg font-semibold underline'
            >Visit</Link>
            <Link href={github} target='_blank' className='w-8'> <GithubIcon />{" "}
            </Link>
            </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>
                YashdeepJain | Projects Page
            </title>
            <meta name='description' content='any description' />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Imagination Trumps Knowledge!" 
                className='mb-16 '
                />

              <div className='grid grid-cols-12 gap-24 gap-y-32'>
                <div className='col-span-12'>
                    <FeaturedProject
                    title="RealTime Chat Application"
                    img={githubprofile}
                    summary=" Developed a scalable real-time chat application deployed on Aiven cloud infrastructure, utilizing Redis, Kafka, 
and PostgreSQL.Implemented WebSocket for real-time communication, which might achieve 200ms message latency.
 Utilized Redis Pub-Sub for message broadcasting, can handle up to 1000 messages per second and integrated
Kafka for high-throughput data handling."
                    link="https://github.com/Yashdeep-Jain/RealTimeChat"
                    github="https://github.com/Yashdeep-Jain/RealTimeChat"
                    type="Featured Project"
                    />
                </div>
                <div className='col-span-12'>
                    <FeaturedProject
                    title="MicroServices Project"
                    img={githubprofile}
                    summary=" Created a microservices project showcasing efficient communication between 3 microservices: User Service, 
Hotel Service, and Rating Service, employing best practices. Implemented User Service for client interaction via API gateway secured with OKTA and utilized configuration 
service for configuration management."
                    link="https://github.com/Yashdeep-Jain/MicroServicesProject"
                    github="https://github.com/Yashdeep-Jain/MicroServicesProject"
                    type="Featured Project"
                    />
                </div>

                <div className='col-span-6'>
                <Project
                    title="Kafka In One Repo"
                    img={githubprofile}
                    link="https://github.com/Yashdeep-Jain/KakfaInOneRepo"
                    github="https://github.com/Yashdeep-Jain/KakfaInOneRepo"
                    type="Project"
                    />
                </div>
                <div className='col-span-6'>
                <Project
                    title="Junit"
                    img={githubprofile}
                    link="https://github.com/Yashdeep-Jain/Junit"
                    github="https://github.com/Yashdeep-Jain/Junit"
                    type="Project"
                    />
                </div>
                
              </div>

            </Layout>
        </main>
    </>
  )
}

export default projects
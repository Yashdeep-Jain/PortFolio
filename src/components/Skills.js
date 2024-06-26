import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name, x, y}) => {
  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
    py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
        '
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x:x,y:y, transition:{duration:1.5}}}
        viewport={{once:true}}
        >
        {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light
        '
        whileHover={{scale:1.05}}
        >
          Skills
        </motion.div>
        <Skill name="Java" x="-5vw" y="-21vw"/>
        <Skill name="Spring Boot" x="10vw" y="5vw"/>
        <Skill name="Kafka" x="-5vw" y="-12vw"/>
        <Skill name="Redis" x="-12vw" y="2vw"/>
        <Skill name="MicroServices" x="-28vw" y="10vw"/>
        <Skill name="Azure" x="20vw" y="2vw"/>
        <Skill name="Computer Network" x="28vw" y="-10vw"/>
        <Skill name="Database" x="5vw" y="17vw"/>
        <Skill name="Problem Solving" x="-20vw" y="-10vw"/>
        <Skill name="Angular" x="10vw" y="-15vw"/>
      </div>
    </>
  )
}

export default Skills;
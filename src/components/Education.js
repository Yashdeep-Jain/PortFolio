import React, { useRef } from 'react'
import { motion,useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type, time, place, info}) => {
    const ref = useRef(null);
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex-col items-center justify-between'>
        
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>
                {type}
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                {time} | {place}
            </span>
            <p className='font-medium w-full'>
                {info}
            </p>
            </motion.div>
    </li>
    );
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Education
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>

<motion.div
style={{scaleY: scrollYProgress}} 
className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light' />

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                type="Bachelor Of Technology in CSE"
                time="2018-2022"
                place="Ram Dayal Engineering College ( R.D.E.C ) , U.P , India"
                info="Relevant courses included Data Structures and Algorithms, Computer Networks, Compiler, Operating System and Artificial 
                Intelligence."
                />

                <Details 
                type="Higher Secondary School"
                time="2018"
                place="Dayawati Modi Public School ( D.M.P.S ) , U.P , India"
                info="Higher Secondary School C.B.S.E Course (PCM)"
                />

                <Details 
                type="High School"
                time="2016"
                place="Dayawati Modi Public School ( D.M.P.S ) , U.P , India"
                info="High School C.B.S.E Course"
                />
            </ul>
        </div>
    </div>
  )
}

export default Education
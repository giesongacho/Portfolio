import React, {useState} from 'react'
import Profile from '../assets/images/prof.png'
// import Contact from './Contact'
import {motion} from 'framer-motion'
function About() {
  const [contact,setContact] = useState(false)
  
  return (
    <>
    {/* small-medium devices  */}
    <div className="md:hidden dark:bg-slate-900 h-screen grid grid-rows-6 overflow-hidden">
    <div className="row-start-2 h-[20rem] flex justify-center">
    <motion.img 
    initial={{y:100,opacity:0}}
    whileInView={{y:0, opacity:1, transition:{delay:0.2,type:"spring", stiffness:20}}}
    viewport={{once: true}}
    src={Profile} alt="profile" className="h-full border-none rounded-full outline outline-2 outline-offset-2 outline-slate-300"/>
    </div>

    <div className="row-start-5 px-5 h-[10rem] overflow-hidden">
    <motion.p 
    initial={{y:20, opacity:0}}
    viewport={{once: true}}
    whileInView={{y:0,opacity:1, transition:{delay:1, type:"spring", stiffness:20}}}
    className="dark:text-white text-left text-bold text-black">Hi i'm <b>Gieson Gacho</b> im currenty working as <b>Production Specialist</b> , and i dont have experience yet about web development but i have skillset about web development especially front end. Hope you would like to see my skillset below Thank you. </motion.p>
    </div>
    
    <div className="row-start-6 h-full text-white flex items-center justify-center">
      <motion.button onClick={()=>setContact(!contact)} className=" border px-10 py-3  mt-10 rounded-md bg-slate-900"
      whileHover={{scale: 1.1, opacity:0.8,transition:{ease: "linear", duration:0.1}}}
      >Touch me</motion.button>
    </div>
</div>
     {/* large devices  */}
     <div className="hidden dark:bg-slate-900 md:h-screen md:flex flex-col justify-center items-center md:items-center">
        <div className="flex items-center justify-evenly h-3/4 w-full  mx-5 px-5">
            <motion.img
            initial={{y:50,opacity:0}}
            whileInView={{y:0, opacity:1,transition:{type: "tween", duration: 1, delay:0.2}}}
            viewport={{once: true, amount: 0.5}}
            src={Profile} alt="profile" className="h-[22rem] w-[22 rem] rounded-full outline outline-2 outline-offset-2 outline-slate-300"/>
            <motion.p 
             initial={{y:-50,opacity:0}}
             whileInView={{y:0, opacity:1,transition:{type: "tween", duration: 1, delay:0.3}}}
             viewport={{once: true, amount: 0.5}}
            className="dark:text-white text-left text-[1.3rem] text-bold text-black ml-5 shadow-2xl p-2">Hi i'm <b>Gieson Gacho</b> im currenty working as <b>Production Specialist</b> , and i dont have experience yet about web development but i have skillset about web development especially front end. Hope you would like to see my skillset below Thank you. </motion.p>
        </div>
        <div className="w-full flex justify-center">
          <motion.button 
           initial={{opacity:0}}
           whileInView={{opacity:1,transition:{type: "tween", duration: 1, delay:0.5}}}
           whileHover={{scale:1.1,opacity:0.5,transition:{ease: "easeIn",duration:0.1}}}
           viewport={{once: true, amount: 0.5}}
          className="dark:border text-white text-[1.2rem] text-bold rounded-md px-10 py-2 bg-slate-900">Touch me</motion.button>
        </div>
      </div>
    {/* {contact && <Contact />} */}
</>
  

  )
}

export default About
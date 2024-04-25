
import React from 'react'
import {useRef,useEffect} from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { DiJqueryLogo } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import {motion} from 'framer-motion'

function Skill() {
  const skillItems = [
    {icon: <FaHtml5 />,name: 'HTML', path: 'FaHtml5'},
    {icon: <FaCss3Alt  />, name: 'CSS', path: 'FaCss3Alt'},
    {icon: <SiTailwindcss />, name: 'TAILWIND', path: 'SiTailwindcss'},
    {icon: <IoLogoJavascript />, name: 'JAVASCRIPT', path: 'IoLogoJavascript'},
    {icon: <DiJqueryLogo />, name: 'JQUERY', path: 'DiJqueryLogo'},
    {icon: <FaReact />, name: 'REACT', path: 'FaReact'},
    {icon: <FaGitSquare />, name: 'Git', path: 'FaGitSquare'},

  ]
  
  return (
    <div className="dark:bg-slate-900 h-screen grid grid-rows-7 bg-slate-200 bg-white ">
      <div className="row-span-1 flex items-center  justify-center ">
        <motion.h2 
        initial={{y:100,opacity:0}}
        whileInView={{y:0,opacity:1,transition:{delay:0.1,duration:0.5, ease:"easeIn"}}}
        viewport={{once:true}}
        className="shadow-xxl tracking-widest text-3xl dark:text-white font-bold decoration underline">Skills</motion.h2>
      </div>

      <div className="row-span-7 flex flex-col items-center justify-center gap-y-2 ">
      {skillItems.map((value,index)=>{
            const ramainder = index % 2;
            return(
              <>
              {ramainder == 0 ? 
              <motion.div key={index} className=" relative dark:text-white dark:border-white border border-1 rounded-md border-slate-800 w-1/2 flex flex-col justify-center items-center hover:opacity-50 transition duration-300 overflow-hidden"
              initial={{x:-200,opacity:0}}
              whileInView={{x:0,opacity:1,transition:{delay:0.2, ease: "easeIn"}}}
              viewport={{once: true}}
              whileHover={{scale:1.1,boxShadow:"5px 3px 5px gray",transition:{duration:0.1, ease:"easeInOut"}}}
              >
                <i className="text-5xl">{value.icon}</i>
                <span className="text-1xl">{value.name}</span>
              </motion.div> 
            : 
              <motion.div key={index} className=" relative dark:text-white dark:border-white border border-1 rounded-md border-slate-800 w-1/2 flex flex-col justify-center items-center hover:opacity-50 transition duration-300"
              initial={{x:200,opacity:0}}
              whileInView={{x:0,opacity:1,transition:{delay:0.2, ease: "easeIn"}}}
              viewport={{once: true}}
              whileHover={{scale:1.1,boxShadow:"5px 3px 5px gray",transition:{duration:0.1, ease:"easeInOut"}}}
              >
                <i className="text-5xl">{value.icon}</i>
                <span className="text-1xl">{value.name}</span>
              </motion.div>}
              </>
            )
      })}
      </div>
      
    </div>
  )
}

export default Skill
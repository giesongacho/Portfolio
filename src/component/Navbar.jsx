import React from 'react'
import {useState} from 'react';
import { MdOutlineMenu } from "react-icons/md";
import { LuSunMoon } from "react-icons/lu";
import { LuMoonStar } from "react-icons/lu";
import {motion} from 'framer-motion';
function Navbar() {
    const listItem =[
        {link: "Home", path:"home"},
        {link: "Skill", path: "skill"},
        {link: "Education", path: "education"},
        {link: "Project", path: "project"},
      ]
    const [menu,setMenu]  = useState(false)
    const [dark,setDark] = useState(false)
  return (
    <nav className="z-50 h-[10vh] bg-slate-900 flex justify-between fixed top-0 w-screen ">
    <div>
      <h2 className="h-full mx-5 flex justify-center items-center text-[1.2rem] lg:text-[2rem] md:text-[1.5rem] text-white font-bold">G-works</h2>
    </div>
    
    <div className="flex text-white items-center gap-x-5 mx-5">
    <span onClick={()=>setDark(!dark)} className="text-2xl text-orange cursor-pointer hover:opacity-50">
        {dark ? <LuSunMoon /> : <LuMoonStar /> }
        {dark ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark') }
    </span>
    <MdOutlineMenu onClick={()=>setMenu(!menu)}  className="md:hidden text-3xl cursor-pointer hover:opacity-50"/>
    <div className="hidden md:flex md:gap-x-5 text-[1.2rem] font-semibold lg:text-[1.3rem]">
      {listItem.map((list)=>{
        return(
          <ul>
            <li><a href="">{list.link}</a></li>
          </ul>
        )
      })}
    </div>
    </div>

    {/*Sidebar*/}

    {menu && <motion.div
    initial={{x:-100}}
    animate={{x:0,transition:{type:"tween"}}}
    className="fixed top-0 h-screen bg-slate-900 w-1/2 grid grid-rows-10 z-index-50">
      <h2 className="text-3xl font-bold flex items-center justify-center text-white border-b-2 border-slate-500">G-works</h2>
      <ul 
      className="row-span-5 flex flex-col items-center justify-evenly text-white font-bold">
      {listItem.map((value,id)=>{
          return(
            <li className=" hover:opacity-50 w-full text-center" key={id.path}><a href="#">{value.link}</a></li>
          )
      })}
    
    </ul></motion.div>}
    
     
   </nav>
  )
}

export default Navbar;
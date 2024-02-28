import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';

import {styles} from '../style';
import {navLinks} from '../constants'
import {logo, menu, close} from '../assets';

const Navbar = () => {
  const [active, setActive] = useState(' ')
  return (
   <nav 
   className = {`${styles.paddindX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
    <div className = "w-full flex justify-between
     items-center max-w-7xl mx-auto">
      <Link
      to = "/"
      className= "flex items-center gap-2"
      onClick = {()=> {
        setActive("");
        window.scrollTo(0,0);
      }}
      >
      <img src = {logo} alt = "logo" className = "w-9
       h-9 object-contain" />
      <p classname = "text-white text-[18px] font-bold cursor-pointer">Robert <span className = "sm:block hidden">| Portfolio /robertle982@gmail.com</span></p>
      </Link>
      <p className = "text-red-500"> asdsa</p>
    </div>
   </nav>
  )
}

export default Navbar
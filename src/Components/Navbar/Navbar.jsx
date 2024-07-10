import React, { useRef, useState } from 'react'
import "./Navbar.css";
import logo1 from "/logos/VEBZART LOGO PNG.png";
import { GiHamburgerMenu } from "react-icons/gi";
import SampleSvg from '../SampleSvg.svg';
import {Link } from "react-router-dom"
function Navbar() {
    const[menu,setMenu]=useState("");
    const menuRef=useRef();
    const dropDownToggle=(e)=>{
        menuRef.current.classList.toggle("navOptions-visible");
        e.target.classList.toggle("open");
    }
  return (
    <div className='navbarMain'>
        <div className='navbar'>
        
        
        <div className='navBrand'>
           <img src={SampleSvg} />
        </div>
        <div ref={menuRef} className='navOptions'>
        <ul ref={menuRef} className='navMenu'>
            <li onClick={()=>{setMenu("home")}}>Home{menu==="home"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("about")}}>about{menu==="about"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("work")}}><Link to="profileSite/work" style={{textDecoration:"none",color:"white"}}>work{menu==="work"?<hr />:<></>}</Link></li>
        </ul>
        
            <button className='navLogin'>Login</button>
           
     

        </div> <GiHamburgerMenu className="dropDown" size="30px" onClick={dropDownToggle}/>
       

    </div>
     
    </div>
  )
}

export default Navbar

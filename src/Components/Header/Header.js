import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";
import { FiMenu, FiX } from "react-icons/fi";


const Header=()=>{
    const [open,setopen]=useState(false);
    const handleclick =()=>setopen(!open);
    const closemenu=()=>setopen(false);
    return(
    <div className="header">
          <div className="header_left">
            <h1>Develop<span>er</span></h1>
        </div>
        <div onClick={handleclick} className="navicons">
            {open? <FiX/>:<FiMenu/>}
   </div>
        <div className={open ? "header_right active":"header_right"}>
                   
            <Link to="about" smooth={true} duration={500}>
                <h4>About me</h4>
            </Link>   
           
            <Link to="skills" smooth={true} duration={500}>
                <h4>Skills</h4>
            </Link>
            <Link to="project" smooth={true} duration={500}>
                <h4>Projects</h4>
            </Link>
            <Link to="exp" smooth={true} duration={500}>
                <h4>Experience</h4>
            </Link>
            <Link to="education" smooth={true} duration={500}>
                <h4>Education</h4>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
                <h4>Contact</h4>
            </Link>
          
           
    </div>
    </div>
)}
export default Header;
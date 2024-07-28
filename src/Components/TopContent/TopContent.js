import React from "react";
import { Link } from "react-scroll";
import "./TopContent.css";
import resume from "../CV/CV.pdf"
const TopContent=()=>{
    return(
<div className="topcontent">
    <div className="topcontent_container">
        <h1>Mr Premkumar</h1>
        <p>A professional web and app development</p>
        <a href={resume} download="resume">
            <button className="topcontent_downloadbutton">Download CV</button>
        </a>
        <Link to="project" smooth={true} duration={500}>
            <button className="topcontent_workbutton">My work</button>
        </Link>
        
    </div>
</div>
    )
}
export default TopContent;
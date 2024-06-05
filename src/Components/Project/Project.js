import React, { useState } from "react";
import "./Project.css";

const Project=({img,title,descr,link})=>{
    const[show,setshow]=useState(false);
    return(
        <a href={link}>
<div className="project" onMouseEnter={()=>setshow(true)} onMouseLeave={()=>setshow(false)}>
{
show ? (
    <div className="project_content"> 
        <h1>{title}</h1>
        <p>{descr}</p>
    </div>
):
(

    <img src={img} alt=""/>
)

}

</div>

        </a>
    )
}
export default Project;
import React from "react";
import Project from "../Project/Project";
import { Element } from "react-scroll";
import "./ProjectContainer.css";



const ProjectContainer=()=>{
    const client_projects=[{img:"./image/Capture.jpg",title:"Developed an E-commerce website for a Dress shop",descr:"Developed an e-commerce website for a dress shop using HTML, CSS, JavaScript, and React.js.",link:"http://localhost:3000/Home"},
    {img:"./image/Capture1.JPG",title:"To-Do List",descr:"Designed a responsive To-Do List web application using HTML,CSS, and JavaScript,Implemented CRUD operations* (Create, Read, Update, Delete) to manage tasks effectively, ensuring smooth user interactions.",link:"http://localhost:3000/"}
      ]
    return(
<Element className="projectcontainer" id="project">
    <h1>Projects</h1>
    

    <p>Here are some projects which i done for making lives of people easy</p>
    <div className="projectcontainer_projects">
{client_projects.map((item,index)=>{
return(
    <>
    
    <Project key={index} img={item.img} title={item.title} descr={item.descr} link={item.link}/>
    </>
)
})}

</div>
</Element>
    )
}
export default ProjectContainer;
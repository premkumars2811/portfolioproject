import React from "react";
import Project from "../Project/Project";
import { Element } from "react-scroll";
import "./ProjectContainer.css";



const ProjectContainer=()=>{
    const client_projects=[
        {img:"./image/Capture3.JPG",title:"Techniques to Reduce Electricity Bill",descr:"This project is helps to calculate their electricity bills and provides tips for reducing electricity consumption. The application includes a custom electricity bill calculator and an electricity unit per rate table.",link:"https://electricitybillcalculator.vercel.app/"},
        {img:"./image/Capture 2.JPG",title:"A Django-Based To-do list application",descr:"Created a basic task with fields like title and done/not done status.Added views to handle showing, adding, editing, and deleting tasks.Used forms to let users add or update tasks.",link:"http://localhost:3000/Home"},
        {img:"./image/Capture.jpg",title:"Developed an E-commerce website for a Dress shop",descr:"Developed an e-commerce website for a dress shop using HTML, CSS, JavaScript, and React.js.",link:"https://dressshopwebsite-q6oi.vercel.app"},
        {img:"./image/Capture1.JPG",title:"To-Do List",descr:"Designed a responsive To-Do List web application using HTML,CSS, and JavaScript,Implemented CRUD operations* (Create, Read, Update, Delete) to manage tasks effectively, ensuring smooth user interactions.",link:"https://todolist-two-henna.vercel.app/"}
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
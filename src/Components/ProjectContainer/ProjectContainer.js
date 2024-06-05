import React from "react";
import Project from "../Project/Project";
import { Element } from "react-scroll";
import "./ProjectContainer.css";
const ProjectContainer=()=>{
    const client_projects=[{img:"./Project/logo.PNG",title:"pro",descr:"jnjnjnn",link:"kkk"},
    {img:"./Picture/logo.PNG",title:"prodkmdfdfdfdfod",descr:"jnjnjnniddnkdkfikdfidnvkcvn dkckdfkdjfkdkfdkfdkfdkfjdkfdkfkdfdfnnkdckcdcnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",link:"kkk"},
    {img:"./Picture/logo.PNG",title:"pro",descr:"jnjnjnn",link:"kkk"},
    {img:"./Picture/logo.PNG",title:"pro",descr:"jnjnjnn",link:"kkk"}]
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
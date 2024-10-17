import React from "react";
import { Element } from "react-scroll";
import LinearProgress from "@mui/material/LinearProgress";
import "./SkillContainer.css";
import skill from "../../Picture/com.jpg";



const SkillContainer=()=>{
    return(

    <Element className="skillcontainer" id="skills">
<div className="skillcontainer_img">
    <img src={skill} alt=""/>
</div>
<div className="skillcontainer_text">
    <h2>SKILLSET</h2>
<div className="skillcontainer_skillset" >
    <h5>HTML</h5>
    <div className="skillcontainer_slider skillcontainer_slider1">
<LinearProgress variant="determinate" value={88} />


    </div>
</div>

<div className="skillcontainer_skillset" >
    <h5>CSS</h5>
    <div className="skillcontainer_slider skillcontainer_slider2">
    
<LinearProgress variant="determinate" value={70} />

    </div>
</div>
<div className="skillcontainer_skillset" >
    <h5>JAVASCRIPT</h5>
    <div className="skillcontainer_slider skillcontainer_slider3">
   
<LinearProgress variant="determinate" value={65} />

    </div>
</div>
<div className="skillcontainer_skillset" >
    <h5>REACT JS</h5>
    <div className="skillcontainer_slider skillcontainer_slider4">
    
<LinearProgress variant="determinate" value={55} />

    </div>

</div>
<div className="skillcontainer_skillset" >
    <h5>PYTHON</h5>
    <div className="skillcontainer_slider skillcontainer_slider5">
   
<LinearProgress variant="determinate" value={79} />

    </div>
</div>
<div className="skillcontainer_skillset" >
    <h5>SQL</h5>
    <div className="skillcontainer_slider skillcontainer_slider6">
   
<LinearProgress variant="determinate" value={67} />

    </div>
</div>
</div>

    </Element>

    )
}
export default SkillContainer;
import React from "react";
import { Element } from "react-scroll";
import "./Education.css";
const data=[{year:"2018-2022",degree:"Bachelor of Engineering-ECE",name:"University college of Engineering Kancheepuram",mark:"7.9 CGPA"},
{year:"2017-2018",degree:"Higher Secondary School",name:"ERK Higher Secondary School",mark:"87%"},
{year:"2015-2016",degree:"Secondary school Leaving certificate",name:"ERK Higher Secondary School",mark:"93%"}]
const Education=()=>{
    return(
<Element className="education">
        <h1>Education</h1>
        <div className="education_container">
   { data.map((item)=>{
        return(
            <div className="markdetails">
                <div className="year">
            <h1>{item.year}</h1>
            </div>
            <div className="degree">
            <p>{item.degree}</p>
            </div>
            <div className="name">
            <span>{item.name}</span>
            </div>
            <div className="mark">
            <h5>{item.mark}</h5>
            </div>
            </div>
        
            
        )
    })
}
</div>
</Element>
    )
}
export default Education;
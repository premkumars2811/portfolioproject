import React from "react";
import { Element } from "react-scroll";
import "./Experience.css"
const Experience=()=>{
    return(
<Element className="exp">
<h1 className="big-4">Experience</h1>
<div className="experience-details">
<div className="underline">

</div> <br></br>

    
<div className="col-md-6">
    <div className="resume-wrap">
        <span className="date">May 2024-Present</span>
        <h2>Full Stack Developer Intern</h2>
        <span className="position">Besant Technologies,Chennai</span>
        <ul className="details">
            <li>As a Full Stack Developer(Python) with 6 months of internship experience at Besant Technologies,I possess hands-on skills in HTML,CSS,JavaScript,React.js,Python,Django,and SQL</li>
            <li>Worked with database like MySQL
            </li>
            <li>Debugged and fixed bugs in existing applications.</li>
            <li>Utilized Git for version control and collaborated with team members on project tasks</li>
        </ul>
    </div>

    
</div>

<div className="col-md-6">
    <div className="resume-wrap">
        <span className="date">Sep 2022-Oct 2023</span>
        <h2>Network Operations Associate</h2>
        <span className="position">Ust global technology,Chennai</span>
        <ul className="details">
            <li>Nokia Networks-under payroll of Ust global technology</li>
            <li>Operation and Maintenance support for Metro train Melbourne in Australia
            </li>
            <li>Handling shift Operarions as a Service Desk  Engineer and Technical support in Telecom</li>
            <li>Analyze the alarms and raising trouble ticket within SLA</li>
            <li>Responsible for Daily alarms and incident Management Reports</li>
        </ul>
    </div>

    
</div>
</div>

</Element>
    )
}
export default Experience;
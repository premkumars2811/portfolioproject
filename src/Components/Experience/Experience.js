import React from "react";
import { Element } from "react-scroll";
import "./Experience.css"
const Experience=()=>{
    return(
<Element className="exp">
<h1 className="big-4">Experience</h1>
<div className="underline">

</div> <br></br>
<div className="col-md-6">
    <div className="resume-wrap">
        <span className="date">09/2022-10/2023</span>
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

</Element>
    )
}
export default Experience;
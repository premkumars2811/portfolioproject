import React from "react";
import { Element } from "react-scroll";
import { IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import "./Contact.css";

const Contact=()=>{
    return(
        <Element className="contact" id="contact">
            <h1>Contact</h1>
            <div className="contact_container">
               <a href="mailto:premkumars2811@gmail.com"> <p>Email: <span>premkumars2811@gmail.com</span></p></a>
                <div className="contact_icons">
                
<IconButton>
<a href="tel:+91 6379178730">  <PhoneIcon/><p1>+91 6379178730</p1></a>
</IconButton>

</div>           
                <div className="contact_icons">
               

<IconButton>
<a href="https://www.linkedin.com/in/s-premkumar/"><LinkedInIcon/></a>
</IconButton>

<a href="https://www.instagram.com/premkumars2811?igsh=MWtuYmdwdWNnZTdwMQ==">
<IconButton>
    <InstagramIcon/>
</IconButton>
</a>
<a href="https://www.facebook.com/profile.php?id=100027105826450&mibextid=ZbWKwL">
<IconButton>
    <FacebookIcon/>
</IconButton>
</a>
                </div>
            </div>
        </Element>
    )
}
export default Contact;
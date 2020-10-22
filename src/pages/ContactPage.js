import React from 'react';
import image from '../assets/images/images.png';

function ContactPage(props) {

   return(
       <div>
           <a href="mailto:emmalare09@gmail.com">
           <img id="Contact" src={image} alt="Contact Me" width="100" height="100"></img>
           </a>
           <p id="Text">Click on icon above to get in contact with me</p>
     
       </div>
       
   )

}

export default ContactPage;
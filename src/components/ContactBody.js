import React from 'react';
import ReactContactForm from 'react-mail-form';

import axios from 'axios';


function ContactBody() {


    return (
        <div>

             <div className="bodyDiv">
                <img src="legal_image.jpg" alt="Italian Trulli" className="landingImage"/>
                    <div className="intraMainPicText">
                        <div className="contactSpacing">

                        </div>
                            <p className="whiteTextBackground"> 
                            <br/>
                            Please feel for to drop me a line at 
                            
                            <br/>
                                Rasheda.Armstrong@gmail.com
                                <br/>
                            my Phone number is 123-123-1234 <br/>
                            Serious Inquiries only
                            </p>
                        
                    </div>
             </div>
              
            
              
        </div> 
    )
}

export default ContactBody;

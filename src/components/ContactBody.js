import React from 'react';
import ReactContactForm from 'react-mail-form';
 
import axios from 'axios';


function ContactBody() {
    return (
        <div>
             <div className="bodyDiv">
                <img src="legal_image.jpg" alt="Italian Trulli" className="landingImage"/>
                    <div className="intraMainPicText">
                        <p className="whiteTextBackground"> 
                            <br/>
                             <form>
                                 <label>
                                     First Name:
                                     <input type="text" name="first_name" />                                    
                                 </label>
                                 <label>
                                     Last Name:
                                     <input type="text" name="last_name" />                                    
                                 </label>
                                 <label>
                                     email:
                                     <input type="text" name="first_name" />                                    
                                 </label>
                                 <label>
                                     Describe Issue:
                                     <textarea name="description" />                                    
                                 </label>
                                 <br/> 
                                 <input type="submit" value="submit" />

                             </form>
                        </p>
                        
                    </div>
             </div>
              
           
              
        </div>
    )
}

export default ContactBody;

 
import ReactContactForm from 'react-mail-form';
import React, { Component } from 'react';
import axios from 'axios';


class ContactBody extends Component {




    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    }
    formSubmit = (e) => {
        e.preventDefault()
      
        this.setState({
            buttonText: '...sending'
        })
      
        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        
        axios.post('API_URI', data)
        .then( res => {
            this.setState({ sent: true }, this.resetForm())
        })
        .catch( () => {
          console.log('Message not sent')
        })
      }
      resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
            buttonText: 'Message Sent'
        })
    }
render(){
    return (
            <div>
                <div className="bodyDiv">
                    <img src="legal_image.jpg" alt="Italian Trulli" className="landingImage"/>
                        <div className="intraMainPicText">
                            <p className="whiteTextBackground"> 
                                <br/>
                                <form onSubmit={ (e) => this.formSubmit(e)}>
                                    <label>
                                         Name:
                                        <input type="text" name="name" 
                                        onChange={e => this.setState({ name: e.target.value})} name="name" 
                                        value={this.state.name}
                                        />                                    
                                    </label>
                                    <br/>
                                    <label>
                                        email:
                                        <input type="email" name="email" 
                                        onChange={(e) => this.setState({ email: e.target.value})} 
                                        name="email"
                                        required value={this.state.email}
                                        />                                    
                                    </label>
                                    <label>
                                        Describe Issue:
                                        <textarea   onChange={e => this.setState({ message: e.target.value})}
                                        name="message" value={this.state.message} required />                                    
                                    </label>
                                    <br/> 
                                    <button type="submit">{ this.state.buttonText }</button>

                                </form>
                            </p>
                            
                        </div>
                </div>
                
            
                
            </div>
        )
    }
}

export default ContactBody;

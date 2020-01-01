import React from 'react';
import './AddNewContact.css';
import axios from 'axios'



export class AddNewContact extends React.Component{

    ///////////   initialize state in the constructor  ////////////
        constructor(props){
            super(props)
            this.state = {name : '',firstname:'', surname:'',phone_number:''}
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleChange(event) {
            this.setState({value: event.target.value});
        }
        
        handleSubmit(event) { 
            console.log(this.state)
            event.preventDefault();
            const ContactDetails={name:this.state.firstname+" "+this.state.surname, phone_number:this.state.phone_number}
            
            axios.post("https://code-catalist-phone-book-rails.herokuapp.com/contacts",ContactDetails)
            .then(response =>{
                this.props.history.push('/')
                console.log(response)
            })
        }

    
        render(){
    
    
            return(
                
                    <div className="container">
                        <div className="div1">
                            <div className="user-image">
                                <i className="fas fa-camera fa-10x"></i>
                            </div>
                            <div className="user-username">
                                <form onSubmit={this.handleSubmit}>
    
                                    <label htmlFor="name">name</label><br/>
                                    <div>
                                        <div style={{ color:'red'}}></div>
                                        <input type="text" name ="name" value={this.state.name.firstname} onChange={e => this.setState({ firstname: e.target.value })} placeholder="name" /><br/>
                                    </div>
                                    
    
                                     <label htmlFor="surname">surname</label><br/>
                                     <div>
                                        <div style={{ color:'red'}}></div>
                                        <input type="text" name="surname" value={this.state.name.surname} onChange={e => this.setState({surname: e.target.value })} placeholder="surname"/>
                                     </div>
                                    
    
                                    <hr/>
                                    <label htmlFor="phoneNumber" className="label-phone_number">mobile</label><br/>
                                    <div>
                                        <div style={{ color:'red'}}></div>
                                        <input type="text" name ="phone_number" value={this.state.phone_number} onChange={e => this.setState({ phone_number: e.target.value })} placeholder="+ 444 444 444" className="phone_number"/>
                                    </div>
                                    
                                    <button type="submit" className="btn-add_contact2" >
                                        <i className="fas fa-plus"></i>
                                        Add Number
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>   
                
            )
        }
    }
    
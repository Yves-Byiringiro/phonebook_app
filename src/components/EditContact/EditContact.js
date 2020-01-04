import React from 'react';
import axios from 'axios'
import './EditContact.css';

export class EditContact extends React.Component{

        ///////////   initialize state in the constructor  ////////////
        constructor(props){
            super(props)
            this.state = {name : '',firstname:'', surname:'',phone_number:'',fnameError:'',surnameError:'',phone_numberError:''}
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(event) {
            this.setState({value: event.target.value});
        }

        handleSubmit(event) { 

            const {id} = this.props.match.params;
            console.log(this.state)
            event.preventDefault();
            const ContactDetails={name:this.state.firstname+" "+this.state.surname, phone_number:this.state.phone_number}
            
            const res = axios.put(`https://code-catalist-phone-book-rails.herokuapp.com/contacts/${id}`,ContactDetails)
            .then(response =>{
                this.props.history.push('/')
                // const contact = res.data;
                // console.log(contact)


            })
            const contact = res.data;
            // const fullname = contact.name;
            // const hello = fullname.split(' ')
            // const firtname1 = hello[0];
            // const surname1 = hello[1];
    
            this.setState({
                // name: firtname1+" "+surname1,
                // name: contact.name,
                firstname: this.state.firstname,
                surname: this.state.surname,
                // phone_number: contact.phone_number
    
            });
        
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
                                    Update Number
                                </button>
                            </form>
                        </div>
                    </div>
                </div>   
            
        )
    }
}
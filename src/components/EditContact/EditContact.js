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

        async componentDidMount() {
        
            const {id} = this.props.match.params;
    
            const res = await axios.get(`https://code-catalist-phone-book-rails.herokuapp.com/contacts/${id}`);
    
     
    
            const contact = res.data;
            const fullname = contact.name
            const hello = fullname.split(' ')
            const firtname1 = hello[0];
            const surname1 = hello[1];
            console.log('phone number is here: '+contact.phone_number)
            console.log('fullname is here:'+  contact.name)
            console.log(hello)
            console.log('firstname here: '+firtname1)
            console.log('surname here: '+ surname1)
            
            this.setState({
                // name: firtname1+" "+surname1,
                firstname: firtname1,
                surname: surname1,
                phone_number: contact.phone_number,
                
    
            });
    
    
            
            // this.setState({notes:notes.slice()})
        }

        handleChange(event) {
            this.setState({value: event.target.value});
        }

        handleSubmit(event) { 

            const {id} = this.props.match.params;
            console.log(this.state)
            event.preventDefault();
            const ContactDetails={name:this.state.firstname+" "+this.state.surname, phone_number:this.state.phone_number}
            
            axios.put(`https://code-catalist-phone-book-rails.herokuapp.com/contacts/${id}`,ContactDetails)
            .then(response =>{
                this.props.history.push('/')

                

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

                        <label htmlFor="name">Firstname</label><br/>
                        <div>
                            <div style={{ color:'red'}}></div>
                            <input type="text" name ="name" value={this.state.firstname} onChange={e => this.setState({ firstname: e.target.value })} placeholder="Firstname" /><br/>
                        </div>
                        

                            <label htmlFor="surname">Surname</label><br/>
                            <div>
                            <div style={{ color:'red'}}></div>
                            <input type="text" name="surname" value={this.state.surname} onChange={e => this.setState({surname: e.target.value })} placeholder="Surname"/>
                            </div>
                        

                        <hr/>
                        <label htmlFor="phoneNumber" className="label-phone_number">Mobile</label><br/>
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
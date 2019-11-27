import React from 'react';
import './AddNewContact.css';
import axios from 'axios'



//////////   declaring the initial state   ///////////////

const initialState = {
    name: '',
    phone_number: '',
    nameError:'',
    phone_numberError:'',
}
export class AddNewContact extends React.Component{

///////////   initialize state in the constructor  ////////////
    constructor(props){
        super(props)
        this.state = initialState;
 
    }

  

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

//////////  validating name and phone_number input  ////////////////

    validate = () => {
        let nameError='';
        let phone_numberError='';


        if (!this.state.name){

            nameError="name is required !";
        }
        if (!this.state.phone_number){

            phone_numberError="phone is required !";
        }

        if (nameError || phone_numberError) {
            this.setState({nameError, phone_numberError});
            return false;
        }
        return true;
    }

//////////////   submitHandler function to post (submit) data at given api   /////////////////

    submitHandler = e =>{
        e.preventDefault();

        const isValid = this.validate();
        if (isValid) {

            console.log(this.state)

            axios.post("https://code-catalist-phone-book-rails.herokuapp.com/contacts",this.state)
            .then(response =>{
                this.props.history.push('/')
                console.log(response)
            })

////////     clear the state after submitting   ///////////////////

            this.setState(initialState);
        }

    }
      
    render(){

////////   destructuring name and phone_number to make it easier to work with  ///////////////////

        const{name,phone_number}= this.state

        return(
            
                <div className="container">
                    <div className="div1">
                        <div className="user-image">
                            <i className="fas fa-camera fa-10x"></i>
                        </div>
                        <div className="user-username">
                            <form onSubmit={this.submitHandler}>
                                <label htmlFor="name">name</label><br/>
                                <div>
                                    <input type="text" name ="name" value={name} onChange={this.changeHandler} /><br/>
                                    <div style={{ color:'red'}}>{this.state.nameError}</div>
                                </div>
                                

                                 <label htmlFor="surname">surname</label><br/>
                                 <div>
                                    <input type="text" name="surname" placeholder="Smith"/>
                                 </div>
                                

                                <hr/>
                                <label htmlFor="phoneNumber" className="label-phone_number">mobile</label><br/>
                                <div>
                                    <input type="text" name ="phone_number"  value={phone_number} onChange={this.changeHandler} className="phone_number"/>
                                    <div style={{ color:'red'}}>{this.state.phone_numberError}</div>
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

























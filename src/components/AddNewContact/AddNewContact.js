import React from 'react';
import './AddNewContact.css';
import axios from 'axios'



//////////   declaring the initial state   ///////////////

const initialState = {

    name: '',
    fname: '',
    sname: '',
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
        let fnameError='';
        let surnameError='';
        let phone_numberError='';


        if (!this.state.fname){

            fnameError="first name is required !";
        }
        if (!this.state.sname){

            surnameError="surname is required !";
        }
        if (!this.state.phone_number){

            phone_numberError="phone is required !";
        }

        if (fnameError || surnameError || phone_numberError) {
            this.setState({fnameError,surnameError, phone_numberError});
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

            const ContactDetails={name:this.state.fname+" "+this.state.sname, phone_number:this.state.phone_number}
            axios.post("https://code-catalist-phone-book-rails.herokuapp.com/contacts",ContactDetails)
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

    const {name,phone_number}=this.state

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
                                    <div style={{ color:'red'}}>{this.state.fnameError}</div>
                                    <input type="text" name ="name" value={name.fname} onChange={this.changeHandler}  placeholder="name" /><br/>
                                </div>
                                

                                 <label htmlFor="surname">surname</label><br/>
                                 <div>
                                    <div style={{ color:'red'}}>{this.state.surnameError}</div>
                                    <input type="text" name="surname" value={name.sname} onChange={this.changeHandler} placeholder="surname"/>
                                 </div>
                                

                                <hr/>
                                <label htmlFor="phoneNumber" className="label-phone_number">mobile</label><br/>
                                <div>
                                    <div style={{ color:'red'}}>{this.state.phone_numberError}</div>
                                    <input type="text" name ="phone_number"  value={phone_number} onChange={this.changeHandler} placeholder="+ 444 444 444" className="phone_number"/>
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

























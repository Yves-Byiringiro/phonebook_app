import React from 'react';
import axios from 'axios'
import './EditContact.css';

export class EditContact extends React.Component{

///////////   initialize state in the constructor  ////////////

    constructor(props){
        super(props)
        this.state = {
            
            name: '',
            firstName: '',
            surName: '',
            phone_number: '',
            nameError:'',
            phone_numberError:'',
            
            
        }
    }

////////////////    get request to fetch data from diven api before update //////////////

    async componentDidMount() {
        
        const {id} = this.props.match.params;

        const res = await axios.get(`https://code-catalist-phone-book-rails.herokuapp.com/contacts/${id}`);

 

        const contact = res.data;
        const fullname = contact.name
        const hello = fullname.split(' ')
        const firtname1 = hello[0];
        const surname1 = hello[1];

        this.setState({
            name: firtname1+" "+surname1,
            firstName: firtname1,
            surName: surname1,
            phone_number: contact.phone_number

        });


        
        // this.setState({notes:notes.slice()})
    }

 
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

//////////  validating name and phone number input  ////////////////

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

//////////////   submitHandler function to put (update) data at given api   /////////////////

    submitHandler = e =>{
        const {id} = this.props.match.params;
        e.preventDefault();
        
        const isValid = this.validate();
        if (isValid) {
        console.log(this.state)
        axios.put(`https://code-catalist-phone-book-rails.herokuapp.com/contacts/${id}`,this.state)
        .then(response =>{
            this.props.history.push('/');
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })

        }
    }
      
    render(){

////////   destructuring name and phone_number to make it easier to work with  ///////////////////

        const{name, firstName, surName, phone_number}= this.state


        return(
            
                <div className="containerEdit">
                    <div className="div1">
                        <div className="user-image">
                            <i className="fas fa-camera fa-10x"></i>
                        </div>
                        <div className="user-username">
                            <form onSubmit={this.submitHandler}>
                                <label htmlFor="name">name</label><br/>
                                <div>
                                    <input type="text" name ="name" value={firstName} onChange={this.changeHandler} /><br/>
                                    <div style={{ color:'red'}}>{this.state.nameError}</div>
                                </div>

                                 <label htmlFor="surname">surname</label><br/>
                                <input type="text" name="surname" value={surName} onChange={this.changeHandler}/> 

                                <hr/>
                                <label htmlFor="phoneNumber" className="label-phone_number">mobile</label><br/>
                                <div>
                                    <input type="text" name ="phone_number"  value={phone_number} onChange={this.changeHandler} className="phone_number"/>
                                    <div style={{ color:'red'}}>{this.state.phone_numberError}</div>
                                </div>

                                <button type="submit" className="btn-add_contact2">Update Contact</button>
                            </form>
                        </div>
                    </div>
                </div>
               
        )
    }
}
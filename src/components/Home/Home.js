import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Home.css';





export class Home extends React.Component{

///////////   initialize state  ////////////

    state = {
        contacts: [],
        errorMessage:'',

    }


////////////////    get request to fetch data from diven api  //////////////

    componentDidMount(){
        axios.get("https://code-catalist-phone-book-rails.herokuapp.com/contacts").then((response) =>{
            this.setState({
                contacts:response.data
               })
        });
    }


    ////////////////    delete request  used to delete data from given api  //////////////

    deleteContact(id){
        axios.delete(`https://code-catalist-phone-book-rails.herokuapp.com/contacts/${id}`)
        
            this.setState({errorMessage:'error'});
            this.setState({errorMessage:'destroyed'});

    ////////////////    making copy of contacts state  //////////////

            let copyState= this.state.contacts 
                for (let i=0;i<copyState.length;i++){
                    let contact= copyState[i]

    ////////////////    checking if i'm going to delete the right contact  /////////////

                        if(contact.id === id){ 
                            copyState.splice(i,1) 
                        break  
                        }
                 }
            this.setState({contacts:copyState})

        

    }

    render() {
        let contacts = this.state.contacts.map((contact)=>{
            return(
                <tr className="Table-row" key={contact.id}>
                    <td>
                        <Link to={`ContactDetails/${contact.id}`}>
                        {contact.name}
                        </Link>
                    </td>
                    <td>{contact.phone_number}</td>
                    <td>
                        <Link to={`/EditContact/${contact.id}`}>
                            <i className="fa fa-edit"></i>
                        </Link>
                        
                    </td>
                    <td>
                        <i onClick={ () => this.deleteContact(contact.id)} className="fas fa-backspace btn-delete"></i>
                    </td> 
                </tr>                
            )
            
        });
        return(
            <div className="Container">
                {this.state.errorMessage==="destroyed"?<p style={{textAlign: 'center', color: 'red'}}>Contact Destroyed !!!</p>:null}

                {this.state.errorMessage==="error"?<p style={{textAlign: 'center', color: 'red'}}>Error has occurred, please try again later !!!</p>:null}

                <h1 className="Title" > Phone Book Manager</h1>
   
                <div className="Table">
                    <table>
                        <thead className="Table-header">
                            <tr>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Edit</th>
                                <th>Delete</th>    
                            </tr>
                        </thead>
                        <tbody>
                            {contacts}
                        </tbody>
                    </table> 
                    <Link to="/AddNewContact"> 
                        <button type="submit" className="btn-add_contact"> 
                            <i className="fas fa-plus"></i>
                            Add contact
                        </button>
                    </Link>
                   
                </div>
            </div> 
        );
    }
}
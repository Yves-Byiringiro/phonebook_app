import React, { Component } from 'react';
import axios from 'axios';
import '../Home/Home.css';

export class ContactDetails extends Component {

///////////   initialize state in the constructor  ////////////

    constructor(props){
        super(props)
        this.state = {
            
            name: '',
            pnone_number: '',
            
            
        }
    }
//////////////   get request for data at given api   /////////////////

    async componentDidMount() {
        
        const {id} = this.props.match.params;

        const res = await axios.get(`https://code-catalist-phone-book-rails.herokuapp.com/contacts/${id}`);

        const contact = res.data;

        this.setState({
            name: contact.name,
            phone_number:contact.phone_number
        });
    }

    render() {

////////   destructuring name and phone_number to make it easier to work with  //////////////

        const{name,phone_number}= this.state;

        return (
            <div className="containerDetails">
                <div className="div1">
                    <div className="user-image">
                        <i className="fas fa-user-alt fa-10x"></i>
                    </div>
                    <div className="user-username">
                        <div>
                        <h1>{name}</h1>
                        </div>

                        <div>
                            <ul>
                                <li><i className="icons fas fa-comment-alt fa-lg"></i></li>
                                <li><i className="icons fas fa-phone-alt fa-lg"></i></li>
                                <li><i className="icons fas fa-video fa-lg"></i></li>
                                <li><i className="icons fas fa-envelope fa-lg"></i></li>
                            </ul>
                        </div>

                    </div>
                    
                </div>
                
                <div className="div2">
                    <ul>
                        <li>
                            <i className="iconsx fas fa-phone-alt fa-lg"></i>
                            {phone_number}
                            <br/><small className="small">Mobile</small></li>
                        <li>
                            <i className="iconsx fas fa-home fa-lg"></i>
                            5678967896
                            <br/><small className="small">Home</small>
                            </li>
                        <li>
                            <i className="iconsx fas fa-envelope fa-lg"></i>
                            avadoi@gmail.com
                            <br/><small className="small">Email</small>
                            </li>
                    </ul>
                </div>
            </div>
        )
    }
}

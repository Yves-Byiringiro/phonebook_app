import React from 'react';
import './Header.css';

////////////////    Header component section    /////////////////////////

export class Header extends React.Component{

    render() {
        return(
            <div className="Header">
                <div className="logo">
                    <i className="fas fa-globe fa-2x"></i>
                </div>
                <div className="user-profile">
                    <div className="user">
                        <i className="fas fa-user-shield fa-2x"></i>
                    </div>
                    <div className="username">
                        <ul>
                            <li>Admin Admin
                                <i className="fas fa-chevron-down"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
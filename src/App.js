import React, {Component} from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import {Header} from './components/Header/Header';


class App extends Component {
  render() {
    return (
      <div>
         <div>
          <Header/>
          <div className="container">
            <Switch>
              
             
            </Switch>
          </div>
         
  
      </div>
       
      </div>
    );
  }

}

export default App;

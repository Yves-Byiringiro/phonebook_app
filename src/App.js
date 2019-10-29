import React, {Component} from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {Footer }from './components/Footer/Footer';



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
          <Footer/>
  
      </div>
       
      </div>
    );
  }

}

export default App;

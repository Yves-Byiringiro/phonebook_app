import React, {Component} from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {Footer }from './components/Footer/Footer';
import {Home} from './components/Home/Home';
import {ContactDetails} from './components/ContactDetails/ContactDetails';





class App extends Component {
  render() {
    return (
      <div>
         <div>
          <Header/>
          <div className="container">
            <Switch>
              <Route exact path="/" component ={Home}/>
              <Route exact path="/ContactDetails/:id" component={ContactDetails}/>


             
            </Switch>
          </div>
          <Footer/>
  
      </div>
       
      </div>
    );
  }

}

export default App;

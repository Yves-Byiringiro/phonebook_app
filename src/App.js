import React, {Component} from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {Footer }from './components/Footer/Footer';
import {Home} from './components/Home/Home';
import {ContactDetails} from './components/ContactDetails/ContactDetails';
import {AddNewContact} from './components/AddNewContact/AddNewContact';
import {EditContact} from './components/EditContact/EditContact';
import NotFound from './components/pages/NotFound';








class App extends Component {
  render() {
    return (
      <div>
         <div>
          <Header/>
          <div className="container">
          <Switch>
              <Route exact path="/AddNewContact" component={AddNewContact}/>
              <Route exact path="/" component ={Home}/>
              <Route exact path="/EditContact/:id" component={EditContact}/>
              <Route exact path="/ContactDetails/:id" component={ContactDetails}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
          <Footer/>
  
      </div>
       
      </div>
    );
  }

}

export default App;

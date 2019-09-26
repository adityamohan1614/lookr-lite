
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import About from './About/About';
import Home from './Home/Home';
import Wishlist from './Wishlist/Wishlist';

import './App.css';

console.log('app.js is running');

class Root extends React.Component {


   render() {
      return (

    <Router>
    <div class="container">
       <Header />
       <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Wishlist" component={Wishlist} />
      </Switch>
     </div>
     </div>
    </Router>
   );
   };
};
export default Root;

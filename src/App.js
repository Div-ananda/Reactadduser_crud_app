//jshint esversion:6

import React from 'react';
import './App.css';
//Import react routes and its other modules
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//All components
import AddUser from './Adduser.js';
import Home from './Home.js';
import Header from './Header.js';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Impoert axios services
// eslint-disable-next-line
import axios from 'axios';



class App extends React.Component {


    render() {

        return (
            <Router>
                <div className="maincontainer">
                    <Header></Header>


                    <Switch>

                        <Route exact path='/adduser' component={AddUser} />
                        <Route exact path='/home' component={Home} />
                        <Route exact path='' component={Home} />

                    </Switch>




                </div>
            </Router>
        )
    };
}

export default App;

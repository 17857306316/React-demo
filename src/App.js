import React, { Component } from "react";
import Nav from './components/Nav'
import UseState from './components/UseState'
import UseEffect from './components/UseEffect'
import UseMemo from './components/UseMemo'
import UseContext from './components/UseContext'
import Purecomponents from './components/Purecomponents'
// import NotFound from './components/NotFound'
import './components/style.css'
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
// import {
//     HashRouter as Router,
//     Switch,
//     Route,
//     Link,
//     Redirect,
//     NavLink,
// } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Router>
                    <Nav></Nav>
                    <Switch>
                        <Route exact path="/" component={UseState}></Route>
                        <Route strict exact path="/useeffect" component={UseEffect}></Route>
                        <Route strict exact path="/usememo" component={UseMemo}></Route>
                        <Route strict exact path="/usecontext" component={UseContext}></Route>
                        <Route strict exact path="/purecomponents" component={Purecomponents}></Route>
                        <Redirect from='/*' to='/'></Redirect>
                        {/* <Route component={NotFound}></Route> */}
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;

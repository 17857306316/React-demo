import React, { Component } from "react";
import Demo from "./Demo";
import Home from "./Home";
import Nav from "./Nav";
import Ucenter from "./Ucenter";
import Notfound from "./Notfound";
import Shop from "./Shop";
import Book from "./Book";
import JavaBook from "./JavaBook";
import WebBook from "./WebBook";
import "./style.css";
// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

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
            <Route exact path="/" component={Home}></Route>
            <Route strict exact path="/demo" component={Demo}></Route>
            <Route
              strict
              exact
              path="/demo/ucenter"
              component={Ucenter}
            ></Route>
            <Route
              strict
              exact
              path="/hello"
              render={() => <div>hello world</div>}
            ></Route>
            <Route strict exact path="/shop" component={Shop}></Route>
            <Book path="/book" component={Book}>
              <Switch>
                <Route exact strict path="/book/webbook" component={WebBook}></Route>
                <Route exact strict path="/book/javabook" component={JavaBook}></Route>
              </Switch>
            </Book>
            <Route component={Notfound}></Route>
            {/* <Redirect from='/*' to='/'></Redirect> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

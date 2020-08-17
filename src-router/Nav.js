import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <ul>
                <li>
                    <NavLink strict exact to="/">home</NavLink>
                </li>
                <li>
                    <NavLink strict exact to="/demo">demo</NavLink>
                </li>
                <li>
                    <NavLink strict exact  to="/demo/ucenter">ucenter</NavLink>
                </li>
            </ul>
        );
    }
}

export default Nav;
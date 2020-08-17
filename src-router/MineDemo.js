import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
class Demo extends Component {
    handleClick() {
        console.log(this.props)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>回到home页面</button>
            </div>
        );
    }
}

export default withRouter(Demo)
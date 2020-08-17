import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import Demo from './Demo'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // num: 'haha'
        }
    }
    handleClick = () => {
        this.setState({ num: 'this.state.num + 1' })
    }
    render() {
        return (
            <div>
                <Demo value={this.state.num}></Demo>
                <div>{this.state.num}</div>
                <button onClick={this.handleClick}>add</button>
            </div>
        );
    }
}
export default App;
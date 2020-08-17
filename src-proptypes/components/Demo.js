
import React, { Component } from 'react';
class Demo extends Component {
    render() {
        return (
            <div>hello{this.props.value}</div>
        );
    }
}
Demo.defaultProps={
    value:132
}
export default Demo;
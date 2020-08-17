import React, { Component } from 'react';
import MineDemo from './MineDemo'
class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        console.log(props);
    }
    
    render() {
        return (
            <div>
                <MineDemo></MineDemo>
            </div>
        );
    }
}

// export default withRouter(Demo)
export default Demo
import React, { Component } from 'react';
import Demo from './components/Demo1'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
  
    render() { 
        return ( 
            <div>
                <Demo></Demo>
            </div>
         );
    }
}
 
export default App;

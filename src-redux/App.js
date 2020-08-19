import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store/index'
class App extends Component {
    constructor(props) {
        super(props);
        // console.log(store.getState());
        this.state = store.getState()
        store.subscribe=(this.storeChange)//订阅
    }
    storeChange=()=>{
        this.setState(store.getState())
    }
    render() {
        return (
            <div>
                <div style={{ margin: 10 }}>
                    <Input
                        placeholder={this.state.inputValue}
                        style={{ width: 250 }}
                        // value={this.state.inputValue}
                        onChange={e=>{
                            console.log(e.target.value)
                                const action={
                                    type:'change',
                                    value:e.target.value
                                }
                                store.dispatch(action)
                        }}
                    ></Input>
                    <Button>增加</Button>
                </div>
                <div style={{ width: 300 }}>
                    <List
                        dataSource={this.state.datas}
                        bordered
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    ></List>
                </div>
            </div>
        );
    }
}

export default App;
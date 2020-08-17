import React, { Component } from 'react';
import { Redirect, Router, Prompt } from 'react-router-dom';
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            value: ''
        }
    }
    render() {
        const { isLogin } = this.state
        return (
            <div>
                {
                    isLogin ? <div>shop</div> : <Redirect to='/'></Redirect>
                }
                <Prompt
                    when={this.state.value}
                    message='确定离开页面吗'
                ></Prompt>
                <input onChange={(e) => this.setState({ value: e })}></input>
            </div>
        );
    }
}
export default Shop;
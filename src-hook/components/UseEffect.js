import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Result } from 'antd';
const UseEffect = () => {
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(0)
    const [datas, setData] = useState({})
    // useEffect(() => {
    //     // document.title = `you click count ${count} times`
    //     // setCount(count + 1)
    //      window.$.ajax({
    //         url: 'http://www.tianqiapi.com/api?version=v9&appid=23035354&appsecret=8YvlPNrz&city=杭州',
    //         type: 'get',
    //         success: (data) => {
    //             console.log(data);
    //             setData(data)
    //             console.log(datas);
    //         }
    //     })
    //     console.log('componentDimount');
    //     return () => {
    //         console.log('执行了 componentWillUnmount');
    //     }
    // }, [])
    useEffect(() => {
        async function textResult() {
            console.log('hello async');
        }
        const result = textResult()
        console.log(textResult());
    }, [])

    return (
        <div className='container'>

            <h1>包含三个生命周期，具体看代码与打印日志</h1>
            <h1>{num}</h1>
            <button className="btn btn-outline-primary" onClick={() => { setNum(num + 1) }}>change num</button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>count:{count}</h1>
            <button className="btn btn-outline-primary" onClick={() => { setCount(count + 1) }}>click count</button>

        </div>
    )
}

export default UseEffect;
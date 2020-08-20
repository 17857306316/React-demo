import React, {  useRef, useState } from 'react'
function Useref() {
    const inputEl = useRef(null)
    const [num,setNum]=useState({value:''})
    return (
        <div className='container'>
            <h3>作用：获取dom元素和存取变量</h3>
            <h3>先获取input的dom元素，然后把输入的值打印出来</h3>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <input type="password" id="inputPassword2" ref={inputEl} className="form-control" placeholder="Password"></input>
            <button className="btn btn-primary mb-2" onClick={() => {
                console.log(inputEl.current.value);
                setNum({value:inputEl.current.value})
            }
            }>点击</button>
            <h1>输入的值：{num.value}</h1>
        </div>
    )
}
export default Useref
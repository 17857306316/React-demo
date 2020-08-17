import React, { useState } from 'react';
function UseState() {
    const [count, setCount] = useState(0)
    const [name, Setname] = useState({ name: 'mike' })
    const [arr, Setarr] = useState([1,2,3])

    return (
        <div className='container'>
            <h1>useState修改值</h1>
            <br></br>
            <br></br>
            <br></br>
            <div>值位数字的时候</div>
            <h1>{count}</h1>
            <button  className="btn btn-outline-primary" onClick={() => {setCount(count + 1)}}>add count</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>值位对象的时候</div>
            <h1>{name.name}----{name.age}</h1>
            <button  className="btn btn-outline-primary" onClick={() => { Setname({ name: 'andy', age: 18 }) }}>change name</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>值位数组的时候</div>
            <h1>{arr}</h1>
            <button  className="btn btn-outline-primary"  onClick={() => { Setarr(()=>{ arr.push(4)
                 return [...arr]}) }}>change arr</button>
        </div>
    )
}
export default UseState

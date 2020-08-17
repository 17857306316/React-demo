import React, { useState, useContext } from 'react';
const MyContext = React.createContext({})

const UseContext = () => {
    const [key, setKey] = useState('')
    return (
        <div className='container'>
            <h1>共享状态钩子</h1>
            <button className="btn btn-outline-primary" onClick={() => {
                setKey(' Usecontext')
            }}>get value</button>
            <MyContext.Provider value={{ key }}>
                <Child></Child>
            </MyContext.Provider>
        </div>
    )
}

export default UseContext;


const Child = () => {
    const { key } = useContext(MyContext);
    return (
        <h1>Child:My value comes from{key}</h1>
    )
}





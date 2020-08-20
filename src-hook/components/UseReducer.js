import React, { useContext, useReducer } from 'react';
const MyContext = React.createContext({});
function UseReducer() {

    const [color, dispatch] = useReducer((state, action) => {
        switch (action) {
            case '黄色':
                return 'yellow'
            case '红色':
                return 'red'
            default:
                return state
        }
    }, 'pink')


    return (
        <div className='container'>
            <MyContext.Provider value={{ color, dispatch }}  >
                <Show></Show>
                <Button></Button>
            </MyContext.Provider>
        </div>
    )
}
export default UseReducer


function Show() {
    const { color } = useContext(MyContext);
    return (
        <div className='container'>
            <h1 style={{ color: color }}>字体颜色为{color}</h1>
        </div>
    )
}


function Button() {
    const { dispatch } = useContext(MyContext);
    return (
        <div className='container'>
            <button className="btn btn-primary mb-2" onClick={()=>{dispatch('红色')}}>红色</button>
            <button className="btn btn-primary mb-2" onClick={()=>{dispatch('黄色')}}>黄色</button>
        </div>
    )
}

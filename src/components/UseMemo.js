// import React, { useState, useMemo, useCallback } from 'react';
// const UseMemo = () => {
//     const [count, Setcount] = useState(0)
//     const [num, Setnum] = useState(0)
//     let callback = useCallback(() => {
//         console.log(count);
//         return count
//     }, [num])
//     let memo = useMemo(() => {
//         console.log(count);
//         return count
//     }, [num])
//     return (
//         <div className='container'>
//             <h1>性能优化与缓存</h1>
//             <h1>original count:{count}</h1>
//             <h1>UseCallback:{callback()}</h1>
//             <h1>UseMemo:{memo}</h1>
//             <h1>original num:{num}</h1>
//             <button className="btn btn-outline-primary" onClick={() => { Setcount(count + 1) }}>changeCount</button>
//             <br></br>
//             <button className="btn btn-outline-primary" onClick={() => { Setnum(num + 1) }}>changeNum</button>
//             <div>这里usememo和usecallback大致相同，区别就是useCallback 返回的是一个函数，useMemo返回是一个对象</div>
//         </div>
//     )
// }
// export default UseMemo;


import React, { useState, useMemo, useCallback } from 'react';
const UseMemo = () => {
    const [hong, setHong] = useState('小红在待客状态')
    const [ming, setMing] = useState('小明在待客状态')
    return (
        <div className='container'>
            <Child name={hong}>{ming}</Child>
            <button className="btn btn-outline-primary" onClick={() => { setHong(new Date().getTime() + '小红向我们走来') }}>小红</button>
            <button className="btn btn-outline-primary" onClick={() => { setMing(new Date().getTime() + '小明向我们走来') }}>小明</button>
        </div>
    )
}
export default UseMemo

function Child({ name, children }) {
    function fun() {
        console.log('她来了，她来了，小红来了');
        return name + '小红向我们走来了'
    }
    // const actionFun = fun(name)
    //不使用useMemo的时候，子组件的方法会被重复调用
    //使用usemomo监听name的值，name改变执行我们的方法
    const actionFun = useMemo(() => fun(name), [name])

    return (
        <div className='container'>
                <h3>使用usememo优化性能，解决重复调用子组件方法消耗性能</h3>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div>{actionFun}</div>
                <div>{children}</div>

        </div>
    )
}


import React, { useState, useMemo, useCallback } from 'react';
const UseMemo = () => {
    const [count, Setcount] = useState(0)
    const [num, Setnum] = useState(0)
    let callback = useCallback(() => {
        console.log(count);
        return count
    }, [num])
    let memo = useMemo(() => {
        console.log(count);
        return count
    }, [num])
    return (
        <div className='container'>
            <h1>性能优化与缓存</h1>
            <h1>original count:{count}</h1>
            <h1>UseCallback:{callback()}</h1>
            <h1>UseMemo:{memo}</h1>
            <h1>original num:{num}</h1>
            <button className="btn btn-outline-primary" onClick={() => { Setcount(count + 1) }}>changeCount</button>
            <br></br>
            <button className="btn btn-outline-primary" onClick={() => { Setnum(num + 1) }}>changeNum</button>
            <div>这里usememo和usecallback大致相同，区别就是useCallback 返回的是一个函数，useMemo返回是一个对象</div>
        </div>
    )
}
export default UseMemo;
import React, { useEffect, useState, useRef } from 'react';
import './style.css'
// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             List: []
//         }
//     }
//     child = () => {
//         const arr = []
//         for (let i = 0; i < 25; i++) {
//             arr.push([])
//             console.log(i);
//         }
//         this.setState({ List: arr })
//         return arr

//     }
//     componentDidMount() {
//         this.child()
//     }
//     render() {
//         return (
//             <div className='container'>
//                 {this.state.List.map((item, index) => {
//                     return <div className='child' key={index}>{item}{index}</div>
//                 })}
//             </div>
//         );
//     }
// }

// export default App;

function App() {
    // const [time, setTime] = useState(30)
    // const [start, setStart] = useState(false)
    // const [score, setScore] = useState(0)//得分
    const [List, setList] = useState([])
    const childs = useRef(null);

    const Mouse = (index) => {

        // console.log(index.target);
        const num1 = Math.floor(Math.random() * 255)
        const num2 = Math.floor(Math.random() * 255)
        const num3 = Math.floor(Math.random() * 255)
        index.target.style.backgroundColor = `rgb(${num1},${num2},${num3})`
        // index.target.style.backgroundColor ='red'
        // window.$(index.target).addClass('color')
        // console.log(window.$(index.target).eq(num1));

    }
    useEffect(() => {
        setList(Array(2500).fill({}))
    }, [])


    return (
        <div className='container'>
            {/* <div>得分{score}</div>
            <div className='time'>剩余时间{time}</div> */}
            {List.map((item, index) => {
                return <div className='child' ref={childs} onMouseMove={(index) => {
                    Mouse(index)
                }} key={index}></div>
            })}
            {/* <button onClick={() => {
                setStart(true)
            }}>开始</button> */}
        </div>
    );
}
export default App
import React from 'react';
import ReactDOM from 'react-dom';
import './demo.css'
import 'antd/dist/antd.css';
import { Select, Input, message } from 'antd';
import axios from 'axios';
const { Search } = Input;
const { Option } = Select;
class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            index: 0,
            city: '杭州',
            cityNum: 0,
            dataNum: 0
        }
    }

    componentDidMount() {
        let url = `http://www.tianqiapi.com/api?version=v9&appid=23035354&appsecret=8YvlPNrz&city=${this.state.city}`
        window.$.ajax({
            type: 'get',
            url: url,
            success: (data) => {
                setTimeout(this.setState({
                    dataList: data,
                    city: data.city,
                    timeList: data.data[this.state.cityNum].hours,
                    indexindex: data.data[0].index[0].title,
                    indexlevel: data.data[0].index[0].level,
                    indexdesc: data.data[0].index[0].desc
                }))
            },
            error: () => {
                return ''
            }
        })


    }
    choseCity() {
        let url = `http://www.tianqiapi.com/api?version=v9&appid=23035354&appsecret=8YvlPNrz&city=${this.state.city}`
        // window.$.ajax({
        //     type: 'get',
        //     url: url,
        //     error: (data) => {
        //         return data
        //     },
        //     success: (data) => {
        //         setTimeout(this.setState({
        //             dataList: data,
        //             timeList: data.data[this.state.cityNum].hours || [],
        //             city: data.city,
        //             indexindex: data.data[this.state.cityNum].index[this.state.dataNum].title || [],
        //             indexlevel: data.data[this.state.cityNum].index[this.state.dataNum].level || [],
        //             indexdesc: data.data[this.state.cityNum].index[this.state.dataNum].desc || []
        //         }), 0)
        //     },

        // })
        axios({
            url: url,
            method: 'get'
        })
            .then(res => {
                setTimeout(this.setState({
                    dataList: res.data,
                    timeList: res.data.data[this.state.cityNum].hours || [],
                    city: res.data.city,
                    indexindex: res.data.data[this.state.cityNum].index[this.state.dataNum].title || [],
                    indexlevel: res.data.data[this.state.cityNum].index[this.state.dataNum].level || [],
                    indexdesc: res.data.data[this.state.cityNum].index[this.state.dataNum].desc || []
                }), 0)
            })
            .catch(error => {
                console.log(error);
 
                message.error(
                    '输入错误或城市不存在'
                )
            })
    }

    changeStyle = (index) => {
        this.setState({
            index: index
        })
    }
    showDetail(item) {
        this.setState({
            cityNum: item
        }, () => {
            this.choseCity()
        })
    }
    SearchRef = React.createRef()
    clearvalue = () => {
        this.SearchRef.current.state.value = ''
    }

    render() {
        const city = ['杭州', '上海', '广州', '深圳', '北京', '南京']
        return (
            <div className='box' >
                <div className='city'>
                    <div>热门城市
                        <Select
                            defaultValue='杭州'
                            style={{ width: '70px' }}
                            onChange={(e) => {
                                this.setState({
                                    city: e,
                                    dataNum: city.indexOf(e),
                                    cityNum: 0
                                }, () => {
                                    this.choseCity()
                                })

                            }}>
                            {city.map((item, index) => {
                                return <Option value={item} key={index}>{item}</Option>
                            })}
                        </Select>
                    </div>
                    <Search
                        ref={this.SearchRef}

                        placeholder="请输入城市名称,不要带市和区"
                        onSearch={(e) => {
                            console.log(e);
                            this.setState({
                                city: e,
                                cityNum: 0
                            }, () => {
                                this.clearvalue()
                                this.choseCity()
                            })
                        }}
                        style={{ width: 300 }}
                    />
                    <h3 style={{ fontWeight: 800 }}>当前城市:<span style={{ color: 'red' }}>{this.state.city}</span></h3>
                </div>
                <div className='date'>
                    {(this.state.dataList.data || []).map((item, index) => {
                        return (
                            <div key={index} onClick={this.showDetail.bind(this, index)} onMouseMove={this.changeStyle.bind(this, index)} className={this.state.index === index ? 'child active' : 'child'}>
                                <div>{new Date().getMonth() + 1}月{item.day}</div>
                                <div>当前温度{item.tem}℃</div>
                                <div>{item.tem1}~{item.tem2}℃</div>
                                <div>{item.wea}</div>
                                <div>{item.win[0]}{item.win_speed}</div>
                            </div>
                        )
                    })}
                </div>
                <div className='detail'>
                    <h1>今日指南：{this.state.indexindex}:{this.state.indexlevel}:{this.state.indexdesc}</h1>

                    {(this.state.timeList || []).map((item, index) => {
                        return (
                            <ul key={index}>
                                <li >时间：{item.hours}</li>
                                <li >天气：{item.wea}</li>
                                <li >温度：{item.tem}℃</li>
                                <li >风向：{item.win}{item.win_speed}</li>
                            </ul>
                        )
                    })}
                </div>
            </div>
        );
    }
}
ReactDOM.render(
    <Parent />,
    document.getElementById('root')
);

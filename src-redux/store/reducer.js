const defaultState = {
    inputValue: '请输入',
    datas: ['今天开始', '学习', 'redux']
}
export default (state = defaultState, action) => {
    console.log(state, action)
    //Reducer 里只能接受state，不能改变state
    if (action.type==='change') {
        let newState = JSON.parse(JSON.stringify(state));//深度拷贝，转成字符串
        newState.inputValue = action.value
        return newState
    }
    return state
}
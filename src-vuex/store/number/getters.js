const getters = {
    doubleNumber (state) {//派生出一个新状态，值永远都等于state.number * 2
        return state.number * 3
    }
}

export default getters
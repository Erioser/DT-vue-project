

const getters = {
    all_num_and_price (state) {
        let obj = { all_num: 0, all_price: 0 }
        state.goods.forEach(item => {
            obj.all_num += item.num
            obj.all_price += item.num * item.price
        })
        return obj
    }
}

export default getters
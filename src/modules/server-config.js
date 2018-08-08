
const is_proxy = process.env.NODE_ENV === 'production'

const mz = is_proxy ? '/mz' : 'https://m.maizuo.com'
const dt = is_proxy ? '/dt' : 'https://www.duitang.com'

export {
    mz, dt
}

export default { mz, dt }
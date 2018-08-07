
import Cookies from 'vue-cookies'

const state = {

    user_state: getUserStateFromCookies(),
    user_info: null,
    category_list: null,
    detail_common_info: null

}

function getUserStateFromCookies() {
    let user_state = {
        id : "",
        isMainAccount : "",
        mobile : "",
        name : "",
        sessionKey : ""
    }

    for (const key in user_state) {
        let value = Cookies.get(key)
        if ( !value ) {
            user_state = null;
            break;
        }else {
            user_state[key] = value
        }
    }

    return user_state
}

export default state
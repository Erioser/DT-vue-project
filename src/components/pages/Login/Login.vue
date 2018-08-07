<template>
<div class="app-login page page-top">
    <app-header>登陆</app-header>
    <form @submit.prevent="submit">
        <label>手机号</label>
        <ui-input type="text" v-model="phone" placeholder="请输入手机号">
            <button type="button" @click="sendCode" v-if="isPhone" class="send-code">发送验证码</button>
        </ui-input>
        <label>验证码</label>
        <ui-input type="text" placeholder="请输入验证码" v-model="code"></ui-input>
        <button type="submit" class="submit">登陆</button>
    </form>

</div>
</template>
<script>
export default {
    name: 'app-login',
    data() {
        return {
            phone: '18335832151',
            code: ''
        }
    },
    computed: {
        isPhone() {
            var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test(this.phone)) {
                return false;
            } else {
                return true;
            }
        }
    },
    methods: {
        submit() {
            if (!this.code) return false;
            this.$store.dispatch('action_login', {
                code: this.code, phone: this.phone,
                success: (user_state) => {
                    console.log('登陆成功')
                    //存cookie

                    for (const key in user_state) {
                        if (user_state.hasOwnProperty(key)) {
                            const element = user_state[key];
                            this.$cookies.set(key,element,"7d","/"); 
                        }
                    }
                    //登录之后去获取一下用户的购物车信息
                    this.$store.dispatch('action_get_user_cart')
                    this.$router.push('/mine')
                },
                fail: () => {
                   console.log('短信验证码错误')
                }
            })
        },
        sendCode() { //发送验证码了
            this.$http.post('/mz/v4/api/code?__t=' + Date.now(), {
                mobile: this.phone,
                type: "2"
            }).then(res => {
                if (res.data.status === 0) {
                    console.log('验证码发送成功')
                }
            })
        }
    }
}
</script>

<style lang="scss">
@import "../../../stylesheets/_base.scss";
.app-login {
    form {
        padding: 0.15rem;
        text-align: center;
        label {
            padding-left: 0.15rem;
            margin-top: 0.15rem;
            display: block;
            text-align: left;
        }
        .submit {
            width: 1.63rem;
            background-color: $base-color;
            color: #fff;
            border: none;
            border-radius: 0.36rem;
            padding: 0.08rem 0.12rem;
            font-size: 0.15rem;
            outline: none;
            margin: 0.45rem 0 0;
        }
        .send-code {
            width: 0.95rem;
            position: absolute;
            right: 5px;
            top: 15px;
            background-color: #29a097;
            color: #fff;
            height: 0.3rem;
            line-height: 0.3rem;
            text-align: center;
            border-radius: 3px;
            cursor: pointer;
        }
    }
}
</style>


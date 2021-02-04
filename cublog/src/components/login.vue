<template>
    <q-page :style-fn="myTweak" padding class="bg-grey-3">
        <center>
            <img class="logo" src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
            <h5>登陆到 cublog</h5>
            <div id="content" class="column justify-center shadow-3">
                <q-input class="input" outlined label="用户名" v-model="username" dense></q-input>
                <q-input class="input" outlined label="密码" v-model="password" dense type="password"></q-input>
                <a style="text-align:right" href="" target="_top">忘记密码？</a>
                <q-btn color="primary" style="margin-top:30px; letter-spacing: 5px" type="submit">登陆</q-btn>
            </div>
            <div id="to_register" class="column" style="display:inline-block">
                还没有账号？ <router-link to="/main/register">注册一个新账号</router-link>
            </div>
        </center>
        <ErrorDialog title="密码错误" ref="password_error">
            用户名或密码错误<br>
            请确认:
            <ul>
                <li>输入了正确的用户名和密码</li>
                <li>是否开启了大写锁定</li>
            </ul>
        </ErrorDialog>
    </q-page>
</template>

<style lang="scss" scoped>
    .logo {
        width: 50px;
        height: 50px;
    }
    .logo + h5 {
        font-weight: lighter;
        letter-spacing: 3px;
    }
    #content {
        width: 350px;
        border-radius: 5px;
        padding: 20px 20px 20px 20px;
    }
    .input + .input {
        margin: 30px 0px 0px 0px;
    }
    a {
        color: rgb(22, 162, 228);
        text-decoration: none
    }
    #to_register {
        margin-top:20px;
        border-style:solid;
        border-width:thin;
        border-radius:5px;
        border-color:rgb(175, 175, 175);
        width:350px;
        padding: 15px 0px 15px 0px
    }
</style>

<script>
import ErrorDialog from './error_dialog.vue';

export default {
    data () {
        return {
            username: '',
            password: '',
        }
    },
    components: {
        ErrorDialog
    },
    methods: {
        password_error(){
            this.password='';
            this.$refs.password_error.show=true;
        }
    }
}
</script>
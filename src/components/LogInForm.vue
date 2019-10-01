<template>
    <div class="container">
        <div class="header">
            <h1>Welcome</h1>
            <p>Enter your credentials</p>
        </div>
        <form @submit.prevent="logIn">
            <input type="text" v-model="userName" name="userName" placeholder="User Name" id="userName">
            <div class="input-group">
                <input :type="passwordType" v-model="password" name="repeatPassword" placeholder="Repeat Password"><span class="show-password" @click="toggleShowPassword('passwordType')">Show</span>
            </div>
            <input type="submit" value="Log In" class="btn">
        </form>
        <div class="other-option">
            <h4 title="Reset Password">Forgot password ?</h4>
            <h4 title="Create Account"  @click="registerUser">Don't have account ?</h4>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "logIn",
    data(){
        return {
            userName: '',
            password: '',
            passwordType: 'password'
        }
    },
    methods: {
        ...mapActions(['logInUser', 'goRegister']),
        logIn() {
            const userData = {
                userName: this.userName,
                password: this.password
            }
            this.logInUser(userData);
        },
        registerUser() {
            this.$router.push('/dashboard/register');
        },
        toggleShowPassword(element){
            this[element] = this[element] === 'password' ? 'text' : 'password'
        }

    }
}
</script>

<style scoped>

.container {
    width: 300px;
    margin: auto;
    background-color: #FFF;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5);
    border-radius: 5px;
    padding: 2rem 0;
}
</style>
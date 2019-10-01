<template>
    <div class="registration">
        <div class="container">
            <h1>Create Your Account</h1>
            <form @submit.prevent="registerUserInit">
                <input type="text"  v-model="userName" name="userName" placeholder="User Name" id="userName">
                <div class="input-group">
                    <input :type="passwordType" v-model="password" name="password" placeholder="Password"><span class="show-password" @click="toggleShowPassword('passwordType')">Show</span>
                </div>
                <div class="input-group">
                    <input :type="repasswordType" v-model="repeatPassword" name="repeatPassword" placeholder="Repeat Password"><span class="show-password" @click="toggleShowPassword('repasswordType')">Show</span>
                </div>
                <input type="text" v-model="test" name="test" placeholder="test">
                <input type="text" v-model="test" name="test" placeholder="test">
                <input type="submit" value="Register" class="btn">
            </form>
            <div class="other-option">
                <h4 title="Create Account" @click="loginPage">Already have account ?</h4>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "register",
    data(){
        return {
            userName: '',
            password: '',
            repeatPassword: '',
            test: '',
            passwordType: 'password',
            repasswordType: 'password'
        }
    }, 
    methods: {
        ...mapActions(['registerUser']),
        loginPage() {
            this.$router.push('/dashboard/login');
        },
        toggleShowPassword(element){
            this[element] = this[element] === 'password' ? 'text' : 'password'
        }, 
        registerUserInit() {
            const userData = {
                userName: this.userName,
                password: this.password
            }
            this.registerUser(userData);
        }
    }
}
</script>

<style scoped>

.container {
    width: 500px;
    margin: auto;
    background-color: #FFF;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5);
    border-radius: 5px;
    padding: 2rem 0;
}

.container input, .container .input-group {
    width: 300px;
}

</style>
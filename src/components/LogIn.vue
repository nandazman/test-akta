<template>
    <div class="login">
        <div class="container">
            <div class="header">
                <h1>Welcome</h1>
                <p>Enter your credentials</p>
            </div>
            <form @submit.prevent="logIn">
                <input type="text" v-model="userName" name="userName" placeholder="User Name" id="userName">
                <input type="password" v-model="password" name="password" placeholder="Password">
                <input @mouseover="hoverButton" @mouseout="hoverButton" type="submit" value="Log In" class="btn" :class="{'buttonHover': isButtonHover }">
            </form>
            <div class="other-option">
                <h4 title="Reset Password">Forgot password ?</h4>
                <h4 title="Create Account">Don't have account ?</h4>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "dashboard",
    data(){
        return {
            userName: '',
            password: '',
            isButtonHover: false
        }
    },
    methods: {
        ...mapActions(['logInUser']),
        hoverButton(){
            this.isButtonHover = !this.isButtonHover;
        },
        logIn() {
            console.log(this.password)
            const userData = {
                userName: this.userName,
                password: this.password
            }
            this.logInUser(userData)
        }
    }
}
</script>

<style scoped>
.login {
    background-color: #E4ECF4;
    height: 100vh;
    padding-top: 10rem;
}

.container {
    width: 300px;
    margin: auto;
    background-color: #FFF;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5);
    border-radius: 5px;
    padding: 2rem 0;
}

.header {
    margin-bottom: 2rem;
}

form {
    padding: 1rem;
}
input {
    display: block;
    margin: 1rem auto;
    padding: 4px;
    height: 34px;
    width: 200px;
    border-radius: 4px;
    border: 1px solid #8CAFCE;
}

input[type="submit"].buttonHover {
   /* background: #8cafce38; */
   opacity: 0.7;
}

input[type="submit"] {
    background: #8CAFCE;
    border: 0px;
    cursor: pointer;
    color: #fff;
    font-weight: 800;
    transition: all 250ms;
}

.other-option {
    /* display: flex; */
    justify-content: space-between;
    margin-top: 1rem;
}

.other-option h4 {
    color: #2c3e50c7;
    cursor: pointer;
}


</style>
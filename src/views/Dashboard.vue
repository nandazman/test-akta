<template>
    <div class="dashboard">
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.dashboard {
    background-color: #E4ECF4;
    min-height: 100vh;
    padding-top: 10rem;
}


.dashboard .header {
    margin-bottom: 2rem;
}

.dashboard form {
    padding: 1rem;
}
.dashboard input {
    display: block;
    margin: 1rem auto;
    padding: 4px;
    height: 34px;
    width: 200px;
    border: 0;
    border-bottom: 1px solid #8CAFCE;
    transition: all 250ms;
}

.dashboard input[type="text"]:focus, .dashboard input[type="password"]:focus {
    border-bottom: 1px solid #2c3e50;
    outline: none;
}

.dashboard input[type="submit"]:hover {
   /* background: #8cafce38; */
   opacity: 0.7;
}

.dashboard input[type="submit"] {
    background: #8CAFCE;
    border: 0px;
    cursor: pointer;
    color: #fff;
    font-weight: 800;
    transition: all 250ms;
    border-radius: 4px;
}

.dashboard .other-option {
    /* display: flex; */
    justify-content: space-between;
    margin-top: 1rem;
}

.dashboard .other-option h4 {
    color: #2c3e50c7;
    cursor: pointer;
}

.dashboard .input-group {
    width: 200px;
    margin: auto;
    position: relative;
    font-size: 12px;
}

.dashboard .input-group span {
    z-index: 1;
    position: absolute;
    bottom: 12px;
    right: 0px;
    color: #8CAFCE;
}
.dashboard .input-group span:hover {
    color: #2c3e50;
    cursor: pointer;
}

</style>
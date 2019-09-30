// we bring all our module to this index.js

import Vuex from 'vuex';
import Vue from 'vue';
import login from './modules/login';

Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        login,
    }
})
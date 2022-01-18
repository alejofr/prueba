import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store =  new Vuex.Store({
    state: {
        loginStatus: false,
        token: ''
    },
    mutations: {
        authStateUpdate(state){
            state.loginStatus = true;
        },
        authToken(state, token){
            state.token = token;
            localStorage.setItem('token', token);
        }
    },
    actions: {
        addToken({commit}, token) {
            commit('authStateUpdate');
            commit('authToken', token);
        }
    }
})


if (localStorage.getItem('token')) {
    let token = localStorage.getItem('token');
    store.commit('authStateUpdate');
    store.commit('authToken', token);
}


export default store






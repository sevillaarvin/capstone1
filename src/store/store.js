import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            fullName: "",
            username: "",
            password: ""
        },
        login: {
            username: "",
            password: "",
            isLoggedIn: false
        },
        search: {
            query: ""
        }
    },
    getters: {
        getFullName: (state) => {
            return state.user.fullName
        },
        getUserName: (state) => {
            return state.user.username
        },
        getPassword: (state) => {
            return state.user.password
        },
        isLoggedIn: (state) => {
            return state.login.isLoggedIn
        },
        getLoginName: (state) => {
            return state.login.username
        },
        getLoginPassword: (state) => {
            return state.login.password
        },
        getSearchQuery: (state) => {
            return state.search.query
        },
    },
    mutations: {
        setFullName: (state, payload) => {
            state.user.fullName = payload
        },
        setUserName: (state, payload) => {
            state.user.username = payload
        },
        setPassword: (state, payload) => {
            state.user.password = payload
        },
        setLoggedIn: (state, payload) => {
            state.login.isLoggedIn = payload
        },
        setLoginName: (state, payload) => {
            state.login.username = payload
        },
        setLoginPassword: (state, payload) => {
            state.login.username = payload
        },
        setSearchQuery: (state, payload) => {
            state.search.query = payload
        }
    },
    actions: {
        setFullName: (context, payload) => {
            context.commit('setFullName', payload)
        },
        setUserName: (context, payload) => {
            context.commit('setUserName', payload)
        },
        setPassword: (context, payload) => {
            context.commit('setPassword', payload)
        },
        setLoggedIn: (context, payload) => {
            context.commit('setLoggedIn', payload)
        },
        setLoginName: (context, payload) => {
            context.commit('setLoginUser', payload)
        },
        setLoginPassword: (context, payload) => {
            context.commit('setLoginPassword', payload)
        },
        setSearchQuery: (context, payload) => {
            context.commit('setSearchQuery', payload)
        }
    }
})

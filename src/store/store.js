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
            isSearching: false,
            query: "",
            results: '{}',
            response: ""
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
        getIsSearching: (state) => {
            return state.search.isSearching
        },
        getSearchQuery: (state) => {
            return state.search.query
        },
        getSearchResults: (state) => {
            return state.search.results
        },
        getSearchResultsJSON: (state) => {
            return JSON.parse(state.search.results)
        },
        getSearchResponse: (state) => {
            return state.search.response
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
        setIsSearching: (state, payload) => {
            state.search.isSearching = payload
        },
        setSearchQuery: (state, payload) => {
            state.search.query = payload
        },
        setSearchResults: (state, payload) => {
            state.search.results = payload
        },
        setSearchResponse: (state, payload) => {
            state.search.response = payload
        },
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
        setIsSearching: (context, payload) => {
            context.commit('setIsSearching', payload)
        },
        setSearchQuery: (context, payload) => {
            context.commit('setSearchQuery', payload)
        },
        setSearchResults: (context, payload) => {
            context.commit('setSearchResults', payload)
        },
        setSearchResponse: (context, payload) => {
            context.commit('setSearchResponse', payload)
        },
    }
})

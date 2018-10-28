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
        }
    },
    getters: {
        getFullName: (state) => {
            return state.user.fullName
        },
        getUserName: (state) => {
            return state.user.username
        }
    },
    mutations: {
        setFullName: (state, payload) => {
            state.user.fullName = payload
        },
        setUserName: (state, payload) => {
            state.user.username = payload
        }
    },
    actions: {
        setFullName: (context, payload) => {
            context.commit('setFullName', payload)
        },
        setUserName: (context, payload) => {
            context.commit('setUserName', payload)
        }
    }
})

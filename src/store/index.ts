import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    state: {
        userPreferences: []
    },
    mutations: {
        setPreferences(state, status) {
            state.userPreferences = status;
        }
    }
})

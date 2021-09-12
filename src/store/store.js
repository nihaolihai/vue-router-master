import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      selectedVal: {},
      count:1,
      counts:0,
      perflag:true
    },
    mutations: {
      addmu(state){state.count++},
      lessmu(state){state.count--},
      addmus(state){state.counts++},
      lessmus(state){state.counts--},
      setEms (state, val) {
        state.selectedVal = val
      },
      setFlags (state, val) {
        state.perflag = val
      },
    },
    actions: {
        addac({commit}){commit('addmus')},
        lessac({commit}){commit('lessmus')}
    }
  })　　
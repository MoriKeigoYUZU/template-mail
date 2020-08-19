import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// export default new Vuex.Store({
export default new Vuex.Store({
// const store = new Vuex.Store({
  state: {
    counter: 1,

    flag: 1,


    My: {
      name: "確認用",
      department: "相手先",
      tel: "0800606006060",
      email: "kkk@gmail.com",
    },


    Destination: {
      name: "mormormormo",
      department: "ds",
      select: "gre",
    },


  },

  getters: {

    counter(state) {
      return state.counter
    },

    flag(state) {
      return state.flag
    },

    My(state) {
      return state.My
    },

    Destination(state) {
      return state.Destination
    },



  },

  mutations: {

    countUp(state) {
      state.counter++;
    },

    nameUpdata(state, items) {
      state.My = items;
    },

    flagUpdata(state, flag) {
      state.flag = flag;
    }

  },

  actions: {},

  modules: {},
})
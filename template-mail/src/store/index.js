import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// export default new Vuex.Store({
export default new Vuex.Store({
  // const store = new Vuex.Store({
  state: {

    pagesFlag: 1,
    myFlag: 0,
    destinationFlag: 0,

    buttonColor: {
      My: "grey",
      Destination: "white",
    },

    My: {
      name: '',
      department: '',
      tel: '',
      email: ''
    },

    Destination: {
      name: '',
      department: '',
      select: ''
    }

  },

  getters: {

    myFlag(state) {
      return state.myFlag
    },


    destinationFlag(state) {
      return state.destinationFlag
    },


    buttonColor(state) {
      return state.buttonColor
    },

    My(state) {
      return state.My
    }
    ,

    Destination(state) {
      return state.Destination
    },

    pagesFlag(state) {
      return state.pagesFlag
    }

  },

  mutations: {

    MyUpdata(state, items) {
      state.My = items
    },

    DestinationUpdata(state, items) {
      state.Destination = items
    },

    myFlag(state) {
      state.myFlag = 1;

      if (state.pagesFlag == 3) {
        state.pagesFlag = 1
        state.myFlagFlag = 0
      }
    },

    destinationFlag(state) {
      state.destinationFlag = 1

      if (state.pagesFlag == 3) {
        state.pagesFlag = 2
        state.destinationFlag = 0
      }

    },

    pagesFlag(state, items) {
      state.pagesFlag = items
      if (state.myFlag == 1 && state.destinationFlag == 1) {
        state.pagesFlag = 3
      }


      if (state.pagesFlag == 1) {
        state.buttonColor.My = "grey"
        state.buttonColor.Destination = "white"
      }else if(state.pagesFlag == 2){
        state.buttonColor.My = "white"
        state.buttonColor.Destination = "grey"
      }else{
        state.buttonColor.My = "white"
        state.buttonColor.Destination = "white"
      }
    },

  }
  ,

  actions: {}
  ,

  modules: {}
})

import Vue from 'vue'
import Vuex from 'vuex'

import programmingLanguages from './store/programmingLanguages'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    programmingLanguages
  }
})

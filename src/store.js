import Vue from 'vue'
import Vuex from 'vuex'

import programmingLanguages from './store/programmingLanguages'
import experience from './store/experience'
import baseInfo from './store/baseInfo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    programmingLanguages,
    experience,
    baseInfo
  }
})

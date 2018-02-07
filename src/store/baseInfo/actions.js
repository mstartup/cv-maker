import {setBaseInfo} from "./mutations";

export const fetchBaseInfo = ({commit}, payload) => {
  commit('setBaseInfo', payload)
}
export const updateBaseInfo = ({commit}, payload) => {
  commit('updateBaseInfo', payload)
}

export const deleteBaseInfo = ({commit}, payload) => {
  commit('deleteBaseInfo', payload)
}

export const setBaseInfoAction = ({commit}, payload) => {
  commit('setBaseInfoExample', payload)
}
export const fetchBaseInfo = ({commit}, payload) => {
  commit('setBaseInfo', payload)
}
export const updateBaseInfo = ({commit}, payload) => {
  commit('updateBaseInfo', payload)
}

export const deleteBaseInfo = ({commit}, payload) => {
  commit('deleteBaseInfo', payload)
}

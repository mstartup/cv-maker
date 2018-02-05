export const fetchExperience = ({commit}, payload) => {
  commit('setExperience', payload)
}
export const updateExperience = ({commit}, payload) => {
  commit('updateExperience', payload)
}

export const deleteExperience = ({commit}, payload) => {
  commit('deleteExperience', payload)
}

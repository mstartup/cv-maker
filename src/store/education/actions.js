export const fetchEducation = ({commit}, payload) => {
  commit('setEducation', payload)
}
export const updateEducation = ({commit}, payload) => {
  commit('updateEducation', payload)
}

export const deleteEducation = ({commit}, payload) => {
  commit('deleteEducation', payload)
}

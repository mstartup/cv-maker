export const fetchImage = ({commit}, payload) => {
  commit('setImage', payload)
}
export const deleteImage = ({commit}, payload) => {
  commit('deleteImage', payload)
}

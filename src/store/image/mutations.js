export const setImage = (state, payload) => {
  state.image.push(payload)
}
export const setLoadedImage = (state, payload) => {
  state.Image = payload
}
export const deleteImage = (state, payload) => {
  state.image = []
}

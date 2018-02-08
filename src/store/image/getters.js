export const image = state => {
  return state.image
}
export const imageToUpdate = state => {
  return (image) => {
    return state.setLoadedImage
  }
}

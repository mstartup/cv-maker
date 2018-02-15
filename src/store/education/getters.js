export const educations = state => {
  return state.educations
}
export const educationToUpdate = state => {
  return (educationId) => {
    return state.setLoadedEducations.find((education) => {
      return education.id === education.Id
    })
  }
}

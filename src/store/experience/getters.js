export const experiances = state => {
  return state.experiences
}
export const experianceToUpdate = state => {
  return (experienceId) => {
    return state.setLoadedExpereinces.find((experience) => {
      return experience.id === experience.Id
    })
  }
}

export const setExperience = (state, payload) => {
  state.experiences.push(payload)
}
export const setLoadedExpereinces = (state, payload) => {
  state.allExperiences = payload
}
export const deleteExperience = (state, payload) => {
  const experience = state.experiences.find(experience => {
    if (experience.id === payload.id) {
      return experience.id
    }
  })
  state.experiences.splice(state.experiences.indexOf(experience), 1)
}
export const updateExperience = (state, payload) => {
  const experience = state.experiences.find(experience => {
    return experience.id === payload.id
  })
  if (payload.compName) {
    experience.compName = payload.compName
  }
  if (payload.jobTitle) {
    experience.jobTitle = payload.jobTitle
  }
  if (payload.startDate) {
    experience.startDate = payload.startDate
  }
  if (payload.endDate) {
    experience.endDate = payload.endDate
  }
  if (payload.desc) {
    experience.desc = payload.desc
  }
}

export const setEducation = (state, payload) => {
  state.educations.push(payload)
}
export const setLoadedEducations = (state, payload) => {
  state.allEducations = payload
}
export const deleteEducation = (state, payload) => {
  const education = state.educations.find(education => {
    if (education.id === payload.id) {
      return education.id
    }
  })
  state.educations.splice(state.educations.indexOf(education), 1)
}
export const updateEducation = (state, payload) => {
  const education = state.educations.find(education => {
    return education.id === payload.id
  })
  if (payload.schoolTitle) {
    education.schoolTitle = payload.schoolTitle
  }
  if (payload.degreeTitle) {
    education.degreeTitle = payload.degreeTitle
  }
  if (payload.startDate) {
    education.startDate = payload.startDate
  }
  if (payload.endDate) {
    education.endDate = payload.endDate
  }
  if (payload.comment) {
    education.comment = payload.comment
  }
}

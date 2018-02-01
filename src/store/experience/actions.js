export const fetchExperience = ({commit}, payload) => {
  const experience = {
    compName: payload.compName,
    jobTitle: payload.jobTitle,
    startDate: payload.startDate,
    endDate: payload.endDate,
    desc: payload.desc
  }
  commit('setExperience', experience)
}

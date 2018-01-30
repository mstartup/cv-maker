import http from '../../http'

export const fetchProgrammingLanguages = ({commit}) => {
  http.get('/languages').then(data => commit('setProgrammingLanguages', data.data))
}

export const setBaseInfo = (state, payload) => {
  state.baseInfo.push(payload)
}
export const setBaseInfoExample = (state, payload) => {
  state.baseInfoExample = payload
}
export const setLoadedBaseInfo = (state, payload) => {
  state.allBaseInfo = payload
}
export const deleteBaseInfo = (state, payload) => {
  const baseInfo = state.baseInfo.find(baseInfo => {
    if (baseInfo.id === payload.id) {
      return baseInfo.id
    }
  })
  state.baseInfo.splice(state.baseInfo.indexOf(baseInfo), 1)
}
export const updateBaseInfo = (state, payload) => {
  const baseInfo = state.baseInfo.find(baseInfo => {
    return baseInfo.id === payload.id
  })
  if (payload.firstName) {
    baseInfo.firstName = payload.firstName
  }
  if (payload.lastName) {
    baseInfo.lastName = payload.lastName
  }
  if (payload.homeAdress) {
    baseInfo.homeAdress = payload.homeAdress
  }
  if (payload.mailAd) {
    baseInfo.mailAd = payload.mailAd
  }
  if (payload.phoneNum) {
    baseInfo.phoneNum = payload.phoneNum
  }
}

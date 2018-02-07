export const baseInfo = state => {
  return state.baseInfo
}
export const baseInfoToUpdate = state => {
  return (baseInfoId) => {
    return state.setLoadedBaseInfo.find((baseInfo) => {
      return baseInfo.id === baseInfo.Id
    })
  }
}

export const baseInfoExample = state => {
  return state.baseInfoExample
}
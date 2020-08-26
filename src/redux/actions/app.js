const types = {
  SET_APP_NAME: 'SET_APP_NAME',
}

const setAppName = (name) => ({
  type: types.SET_APP_NAME,
  payload: name
})

export default {
  types,
  setAppName
}

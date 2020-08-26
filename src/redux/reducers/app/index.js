import appActions from '../../actions/app'

const initialState = {
  name: 'React Redux Boilerplate'
}

export default function reducer(state = {...initialState}, action = {}) {
  const { type, payload = {} } = action

  switch ( type ) {
    case appActions.types.SET_APP_NAME:
      return {
        ...state,
        name: payload ? payload : initialState.name
      }
    default:
      return state
  }
}

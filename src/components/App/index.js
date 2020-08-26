import { connect } from 'react-redux'

import appActions from '../../redux/actions/app'

import App from './App'

const mapStateToProps = (state = {}) => {
  return state
}

const mapDispatchToProps = (dispatch) => ({
  setAppName: (name) => {
    dispatch(appActions.setAppName(name))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

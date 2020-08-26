import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import logger from 'redux-logger'

import createRootReducer from './reducers'

// History in Redux
export const history = createBrowserHistory()

export function configureStore(optionalMiddleware = []) {
  let middleware = [
    routerMiddleware(history),
    logger,
    ...optionalMiddleware
  ]

  const enhancers = compose(applyMiddleware(...middleware))

  const store = createStore(
    createRootReducer(history),
    {},
    enhancers
  )

  return store
}

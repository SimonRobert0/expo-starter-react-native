import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'

// Redux
import {
  createStore, applyMiddleware, combineReducers, compose
} from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import createSagaMiddleware from 'redux-saga'
import reducers from './src/redux/reducers'

// Redux saga
import rootSaga from './src/redux/rootSaga'
import RouterComponent from './src/Router'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    ...reducers
  }),
  compose(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(logger)
  )
)

const styles = {
  safeArea: {
    flex: 1
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.safeArea}>
          <RouterComponent />
        </SafeAreaView>
      </Provider>
    )
  }
}

sagaMiddleware.run(rootSaga)

export default App

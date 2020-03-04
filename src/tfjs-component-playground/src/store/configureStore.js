import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer'
import { loadState, saveState } from '../utilities'
import { logger } from './middleware'
import count from '../reducers/count'
import initialState from '../reducers/initialState'
import throttle from 'lodash-es/throttle'
import thunk from 'redux-thunk'

// enable logging in development
const configureStore =
  process.env.NODE_ENV === 'development'
    ? preloadedState =>
        createStore(
          state => state,
          preloadedState,
          compose(lazyReducerEnhancer(combineReducers), applyMiddleware(logger, thunk))
        )
    : preloadedState =>
        createStore(
          state => state,
          preloadedState,
          compose(lazyReducerEnhancer(combineReducers), applyMiddleware(thunk))
        )

const persistedState = loadState()
const store = configureStore({ ...initialState, ...persistedState })

store.addReducers({ count })

store.subscribe(
  throttle(() => {
    const state = store.getState()

    saveState(state)
  }, 1000)
)

export { store }

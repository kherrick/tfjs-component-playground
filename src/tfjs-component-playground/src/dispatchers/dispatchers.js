import { store } from '../store/configureStore'

import { navigate } from 'lit-redux-router'

import { decrementCount as decrementCountCreator, incrementCount as incrementCountCreator } from '../actions/creators'

export const decrementCount = () => store.dispatch(decrementCountCreator())
export const incrementCount = () => store.dispatch(incrementCountCreator())

export const navigateByPath = path => store.dispatch(navigate(path))

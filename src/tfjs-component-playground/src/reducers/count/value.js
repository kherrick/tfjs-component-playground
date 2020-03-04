import { createReducer } from '../../utilities'
import { DECREMENT, INCREMENT } from '../../actions/types'

export default createReducer(
  //initialState
  0,
  {
    // [DECREMENT](state, { payload }) {
    [DECREMENT](state) {
      return state - 1
    },
    // [INCREMENT](state, { payload }) {
    [INCREMENT](state) {
      return state + 1
    }
  }
)

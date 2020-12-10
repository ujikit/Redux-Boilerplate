import { combineReducers } from 'redux'

import test_all_reducer from './test_all_reducer'
import counter_all_reducer from './counter_all_reducer'

const appReducer = combineReducers({
  test_all_reducer: test_all_reducer,
  counter_all_reducer: counter_all_reducer,
})

export default appReducer

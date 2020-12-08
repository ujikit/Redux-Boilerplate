import { combineReducers } from 'redux'

import test_all_reducer from './test_all_reducer'

const appReducer = combineReducers({
  test_all_reducer: test_all_reducer,
})

export default appReducer

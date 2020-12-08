const initialState = {
  test_reducer: false,
}

const test_all_reducer = (state = initialState, action) => {
  console.log(action.type)
  console.log(action.payload)
  switch(action.type) {
    case 'FILTER_LOWEST_PRICE':
    return {
      ...state,
      test_reducer: action.payload,
    }
    default:
      return state;
  }
}

export default test_all_reducer

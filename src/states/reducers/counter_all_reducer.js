// Initial State
const initialState = {
  counter: 0,
};

// Redux: Counter Reducer
const counter_all_reducer = (state = initialState, action) => {
  console.log(action.type)
  console.log(action.payload)
  switch (action.type) {
    case 'INCREASE_COUNTER_ASYNC': {
      return {
        ...state,
        counter: state.counter + action.value,
      };
    }
    case 'DECREASE_COUNTER': {
      return {
        ...state,
        counter: state.counter - action.value,
      };
    }
    default: {
      return state;
    }
  }
};

// Exports
export default counter_all_reducer;

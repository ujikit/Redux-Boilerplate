const testDispatch = (data) => {
  return function(dispatch) {
    return dispatch({type: 'TEST', payload: data});
  };
};

export {
  testDispatch,
};

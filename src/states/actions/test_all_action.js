const testDispatch = () => {
  return function(dispatch) {
    return dispatch({type: 'TEST'});
  };
};

export {
  testDispatch,
};

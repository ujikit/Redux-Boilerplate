// Imports: Dependencies
import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';

// Increase Counter Async
function* increaseCounterAsync() {
  try {
    // fetch data then increment
    yield fetch('https://randomuser.me/api')
    .then(resp => resp.json())
    .then(users => {
      console.table('users', users);
      return users;
    });

    // Dispatch Action To Redux Store
    yield put({
      type: 'INCREASE_COUNTER_ASYNC',
      value: 1,
    });
  }
  catch (error) {
    // CHANGE LATER
    console.log(error);
  }
}

// Generator: Watch Increase Counter
export function* watchIncreaseCounter() {
  // // Take Every Action
  // yield takeEvery('INCREASE_COUNTER', increaseCounterAsync);

  // Take Last Action
  yield takeLatest('INCREASE_COUNTER', increaseCounterAsync);
}

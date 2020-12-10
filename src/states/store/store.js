import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer, autoRehydrate } from 'redux-persist';
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers';
import { rootSaga } from '../sagas';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'test_all_reducer'
  ],
  blacklist: [
  ],
  timeout: null
};

const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  applyMiddleware(
    ...middleware,
    sagaMiddleware
  ),
);

let persistor = persistStore(store);
sagaMiddleware.run(rootSaga)

export {
  store,
  persistor,
};

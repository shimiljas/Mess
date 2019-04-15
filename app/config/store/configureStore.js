// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

// import rootReducer from '../../redux/reducers';
// import loggingMiddleware from './middleware/logging';

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// /**
//  * Redux Store configuration function
//  * appliying middleware
//  * @param initialState intial state object
//  *  importing middleware and applying here
//  * ? should i create seprate middleware file
//  */
// const persistConfig = {
//   key: 'root',
//   storage
// };

// const configureStore = (initialState = {}) => {
//   const middleware = applyMiddleware(thunk, loggingMiddleware);
//   return createStore(persistedReducer, initialState, middleware);
// };

// export default configureStore;

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from '../../redux/index';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const loggerMiddleware = createLogger();
const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  middlewares.push(loggerMiddleware);
}

export default function configureStore() {
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);
  return { store, persistor };
}

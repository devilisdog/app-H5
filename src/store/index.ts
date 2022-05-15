import { applyMiddleware, createStore } from 'redux';
// 引入logger
import { createLogger } from 'redux-logger';
//引入中间件
import thunkMiddleware from 'redux-thunk';

//引入Reducer
import rootReducer from './reducers';

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger());
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const configureStore = (initialState?: any) => {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  return store;
};

export default configureStore();

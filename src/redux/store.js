import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

/*
  Middleware intercepts actions before they go into the reducer and modify or add thing to them.
  Thunks catch actions that are not objects i.e they are only concerned with functions. 
  Thunks make "dispatch" available as a parameter before going back to giving synchronous object-actions.
*/
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

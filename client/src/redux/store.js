import { createStore, applyMiddleware } from "redux";

import { logger } from "./middlewares";

import { 
  loadUserMiddleware,
  signInMiddleware,
  signUpMiddleware } 
from "./middlewares/auth.middlewares";

import { 
  setAlertMiddleware,
  toggleDarkModeLocalStorageMiddleware,
  setActiveNavMiddleware
 } 
from "./middlewares/ui.middlewares";

import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer";

const middlewares = [
  thunk,
  loadUserMiddleware,
  signInMiddleware,
  signUpMiddleware,
  setAlertMiddleware,
  toggleDarkModeLocalStorageMiddleware,
  setActiveNavMiddleware
];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

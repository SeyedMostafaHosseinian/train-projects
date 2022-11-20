import { createStore, applyMiddleware } from 'redux';
import { postsReducer } from './reducers/postsReducer';
import thunk from 'redux-thunk';
import logger from "redux-logger";

export const store = createStore(postsReducer, applyMiddleware(
  thunk,
  logger
))

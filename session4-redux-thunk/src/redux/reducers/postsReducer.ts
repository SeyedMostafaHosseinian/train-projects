import axios from "axios";
import { postActionInterface, postStateInterface } from '../interfaces';
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_SEND,
  FETCH_DATA_SUCCESS
} from '../actionTypes/requestActionTypes';
import produce from 'immer';

const initialState: postStateInterface = {
  lodaing: false,
  data: [],
  error: ""
}
export const postsReducer = (state: postStateInterface = initialState, action: postActionInterface) => {
  switch (action.type) {
    case FETCH_DATA_SEND :
      return produce(state, (draftObject: postStateInterface) => {
        draftObject.lodaing = true
      })
    case FETCH_DATA_SUCCESS:
      return produce(state, (draftObject: postStateInterface) => {
        draftObject.lodaing
        // @ts-ignore
        draftObject.data = action.payload
      })
    case FETCH_DATA_FAILURE :
      return produce(state, (draftObject: postStateInterface) => {
        draftObject.lodaing = false
        // @ts-ignore
        draftObject.error = action.payload
      })
    default :
      return state
  }
}


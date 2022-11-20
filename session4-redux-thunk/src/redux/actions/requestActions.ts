import { postActionInterface, postStateInterface } from '../interfaces';
import { store } from '../store';
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_SEND,
  FETCH_DATA_SUCCESS
} from '../actionTypes/requestActionTypes';
import axios from 'axios';

export const sendRequest = (): postActionInterface => {
  return {
    type: FETCH_DATA_SEND
  }
}
export const succesGet = (data: []): postActionInterface => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  }
}
export const failureGet = (error: string): postActionInterface => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error
  }
}
export const fetchData = () => {
  return (dispatch:any) => {
    dispatch(sendRequest())
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => dispatch(succesGet(response.data)))
      .catch(error => dispatch(failureGet(error)))
  }
}

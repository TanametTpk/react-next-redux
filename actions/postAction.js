    
import { FETCH_POST , ADD_POST } from './types'

export const fetchPosts = () => dispatch => {
    //do something
    dispatch({
        type: FETCH_POST,
        payload: ["1" , "2" , "3"]
    })
}

export const addPosts = () => dispatch => {
    //do something
    dispatch({
        type: ADD_POST,
        payload: ["1" , "2" , "3"]
    })
}
import axios from 'axios'
import * as api from '../api'
import * as cons from '../constants/actionType'
//Action creators

export const getPosts = () => async (dispatch) => {
    
    try {
        const { data } = api.fetchPosts();

            dispatch({ type: cons.FETCH_ALL, payload: data })

   
    } catch (err) {
     console.log(err + 'from actions ')   
    }

}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({type:cons.CREATE ,payload:data})
    } catch (err) {
        console.log(err);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: cons.UPDATE, payload: data });
    } catch (err) {
        console.log(err)
    }
}

export const deletePost =(id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({type:cons.DELETE ,payload : id})
    } catch (err) {
        console.log(err)
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await  api.likePost(id);

        dispatch({ type: cons.LIKE, payload: data });
    } catch (err) {
        console.log(err)
    }
}
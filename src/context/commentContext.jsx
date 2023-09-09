import React, {createContext, useContext, useReducer} from "react";
import reducer from "../reducers/commentReducer";
import {
    GET_COMMENTS_BY_POST_BEGIN,
    GET_COMMENTS_BY_POST_SUCCESS,
    GET_COMMENTS_BY_POST_ERROR
} from "../utils/constants";
import axios from "../api/axios";
import { COMMENTS_URL } from "../utils/constants";

const initialState = {
    commentsByPostLoading: false,
    commentsByPostError: false,
    comments: []
}

const CommentContext = createContext({ });
export const CommentProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchCommentsByPost = async(id) => {
        dispatch({type: GET_COMMENTS_BY_POST_BEGIN});
        try{
            const response = await axios.get(`${COMMENTS_URL}/${id}`);
            dispatch({type: GET_COMMENTS_BY_POST_SUCCESS, payload: response.data})
        } catch(err){
            console.log(err);
            dispatch({type: GET_COMMENTS_BY_POST_ERROR});
        }
    }

    return (
        <CommentContext.Provider value = {{
            ...state,
            fetchCommentsByPost
        }}>
            {children}
        </CommentContext.Provider>
    )
}

export const useCommentContext = () => {
    return useContext(CommentContext);
}
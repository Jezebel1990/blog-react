import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/blogsReducer";
import {
    GET_BLOGS_BEGIN,
    GET_BLOGS_ERROR,
    GET_BLOGS_SUCCESS,
    GET_SINGLE_BLOG_BEGIN,
    GET_SINGLE_BLOG_ERROR,
    GET_SINGLE_BLOG_SUCCESS,
    GET_BLOG_BY_SEARCHTERM_BEGIN,
    GET_BLOG_BY_SEARCHTERM_SUCCESS,
    GET_BLOG_BY_SEARCHTERM_ERROR,
    SET_SEARCH_TERM
} from "../utils/constants";
import axios from "../api/axios";
import { BLOG_URL } from "../utils/constants";
import { SEARCH_URL } from "../utils/constants";

const initialState = {
    blogsLoading: false,
    blogsError: false,
    blogs: [],
    singleBlogLoading: false,
    singleBlogError: false,
    singleBlog: [],
    searchTerm: "",
    searchBlogsLoading: false,
    searchBlogsError: false
}

const BlogsContext = createContext({});
export const BlogsProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const fetchBlogs = async() => {
        dispatch({type: GET_BLOGS_BEGIN});
        try{
            const response = await axios.get(BLOG_URL);
            dispatch({type: GET_BLOGS_SUCCESS, payload: response.data});
        } catch(err){
            console.log(err);
            dispatch({type: GET_BLOGS_ERROR});
        }
    }

    const fetchSingleBlog = async(id) => {
        dispatch({type: GET_SINGLE_BLOG_BEGIN});
        try{
            const response = await axios.get(`${BLOG_URL}/${id}`);
            dispatch({type: GET_SINGLE_BLOG_SUCCESS, payload: response.data});
        } catch(err){
            console.log(err);
            dispatch({type: GET_SINGLE_BLOG_ERROR});
        }
    }

    // alterar
    const fetchBlogsFromSearch = async (searchTerm) => {
        dispatch({ type: GET_BLOG_BY_SEARCHTERM_BEGIN });
        try {
          const response = await axios.get(`${BLOG_URL}`);
          
          if (response.status === 200) {
            // Filtra os posts com base na palavra-chave inserida
            const filteredBlogs = response.data.filter(post => {
              return post.title.includes(searchTerm) || post.body.includes(searchTerm);
            });
      
            dispatch({ type: GET_BLOG_BY_SEARCHTERM_SUCCESS, payload: filteredBlogs });
          } else {
            dispatch({ type: GET_BLOG_BY_SEARCHTERM_ERROR });
          }
        } catch (err) {
          console.log(err);
          dispatch({ type: GET_BLOG_BY_SEARCHTERM_ERROR });
        }
      };

      
    const setSearchTerm = (searchTerm) => {
        dispatch({type: SET_SEARCH_TERM, payload: searchTerm});
    }

    useEffect(() => {
        fetchBlogs();
    }, []);
    

    return (
        <BlogsContext.Provider value = {{
            ...state,
            fetchSingleBlog,
            fetchBlogsFromSearch,
            setSearchTerm
        }}>
            {children}
        </BlogsContext.Provider>
    )
} 

export const useBlogsContext = () => {
    return useContext(BlogsContext);
}
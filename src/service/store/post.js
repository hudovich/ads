import {api} from "../API/api";

const SET_VIEV = 'SET_VIEV';
const GET_POST = 'GET_POST';
const GET_SINGLE = 'GET_SINGLE';
const EDIT_POST = 'EDIT_POST';

const initialState = {
    posts:[],
    single: null,
    editPostSingle: null,
    viewPost:true,
}

const post = (state=initialState, action)=>{
    switch(action.type){
        case SET_VIEV:
            return{
                ...state,
                viewPost: !state.viewPost,
            }
        case GET_POST:
            return {
                ...state,
                posts: action.posts,
            }
        case GET_SINGLE:
            return{
                ...state,
                single: action.my,
            }
        case EDIT_POST:
            return{
                ...state,
                editPostSingle: action.data
            }
        default:
            return state
    }
}

export const setViev = () => ({type:SET_VIEV});
export const getPost = (posts) => ({type:GET_POST, posts});
export const getSingle = (my) => ({type:GET_SINGLE, my});
export const editPost = (data) => ({type:EDIT_POST, data});


export const postThunk = (activeId, data) =>{
    return (dispatch) => {
        switch(activeId.type){
            case "GET_EDIT":
                return(
                    api.post.getSinglePost(data).then( response =>{
                        dispatch(editPost(response.data));
                    })  
                )
            case "EDIT":
                return (
                    api.post.editPost(data.id, data).then( response =>{
                        console.log(response.data)
                    })
                )
            case "ADD":
                return (
                    api.post.addPost(data).then( response =>{
                        console.log(response.data)
                    })
                )
            case "DELETE":
                return(
                    api.post.delite(data).then( response =>{
                        console.log(response.data)
                    })
                )
            case "CATEGORY":
                return(
                    api.post.getPostCat(data).then( response =>{
                        dispatch(getPost(response.data));
                    })  
                )
            case "POST_SINGLE": 
                return(
                    api.post.getSinglePost(data).then( response =>{
                        dispatch(getSingle(response.data));
                    })
                )
            case "POST_ALL":
                return(
                    api.post.getPost()
                    .then( response =>{
                        dispatch(getPost(response.data));
                    })
                )
            case "SEARCH":
                return(
                    api.post.setPostSearch(data).then( response => {
                        dispatch(getPost(response.data));
                    }) 
                )
            default:{
                return(
                    api.post.getPost()
                    .then( response =>{
                        dispatch(getPost(response.data));
                    })
                )
            }
        }
    }
}

export default post

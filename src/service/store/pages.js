import {api} from '../API/api'

const GET_PAGES = 'GET_PAGES'
const GET_PAGES_HOME = 'GET_PAGES_HOME'

const initialState = {
    pages:null,
    pagesHome: null,
}

const pages = (state=initialState, action) => {
    switch(action.type){
        case GET_PAGES:
            return {
                ...state,
                pages: action.pages
            }
        case GET_PAGES_HOME:
            return {
                ...state,
                pagesHome: action.pages
            }
        default: 
            return state
    }
}

const setPages = (pages) => {return {type:GET_PAGES, pages}}
const setPagesHome = (pages) => {return {type:GET_PAGES_HOME, pages}}

export const PagesThank = (actionId, data) => {
    return (dispatch) => {
        switch (actionId.type){
            case 'PAGES_ALL':
                api.pages.getPages().then(response =>{
                    dispatch(setPages(response.data))
                })
                break;
            case 'PAGES':
                api.pages.getPagesID(data).then(response =>{
                    dispatch(setPagesHome(response.data))
                })
                break;
            default:
                break;
        }
    }
}

export default pages
import { api } from '../API/api'
const CATEGORY = 'CATEGORY'

const initialState = {
    categories:[
        {id:1, name: 'Пример категории', description: 'Пример описания', img:'', url: ''},
    ]
};

const category = (state = initialState, action) =>{
    switch(action.type){
        case CATEGORY:
            return {
                ...state,
                categories: action.cat
            }
        default:
            return state
    }
}
const setCategory = (cat) => {return{type:CATEGORY, cat}}

export const CategoryThank = (activeID, data) =>{
    return (dispatch) => {
        switch(activeID.type){
            case "CATEGORY":
                api.category.getCategory().then((response) =>{
                    dispatch(setCategory(response.data))
                })
                break;
            default:
                break;
        }
    }
}

export default category;
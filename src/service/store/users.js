import { api } from '../API/api'

const POST = 'POST';
const LOGIN = 'LOGIN';
const EXIT = 'EXIT';
const RECIPIENT_USER ='RECIPIENT_USER';

const initialState = {
    acaunt: null,
    userPost: null,
    recipient: null,
}
const User = (state=initialState, action) => {
    switch (action.type){
        case LOGIN:
            return {
                ...state,
                acaunt: action.data
            }
        case POST:
            return{
                ...state,
                userPost: action.post
            }
        case RECIPIENT_USER:
            return{
                ...state,
                recipient: action.data
            }
        case EXIT:
            return{
                ...state,
                acaunt: null,
                userPost: null,
            }
        default:
            return state
    }

}
const getLogins = (data) => ({type:LOGIN, data})
const setPost = (post) => ({type:POST, post})
const exits = () => ({type:EXIT})
const recipientUser = (data) => ({type:RECIPIENT_USER, data})

export const usersThank = (activeID, data) => {
    return (dispatch) => {
        switch (activeID.type){
            case "REGISTRATION":
                api.authorization.registration(data);
                break;
            case "LOGIN":
                api.authorization.login(data)
                .then((response)=>{
                    dispatch (getLogins(response.data.user))
                    localStorage.setItem('token', response.data.accessToken);
                    localStorage.setItem('email', response.data.user.email);
                })
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data)
                    }
                })
                break;
            case "EXIT":
                localStorage.clear();
                dispatch(exits());
                break;
            case "DATA_ACAUNT":
                api.acaunt.setUser()
                .then((response)=>{
                    dispatch (getLogins(...response.data))
                    api.acaunt.setUserPost(response.data[0].id)
                    .then((response)=>{
                        dispatch (setPost(response.data))
                    });
                })
                break;
            case "SET_USER_ID": 
                api.acaunt.setUserID(data).then((response)=>{
                    dispatch(recipientUser(response.data))
                })
                break;
            case "DELETE_ACAUNT":
                api.acaunt.delete(data)
                .then(()=>{
                    localStorage.clear();
                    dispatch (exits())
                })
                break;
            case "EDIT":
                api.acaunt.editAcaunt(data.id, data.data, data.images)
                    .then(res => {
                        console.log(res); 
                    })
                    .catch(function (error) {
                        console.log(error);
                    }
                )
                break;
            default:
                break;
        }
    }
}
export default User

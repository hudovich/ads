import {api} from '../API/api'
const CHAT = 'SET_CHAT'
const GET_CHAT_ID = 'GET_CHAT_ID';

const initialState = {
    massage:null,
    chat: null,
}

const Massage = (state=initialState, active) =>{
    switch(active.type){
        case CHAT:
            return{
                ...state,
                massage: active.data,
            }
        case GET_CHAT_ID:
            return{
                ...state,
                chat: active.data,
            }
        default:
            return state;
    }
}

const getMassage = (data) => ({type:CHAT, data})
const getChat = (data) => ({type:GET_CHAT_ID, data})

export const massageThank = (actionID, data) =>{
    return (dispatch) => {
        switch(actionID.type){
            case 'CREATE_CHAT':
                const startData = {
                    idUsers: data.idUsers,
                    recipient: data.massageUser,
                    massage: []
                }
                api.chat.createMassage(startData).then(response=>{
                    console.log('Новый чат')
                })
                break;
            case 'SET_ALL_CHAT':{
                api.chat.setAllChat().then(response=>{
                    dispatch(getMassage(response.data))
                })
                break;
            }
            case 'SET_CHAT':                 
                api.chat.setChatUser(data).then(response=>{
                    dispatch(getMassage(response.data))
                }) 
                break;
            case 'SET_CHAT_ID':
                api.chat.setChatID(data).then(response=>{
                    dispatch(getChat(response.data))
                })
                break;
            case 'DEL_CHAT':
                api.chat.setDelChat(data).then(responce=>{
                    console.log('Чат удален')
                })
                break;
            case 'PUSH_MASSAGE':
                const startDate = {
                    id: data.id,
                    idUsers: data.idUsers,
                    recipient: data.recipient,
                    massage: data.massage,
                }
                api.chat.setPushMassage(data.id, startDate).then(response=>{
                    console.log('Сообщение отправленно')
                })
                break;
            default:
                break;
        }
    }
}

export default Massage;
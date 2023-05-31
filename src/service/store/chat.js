import {api} from '../API/api'
const CHAT = 'SET_CHAT'

const initialState = {
    massage:null
}

const Massage = (state=initialState, active) =>{
    switch(active.type){
        case CHAT:
            return{
                ...state,
                massage: active.data,
            }
        default:
            return state;
    }
}

const getMassage = (data) => ({type:CHAT, data})

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
                    dispatch(getMassage(response.data))
                })
                break
            default:
                break;
        }
    }
}

export default Massage;
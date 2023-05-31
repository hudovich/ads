import Chat from './Chat'
import {connect} from 'react-redux'
import {usersThank} from '../../../service/store/users'
import {massageThank} from '../../../service/store/chat'

let mapStateToProps = (state) => {
    return{
        massage: state.massage.massage,
        users: state.user.acaunt,
    }
}

const ChatBox = connect(mapStateToProps,{massageThank, usersThank})(Chat);
export default ChatBox;
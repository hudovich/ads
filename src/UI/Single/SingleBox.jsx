import Single from './Single'
import {connect} from 'react-redux'
import {postThunk} from './../../service/store/post'
import {usersThank} from './../../service/store/users'
import {massageThank} from './../../service/store/chat'

const mapStateToProps = (state) => {
    return{
        single: state.post.single,
        defaultUser: state.user.acaunt,
        recipient: state.user.recipient,
        message: state.massage.massage,
    }
}

const SingleBox = connect(mapStateToProps,{postThunk, usersThank, massageThank})(Single);
export default SingleBox

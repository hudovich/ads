import {connect} from 'react-redux'
import User from './User'
import {usersThank} from '../../service/store/users'

const mapStateToProps = (state) =>{
    return{
        acaunt: state.user.acaunt,
        post: state.user.userPost
    }
}

const UserBox = connect(mapStateToProps, {usersThank})(User);

export default UserBox

import Login from './Login'
import { connect } from 'react-redux'
import { usersThank } from '../../service/store/users'

let mapStateToProps = (state) => {
    return{
        init: state.init,
        acaunt: state.user.acaunt,
    }
}

const LoginBox = connect(mapStateToProps, {usersThank})(Login)
export default LoginBox
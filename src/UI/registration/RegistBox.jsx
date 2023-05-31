import { connect } from 'react-redux'
import Regist from './Regist'
import { usersThank } from '../../service/store/users'

let mapStateToProps = (state) => {
    return{
        init: state.init,
    }
}

const RegistBox = connect(mapStateToProps, {usersThank})(Regist)
export default RegistBox
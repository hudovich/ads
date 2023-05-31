import editAcaunt from './EditAcaunt'
import {connect} from 'react-redux'
import {usersThank} from '../../../service/store/users'

const mapStateToProps = (state) => {
    return{
        user: state.user.acaunt
    }
}

const editAcauntBox = connect(mapStateToProps, {usersThank})(editAcaunt)

export default editAcauntBox
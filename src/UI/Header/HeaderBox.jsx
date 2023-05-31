import { connect } from 'react-redux';
import Header from './Header'
import {usersThank} from '../../service/store/users'
import {postThunk} from '../../service/store/post'

let mapStateToProps = (store) => {
    return {
        store: store.init,
        isLogin: store.user.acaunt
    }
}

const HeaderBox = connect(mapStateToProps, {usersThank, postThunk})(Header);
export default HeaderBox;
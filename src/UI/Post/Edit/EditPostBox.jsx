import { connect } from 'react-redux'
import EditPost from './EditPost'
import {usersThank} from '../../../service/store/users'
import { postThunk } from '../../../service/store/post'

let mapStateToProps = (state) => {
    return{
        post: state.post.editPostSingle,
        users: state.user.acaunt,
        category: state.category.categories
    }
}

let EditPostBox = connect(mapStateToProps, {usersThank, postThunk})(EditPost);

export default EditPostBox;
import { connect } from 'react-redux';
import Post from './Post';
import {setViev, postThunk} from './../../service/store/post'

let mapStateToProps = (state) =>{
    return{
        post: state.post.posts,
        viewPost: state.post.viewPost,
        category: state.category.categories,
    }
}

const PostBox = connect (mapStateToProps, {setViev, postThunk})(Post);
export default PostBox
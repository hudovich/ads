import Footer from './Footer'
import { connect } from 'react-redux';
import {PagesThank} from '../../service/store/pages'
import {postThunk} from '../../service/store/post'

const mapStatetoProps = (state) => {
    return{
        init: state.init,
        categories: state.category.categories,
        pages: state.pages.pages,
    }
}

const FooterBox = connect(mapStatetoProps,{PagesThank, postThunk})(Footer);
export default FooterBox
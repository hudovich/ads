import { connect } from 'react-redux'
import Categories from './Categories'
import {CategoryThank} from '../../service/store/category'
import {postThunk} from '../../service/store/post'

const mapStateToProps = (state) => {
    return{
        state: state.category.categories,    
    }
}

const CategoriesBox = connect(mapStateToProps, {CategoryThank, postThunk})(Categories);

export default CategoriesBox
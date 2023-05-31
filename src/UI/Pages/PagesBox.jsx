import Pages from './Pages'
import {connect} from 'react-redux'
import {PagesThank} from '../../service/store/pages'


const mapStateToProps = (state) => {
    return {
        pages: state.pages.pagesHome
    }
}

const PagesBox = connect(mapStateToProps, {PagesThank})(Pages) 

export default PagesBox
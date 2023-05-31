import { connect } from "react-redux"
import Massage from "./Massage"
import {massageThank} from "../../service/store/chat"
import {usersThank} from "../../service/store/users"

const mapStateToProps = (state) =>{
    return{
        massage: state.massage.massage,
        users: state.user.acaunt,
    }
}

const MassageBox = connect(mapStateToProps, {massageThank, usersThank})(Massage);

export default MassageBox;
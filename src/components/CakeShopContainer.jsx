
// here we will connect redux store with the help of connect from rect-redux

import { connect } from "react-redux";
import { buyCake } from "../redux/cakeShopFeature/cakeAction";


const mapStateToProps = ({ cake: state }) => {
    return {
        numOfCake: state.numOfCake
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyCakeCallback: () => dispatch(buyCake())
    }
}

function CakeShopContainer(props) {

    return <div>
        <div>Total Cake Available in store: {props.numOfCake}</div>
        <button onClick={props.buyCakeCallback}>Buy Cake</button>
    </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeShopContainer)
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cakeShopFeature/cakeAction";

// in  functional component try to use hooks api only instead of connect api(in class component that is the only solution)


function CakeShopContainer() {
   const numOfCake = useSelector((state) => state.cake.numOfCake) ; // callback will get access of redux store;
   const dispatch = useDispatch();
    return <div>
        <div>Total Cake Available in store: {numOfCake}</div>
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
}

export default CakeShopContainer;
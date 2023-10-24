import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux/iceCreamFeature/iceCreamAction";



const HookIceCreamContainer = () => {
    const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
    const dispatch = useDispatch();
    return <div>
        <div>num of iceCreams in the store:{numOfIceCreams}</div>
        <button onClick={() => dispatch(buyIceCream())}>Buy IceCreams</button>
    </div>
}

export  default HookIceCreamContainer;
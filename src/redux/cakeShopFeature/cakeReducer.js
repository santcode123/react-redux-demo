
// reducer will take care of state managment in the redux store
import { BUY_CAKE } from "./cakeTypes";

const initialState = {
    numOfCake: 10,
};

const cakeReducer = (state = initialState, action) => {
    switch(action.type){
     case BUY_CAKE: {
        return {
            ...state,
            numOfCake: state.numOfCake - 1
        }
     }
     default: {
        return state
     }
    }
}

export { cakeReducer }
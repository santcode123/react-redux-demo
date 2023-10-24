import { cakeReducer } from './cakeShopFeature/cakeReducer';
import { iceCreamReducer } from './iceCreamFeature/iceCreamReducer';
import { combineReducers, applyMiddleware } from 'redux';
import usersReducer from './users/userReducer';
import thunk from 'redux-thunk'



const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    users: usersReducer
});

export { rootReducer }
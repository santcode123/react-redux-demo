import { createStore } from 'redux';
import { rootReducer } from './rootReducer';
import {applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';



// latest redux library is redux toolkit we can use that but basic understanding we need to go through redux first

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;
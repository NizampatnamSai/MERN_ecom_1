import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './Reducers/index'
import thunk from 'redux-thunk'
const initialstate={}

const middlewares=[thunk]
const store=createStore(rootReducer,initialstate,composeWithDevTools(applyMiddleware(...middlewares)))
export default store;

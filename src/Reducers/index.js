// import { combineReducers } from "redux";
// import authreducer from "./authReducrs";
// import loadreducer from "./loadReducer";
// import ProductReducer from "./ProductReducer";
// import CategoryReducer from "./CategoryReducer";

// export default combineReducers({
//     authreducer,loadreducer,
//     ProductReducer,CategoryReducer
//     // Same as 
//     // authreducer:authreducer
//     // loadreducer:loadreducer
// })

import { combineReducers } from "redux";
import auth from './authReducrs'
import loader from './loadReducer'
import products from './ProductReducer'
import categories from './CategoryReducer'

export default combineReducers({
    auth,
    loader,
    products,
    categories
})
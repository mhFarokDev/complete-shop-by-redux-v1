import {combineReducers} from 'redux'
import productReducer from './product/productReducer';

// combine reducer
const rootReducer = combineReducers({
    product : productReducer,
})


export default rootReducer;
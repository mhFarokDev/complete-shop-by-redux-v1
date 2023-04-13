import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension'

// redux-thunk
import thank from 'redux-thunk'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thank)))




export default store
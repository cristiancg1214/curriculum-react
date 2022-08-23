import { legacy_createStore as createStore, combineReducers } from "redux";
import dataHeaderReducer from './header/reducer'

const reducers=combineReducers({
    dataHeaderReducer
})
const store=createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store
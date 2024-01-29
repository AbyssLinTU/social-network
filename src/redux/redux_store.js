import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"; 
import profileReducer from "./profile_reducer";
import dialogsReducer from '../redux/dialogs_reducer'
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import { thunk } from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import AppReducer from "./app_reducer";
import { compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";


let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    app:AppReducer,
});

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
//let store = createStore(reducers,composeEnhancers(applyMiddleware(...thunk)));
let store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
//window.store=store;

export default store;

//export default createStore(combineReducers(reducers, window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(thunk)))
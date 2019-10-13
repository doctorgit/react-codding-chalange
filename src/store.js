import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from 'redux-thunk';

import * as reducers from "./state"; // import all reducers

const stringMiddleware = () => (nextDispatch) => (action) => {
    if (typeof action === 'string') {
        return nextDispatch({
            type: action
        });
    }
    return nextDispatch(action);
};

const rootReducer = combineReducers(reducers);
const store = createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware, stringMiddleware)
    );

export default store;



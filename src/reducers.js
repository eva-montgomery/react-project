import {
    ADD_WINE,
    DEL_WINE,
    SEARCH, 
    RESULTS,
    LOADING,
    SIGNUP,
    LOGIN, 
    LOGOUT

} from "./actions"

let savedData = localStorage.getItem("Wine-O-Clock");
savedData = savedData ? JSON.parse(savedData) : []

// import {combineReducers} from 'redux';

export function wines(state=savedData, action) {
    const newState = [...state];

    switch(action.type) {
        case ADD_WINE:
            newState.push(action.payload.wine);
            break;
        case DEL_WINE:
            newState.splice(action.payload.index, 1);
            break;
        default:
            break;    
    }
    localStorage.setItem("Wine-O-Clock", JSON.stringify(newState));
    return newState;
}


const defaultState = {
    query: '',
    results: [],
    isLoading: false
}
export function wineSearch(state=defaultState, action) {
    switch(action.type) {
        case SEARCH:
            return {
                ...state,
                query: action.payload.query,                
            }            
        case RESULTS:
            return {
                ...state,
                results: action.payload.wines
            }
        case LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        default:
            return {
                ...state,
            }    
    }
}

export function user(state=false, action) {
    const newState = state;

    switch(action.type) {
        case LOGIN:
           return action.payload.login;
            break;
        case SIGNUP:
            return action.payload.signup;
            break;     
        case LOGOUT:
            return action.payload.logout;
            break;     
        default:
            return state           
    }
}
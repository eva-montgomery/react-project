import {
    ADD_WINE,
    DEL_WINE,
    SEARCH, 
    RESULTS,
    LOADING,
    SIGNUP,
    USERTAKEN,
    LOGIN, 
    LOGOUT,
    PROFILE,
    EDIT_PROFILE

} from "./actions"

// let savedData = localStorage.getItem("Wine-O-Clock");
// savedData = savedData ? JSON.parse(savedData) : []

// import {combineReducers} from 'redux';
// state=savedData

export function wines(state=[], action) {
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
    // localStorage.setItem("Wine-O-Clock", JSON.stringify(newState));
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

export function user(state= {
    isLoggedIn: false,
    isUserTaken: false,
    didSignup: false
}, 
action) {
    const newState = state;

    switch(action.type) {
        case LOGIN:
           return {
               ...state,
               isLoggedIn: true
           }
            break;
        case SIGNUP:

            return {
                ...state,
              isUserTaken: false,
              didSignup: true
            }
            break;     
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            }
            break;     
        case USERTAKEN:
            return {
                 
                didSignup: false,
                isUserTaken: true
            }
            break;    
        default:
            return state           
    }
}

export function profile(state=[], action) {
    const newState = [...state];

    switch(action.type) {
        case PROFILE:
            return {
                ...state,
            }   
            break;
        case EDIT_PROFILE:
            return {
                ...state,
            }            
            break;
        default:
            break;    
    }
}
import {
    ADD_WINE,
    DEL_WINE,
    GET_PERSONAL_WINES,
    SEARCH, 
    RESULTS,
    LOADING,
    SIGNUP,
    USERTAKEN,
    LOGIN, 
    LOGOUT,
    PROFILE,
    EDIT_PROFILE,
    EDIT_WINE,
    MY_SEARCH,
    MY_RESULTS,
    MY_LOADING

} from "./actions"

import axios from 'axios';
axios.defaults.withCredentials = true;

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
        case EDIT_WINE:
            return action.payload.wines;
            break;   
        case GET_PERSONAL_WINES:
            return action.payload.wines
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
        case MY_SEARCH:
            return {
                ...state,
                query: action.payload.query,                
            }            
        case MY_RESULTS:
            return {
                ...state,
                results: action.payload.wines
            }
        case MY_LOADING:
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
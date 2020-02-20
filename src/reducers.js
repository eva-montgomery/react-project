import {
    ADD_WINE,
    DEL_WINE,
    SEARCH, 
    RESULTS,
    SELECT,
    LOADING

} from "./actions"


// import {combineReducers} from 'redux';

export function wines(state=[], action) {
    const newState = [...state];

    switch(action.type) {
        case ADD_WINE:
            newState.push(action.payload.wine);
            break;
        default:
            break;    
    }
    return newState;
}

export function DelWines(state=[], action) {
    const newState = [...state];

    switch(action.type) {
        case DEL_WINE:
            newState.splice(0, 1);
            break;
        default:
            break;    
    }
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
                results: action.payload.results
            }
        case LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case SELECT:
            return {
                ...state,
            }
    }
}

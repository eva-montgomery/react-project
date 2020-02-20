import {
    ADD_WINE,
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

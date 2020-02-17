import {
    ADD_WINE,
    WINE_RATING,

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
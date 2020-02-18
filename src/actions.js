export const ADD_WINE = 'ADD_WINE';
export const WINE_RATING = 'WINE_RATING';

export const SEARCH = 'SEARCH';
export const SELECT = 'SELECT';
export const RESULTS = 'RESULTS';
export const LOADING = 'LOADING';

export function actionAddWine(wine) {
    return ({
        type: ADD_WINE,
        payload: {
            wine
        }
    })
}
export function actionLoading(isLoading) {
    return {
        type: LOADING,
        payload: {
            isLoading
        }
    }
}

export function actionResults(results) {
    return {
        type: RESULTS,
        payload: {
            results
        }
    } 
}

export function actionSearch(query) {
    return {
        type: SEARCH,
        payload: {
            query
        }
    }
}

export function actionSelect(id) {
    return {
        type: SELECT,
        payload: {
            id
        }
    }
}

// export function actionWineRating() {
//     return ({
//         type: WINE_RATING,
//         payload: {
//             XX
//         }
//     })
// }



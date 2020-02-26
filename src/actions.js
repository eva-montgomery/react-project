export const ADD_WINE = 'ADD_WINE';
export const DEL_WINE = 'DEL_WINE';

export const SEARCH = 'SEARCH';
export const SELECT = 'SELECT';
export const RESULTS = 'RESULTS';
export const LOADING = 'LOADING';

export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export const LOGOUT = 'LOGOUT';

export function actionAddWine(wine) {
    return ({
        type: ADD_WINE,
        payload: {
            wine
        }
    })
}

export function actionDelWine(winelist, index) {
    return ({
        type: DEL_WINE,
        payload: {
            winelist,
            index
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

export function actionResults(wines) {
    return {
        type: RESULTS,
        payload: {
            wines
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

export function actionLogin(login) {
    return {
        type: LOGIN,
        payload: {
            login
        }
    }
}

export function actionSignup(signup) {
    return {
        type: SIGNUP,
        payload: {
            signup
        }
    }
}

export function actionLogout(logout) {
    return {
        type: LOGOUT,
        payload: {
            logout
        }
    }
}

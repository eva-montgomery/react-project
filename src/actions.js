export const ADD_WINE = 'ADD_WINE';
export const DEL_WINE = 'DEL_WINE';
export const EDIT_WINE = 'EDIT_WINE';
export const GET_PERSONAL_WINES = 'GET_PERSONAL_WINES';

export const SEARCH = 'SEARCH';
export const SELECT = 'SELECT';
export const RESULTS = 'RESULTS';
export const LOADING = 'LOADING';

export const MY_SEARCH = 'MY_SEARCH';
export const MY_RESULTS = 'MY_RESULTS';
export const MY_LOADING = 'MY_LOADING';


export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export const USERTAKEN = "USERTAKEN";
export const LOGOUT = 'LOGOUT';
export const PROFILE = 'PROFILE';
export const EDIT_PROFILE = 'EDIT_PROFILE';

export function actionAddWine(wine) {
    return ({
        type: ADD_WINE,
        payload: {
            wine
        }
    })
}

export function getPersonalWines(wines) {
    return ({
        type: GET_PERSONAL_WINES,
        payload: {
            wines
        }
    })
}

export function editWine(wines) {
    return ({
        type: EDIT_WINE,
        payload: {
            wines
        }
    })
}

export function actionDelWine(winelist, index) {
    console.log('in action del wine', winelist)
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


export function actionMyLoading(isLoading) {
    return {
        type: MY_LOADING,
        payload: {
            isLoading
        }
    }
}

export function actionMyResults(wines) {
    return {
        type: MY_RESULTS,
        payload: {
            wines
        }
    } 
}

export function actionMySearch(query) {
    return {
        type: MY_SEARCH,
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

export function actionLogin() {
    return {
        type: LOGIN,
        
    }
}

export function actionSignup() {
    return {
        type: SIGNUP,
        
    }
}

export function actionUserTaken() {
    return {
        type: USERTAKEN,

    }
}

export function actionLogout() {
    return {
        type: LOGOUT,

    }
}

export function actionProfile(profile) {
    return {
        type: PROFILE,
        payload: {
            profile
        }

    }
}

export function actionEditProfile(profile) {
    return ({
        type: EDIT_PROFILE,
        payload: {
            profile
        }
    })
}

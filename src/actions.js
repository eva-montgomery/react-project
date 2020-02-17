export const ADD_WINE = 'ADD_WINE';
export const WINE_RATING = 'WINE_RATING';


export function actionAddWine(wine) {
    return ({
        type: ADD_WINE,
        payload: {
            wine
        }
    })
}

// export function actionWineRating() {
//     return ({
//         type: WINE_RATING,
//         payload: {
//             XX
//         }
//     })
// }



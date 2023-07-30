export const algorithmNames = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ALGORITHM_NAMES_SUCCESS':
            return [
                ...action.algorithmNames
            ];
        default:
            return state
    }
};
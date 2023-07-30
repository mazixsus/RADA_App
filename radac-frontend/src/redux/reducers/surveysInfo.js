export const surveysInfo = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SURVEYS_INFO_SUCCESS':
            return [
                ...action.surveysInfo
            ];
        default:
            return state
    }
};
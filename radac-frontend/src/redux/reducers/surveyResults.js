export const surveyResults = (state=[], action) => {
    switch (action.type) {
        case 'FETCH_SURVEY_RESULTS_SUCCESS':
            return [
                ...action.surveyResults
            ];
        default:
            return state
    }
};
export const surveyBumps = (state=[], action) => {
    switch (action.type) {
        case 'FETCH_SURVEY_BUMPS_SUCCESS':
            return [
                ...action.surveyBumps
            ];
        default:
            return state
    }
};
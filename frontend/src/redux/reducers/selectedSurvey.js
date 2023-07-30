export const selectedSurvey = (state = null, action) => {
    switch (action.type) {
        case 'SURVEY_SELECT_SUCCESS':
            return action.selectedSurveyId;
        default:
            return state
    }
};
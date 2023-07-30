export const surveysInfoFetched = (surveysInfo) => ({
    type: 'FETCH_SURVEYS_INFO_SUCCESS',
    surveysInfo
});

export const algorithmNamesFetched = (algorithmNames) => ({
    type: 'FETCH_ALGORITHM_NAMES_SUCCESS',
    algorithmNames
});

export const surveyResultsFetched = (surveyResults) => ({
    type: 'FETCH_SURVEY_RESULTS_SUCCESS',
    surveyResults
});

export const surveyBumpsFetched = (surveyBumps) => ({
    type: 'FETCH_SURVEY_BUMPS_SUCCESS',
    surveyBumps
});

export const selectSurvey = (selectedSurveyId) => ({
    type: 'SURVEY_SELECT_SUCCESS',
    selectedSurveyId
});
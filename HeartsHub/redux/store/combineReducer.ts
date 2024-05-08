import { combineReducers } from 'redux';
import { authorizationFormReducer,  bufferEmailReducer,  fulfillmentOfTheConditionForTheNextButtonAuthorizationReducer, isEnableNextButtonAuthorizationReducer, isPressedNextButtonAuthorizationReducer, selectedAuthorizationPageReducer } from '../Authorization/Reducer';

export const rootReducer = combineReducers({
    isPressedNextButtonAuthorization: isPressedNextButtonAuthorizationReducer,
    isEnableNextButtonAuthorization: isEnableNextButtonAuthorizationReducer,
    fulfillmentOfConditionForNextButtonAuthorization: fulfillmentOfTheConditionForTheNextButtonAuthorizationReducer,
    authorizationForm: authorizationFormReducer,
    selectedAuthorizationPage: selectedAuthorizationPageReducer,
    bufferEmail: bufferEmailReducer,
});
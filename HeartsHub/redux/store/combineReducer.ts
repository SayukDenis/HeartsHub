import { combineReducers } from 'redux';
import { authorizationFormReducer, fulfillmentOfTheConditionForTheNextButtonAuthorizationReducer, isEnableNextButtonAuthorizationReducer, isPressedNextButtonAuthorizationReducer } from '../Authorization/Reducer';

export const rootReducer = combineReducers({
    isPressedNextButtonAuthorization: isPressedNextButtonAuthorizationReducer,
    isEnableNextButtonAuthorization: isEnableNextButtonAuthorizationReducer,
    fulfillmentOfConditionForNextButtonAuthorization: fulfillmentOfTheConditionForTheNextButtonAuthorizationReducer,
    authorizationForm:authorizationFormReducer,
});
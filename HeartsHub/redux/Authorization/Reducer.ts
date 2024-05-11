import { getAuthObjectFromDao, initObject } from "../../Local dao/Initialiazation";
import { AuthorizationForm } from "../../Section/Authorization/Other/Data types/Interfaces";
import { alcoholStatus, childrenStatus, genders, searchGender, searchStatus, sexualOrientations, smokeStatus } from "../../SemiComponents/Constants/Data";
let initialStateForAuthorizationForm: AuthorizationForm  = initObject

export const isPressedNextButtonAuthorizationReducer = (state = false, action: any) => {
  switch (action.type) {
    case 'SET_IS_PRESSED_NEXT_BUTTON_AUTHORIZATION':
      return action.payload;
    default:
      return state;
  }
};

export const isEnableNextButtonAuthorizationReducer = (state = false, action: any) => {
  switch (action.type) {
    case 'SET_IS_ENABLE_NEXT_BUTTON_AUTHORIZATION':
      return action.payload;
    default:
      return state;
  }
};
export const bufferEmailReducer= (state = "", action: any) => {
  switch (action.type) {
    case "SET_BUFFER_EMAIL":
      return action.payload;
    default:
      return state;
  }
};

export const fulfillmentOfTheConditionForTheNextButtonAuthorizationReducer = (state = false, action: any) => {
  switch (action.type) {
    case 'SET_FULFILLMENT_OF_CONDITION_FOR_NEXT_BUTTON_AUTHORIZATION':
      return action.payload;
    default:
      return state;
  }
};
export const selectedAuthorizationPageReducer = (state = 1, action: any) => {
  switch (action.type) {
    case 'SET_SELECTED_AUTHORIZATION_PAGE':
      return action.payload;
    default:
      return state;
  }
};
export const authorizationFormReducer = (state = initialStateForAuthorizationForm, action: any) => {
  switch (action.type) {
    case "SET_AUTH_FORM":
      return action.payload
    case 'SET_EMAIL_FOR_AUTHORIZATION':
      return { ...state, email: action.payload };
    case 'SET_NAME_FOR_AUTHORIZATION':
      return { ...state, name: action.payload };
    case 'SET_SURNAME_FOR_AUTHORIZATION':
      return { ...state, surname: action.payload };
    case 'SET_DATE_FOR_AUTHORIZATION':
      return { ...state, date: action.payload };
    case 'SET_GENDER_FOR_AUTHORIZATION':
      return { ...state, gender: action.payload };
    case 'SET_SEXUAL_ORIENTATION_FOR_AUTHORIZATION':
      return { ...state, sexualOrientation: action.payload };
    case 'SET_HEIGHT_FOR_AUTHORIZATION':
      return { ...state, height: action.payload };
    case 'SET_CHILDREN_STATUS_FOR_AUTHORIZATION':
      return { ...state, childrenStatus: action.payload };
    case 'SET_ALCOHOL_STATUS_FOR_AUTHORIZATION':
      return { ...state, alcoholStatus: action.payload };
    case 'SET_SMOKE_STATUS_FOR_AUTHORIZATION':
      return { ...state, smokeStatus: action.payload };
    case 'SET_LANGUAGES_FOR_AUTHORIZATION':
      return { ...state, languages: action.payload };
    case 'SET_SEARCH_STATUS_FOR_AUTHORIZATION':
      return { ...state, searchStatus: action.payload };
    case 'SET_SELF_INFORMATION_FOR_AUTHORIZATION':
      return { ...state, selfInformation: action.payload };
    case 'SET_LINK_TO_PHOTO_FOR_AUTHORIZATION':
      return { ...state, linkToPhoto: action.payload };
    case "SET_SEARCH_STATUS_RADIUS":
      return { ...state, searchRadius: action.payload }
    case "SET_SEARCH_STATUS_AGE":
      return { ...state, searchAge: action.payload }
    case "SET_SEARCH_STATUS_GENDER":
      return { ...state, searchGender: action.payload }
    case 'SET_GEO_LOCATION':
      return { ...state, geoLocation: action.payload }
    case 'SET_SECOND_PASSWORD':
      return { ...state, secondPassword: action.payload }
    case 'SET_ID':
      return { ...state, id: action.payload }
    default:
      return state;
  }
};

import { getAuthObjectFromDao, initObject } from "../../Local dao/Initialiazation";
import { AuthorizationForm } from "../../Section/Authorization/Other/Data types/Interfaces";
import { alcoholStatus, childrenStatus, genders, searchGender, searchStatus, sexualOrientations, smokeStatus } from "../../SemiComponents/Constants/Data";
let initialStateForAuthorizationForm: AuthorizationForm  = initObject


/*export const initialStateForAuthorizationForm: AuthorizationForm = {
  email: 'denisok.77711123@gmail.com',
  name: 'Денис',
  surname: 'Саюк',
  date: '2005-02-20,1',
  gender: genders[29],
  sexualOrientation: sexualOrientations[0],
  height: "187,1",
  childrenStatus: childrenStatus[0],
  alcoholStatus: alcoholStatus[0],
  smokeStatus: smokeStatus[0],
  languages: [0, 46],
  searchStatus: searchStatus[0],
  selfInformation: "Доброго вечора ми бабуїни, слава псу патрону🇺🇦🇺🇦🇺🇦🇺🇦🇺🇦🇺🇦",
  linkToPhoto:
    [//'ph://2D3EC47E-021F-4C72-8DC2-233008374565',
      'ph://D8DA2398-B1B3-41AE-8746-C8B9D8D7999C',
      'ph://51F64F7C-0EFC-492E-B9DA-934D9747D0D0',
      'ph://ED2C6251-0389-4410-9721-1AE999D7486E',
      'ph://4B3D7618-4030-40DA-BE45-8955B8F7A098',
      'ph://1F25531D-F262-4479-89DF-AB434344A1BB',
      'ph://1DBBD4BE-1D6B-4854-B814-DBD09A11FC6D',
    ],
  searchRadius: "100",
  searchAge: "18-99",
  searchGender: searchGender[0],
  secondPassword: "",
  geoLocation: 2705
};*/
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
    default:
      return state;
  }
};

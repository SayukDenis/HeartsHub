import { AuthorizationForm } from "../../Authorization/Interfaces/Interfaces";

export const initialStateForAuthorizationForm: AuthorizationForm = {
  email: 'denisok.77711123@gmail.com',
  name: 'Денис',
  surname: 'Саюк',
  date: '2005-02-20',
  gender: 'Чоловік',
  sexualOrientation: 'Гетеросексуал',
};
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

export const fulfillmentOfTheConditionForTheNextButtonAuthorizationReducer = (state = false, action: any) => {
  switch (action.type) {
    case 'SET_FULFILLMENT_OF_CONDITION_FOR_NEXT_BUTTON_AUTHORIZATION':
      return action.payload;
    default:
      return state;
  }
};
export const authorizationFormReducer = (state = initialStateForAuthorizationForm, action: any) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
export const setIsPressedNextButtonAuthorization = (isPressed:boolean) => ({
    type: 'SET_IS_PRESSED_NEXT_BUTTON_AUTHORIZATION',
    payload: isPressed,
  });
  
  export const setIsEnableNextButtonAuthorization = (isEnable:boolean) => ({
    type: 'SET_IS_ENABLE_NEXT_BUTTON_AUTHORIZATION',
    payload: isEnable,
  });
  
  export const setFulfillmentOfTheConditionForTheNextButtonAuthorization = (isFulfilled:boolean) => ({
    type: 'SET_FULFILLMENT_OF_CONDITION_FOR_NEXT_BUTTON_AUTHORIZATION',
    payload: isFulfilled,
  });
  export const setEmailForAuthorization = (email: string) => ({
    type: 'SET_EMAIL_FOR_AUTHORIZATION',
    payload: email,
  });
  
  export const setNameForAuthorization = (name: string) => ({
    type: 'SET_NAME_FOR_AUTHORIZATION',
    payload: name,
  });
  
  export const setSurnameForAuthorization = (surname: string) => ({
    type: 'SET_SURNAME_FOR_AUTHORIZATION',
    payload: surname,
  });
  
  export const setDateForAuthorization = (date: string) => ({
    type: 'SET_DATE_FOR_AUTHORIZATION',
    payload: date,
  });
  
  export const setGenderForAuthorization = (gender: string) => ({
    type: 'SET_GENDER_FOR_AUTHORIZATION',
    payload: gender,
  });
  
  export const setSexualOrientationForAuthorization = (orientation: string) => ({
    type: 'SET_SEXUAL_ORIENTATION_FOR_AUTHORIZATION',
    payload: orientation,
  });
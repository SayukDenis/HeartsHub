
import { AuthorizationForm } from "../../Section/Authorization/Other/Data types/Interfaces";

export const setIsPressedNextButtonAuthorization = (isPressed: boolean) => ({
  type: 'SET_IS_PRESSED_NEXT_BUTTON_AUTHORIZATION',
  payload: isPressed,
});

export const setIsEnableNextButtonAuthorization = (isEnable: boolean) => ({
  type: 'SET_IS_ENABLE_NEXT_BUTTON_AUTHORIZATION',
  payload: isEnable,
});
export const setSelectedAuthorizationPage = (selectedAuthorizationPage: number) => ({
  type: 'SET_SELECTED_AUTHORIZATION_PAGE',
  payload: selectedAuthorizationPage,
});

export const setFulfillmentOfTheConditionForTheNextButtonAuthorization = (isFulfilled: boolean) => ({
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
export const setBufferEmail = (bufferEmail: string) => ({
  type: "SET_BUFFER_EMAIL",
  payload: bufferEmail
})
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
export const setHeigthForAuthorization = (height: string) => ({
  type: 'SET_HEIGHT_FOR_AUTHORIZATION',
  payload: height,
});

export const setChildrenStatusForAuthorization = (childrenStatus: string) => ({
  type: 'SET_CHILDREN_STATUS_FOR_AUTHORIZATION',
  payload: childrenStatus,
});


export const setAlcoholStatusForAuthorization = (alcoholStatus: string) => ({
  type: 'SET_ALCOHOL_STATUS_FOR_AUTHORIZATION',
  payload: alcoholStatus,
});

export const setSmokeStatusForAuthorization = (smokeStatus: string) => ({
  type: 'SET_SMOKE_STATUS_FOR_AUTHORIZATION',
  payload: smokeStatus,
});

export const setLanguagesForAuthorization = (languages: number[]) => ({
  type: 'SET_LANGUAGES_FOR_AUTHORIZATION',
  payload: languages,
});

export const setSearchStatusForAuthorization = (searchStatus: string) => ({
  type: 'SET_SEARCH_STATUS_FOR_AUTHORIZATION',
  payload: searchStatus,
});
export const setSearchStatusRadius = (searchRadius: string) => ({
  type: "SET_SEARCH_STATUS_RADIUS",
  payload: searchRadius
})
export const setSearchStatusAge = (searchAge: string) => ({
  type: "SET_SEARCH_STATUS_AGE",
  payload: searchAge
})
export const setSearchStatusGender = (searchGender: string) => ({
  type: "SET_SEARCH_STATUS_GENDER",
  payload: searchGender
})

export const setSelfInformationForAuthorization = (selfInformation: string) => ({
  type: 'SET_SELF_INFORMATION_FOR_AUTHORIZATION',
  payload: selfInformation,
});

export const setLinkToPhotoForAuthorization = (linkToPhoto: string[]) => ({
  type: 'SET_LINK_TO_PHOTO_FOR_AUTHORIZATION',
  payload: linkToPhoto,
});

export const setGeoLocation = (geoLocation: number) => ({
  type: 'SET_GEO_LOCATION',
  payload: geoLocation,
});
export const setId=(id:string)=> ({
  type: 'SET_ID',
  payload: id,
});
export const setSecondPassword = (secondPassword: string) => ({
  type: 'SET_SECOND_PASSWORD',
  payload: secondPassword,
});
export const setAuthForm=(authForm:AuthorizationForm)=>({
  type:"SET_AUTH_FORM",
  payload:authForm
})
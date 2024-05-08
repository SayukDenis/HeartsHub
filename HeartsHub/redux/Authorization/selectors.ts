export const selectIsPressedNextButtonAuthorization = (state: any): boolean => state.isPressedNextButtonAuthorization;
export const selectIsEnableNextButtonAuthorization = (state: any): boolean => state.isEnableNextButtonAuthorization;
export const selectFulfillmentOfConditionForNextButtonAuthorization = (state: any): boolean => state.fulfillmentOfConditionForNextButtonAuthorization;
export const selectEmailForAuthorization = (state: any) => state.authorizationForm.email;
export const selectNameForAuthorization = (state: any) => state.authorizationForm.name;
export const selectSurnameForAuthorization = (state: any) => state.authorizationForm.surname;
export const selectDateForAuthorization = (state: any) => state.authorizationForm.date;
export const selectGenderForAuthorization = (state: any) => state.authorizationForm.gender;
export const selectSexualOrientationForAuthorization = (state: any) => state.authorizationForm.sexualOrientation;
export const selectHeightForAuthorization = (state: any) => state.authorizationForm.height;
export const selectChildrenStatusForAuthorization = (state: any) => state.authorizationForm.childrenStatus;
export const selectAlcoholStatusForAuthorization = (state: any) => state.authorizationForm.alcoholStatus;
export const selectSmokeStatusForAuthorization = (state: any) => state.authorizationForm.smokeStatus;
export const selectLanguagesForAuthorization = (state: any) => state.authorizationForm.languages;
export const selectSearchStatusForAuthorization = (state: any) => state.authorizationForm.searchStatus;
export const selectSelfInformationForAuthorization = (state: any) => state.authorizationForm.selfInformation;
export const selectLinkToPhotoForAuthorization = (state: any) => state.authorizationForm.linkToPhoto;
export const selectAuthorizationPage = (state: any) => state.selectedAuthorizationPage;
export const selectSearchStatusAge = (state: any) => state.authorizationForm.searchAge;
export const selectSearchStatusRadius = (state: any) => state.authorizationForm.searchRadius;
export const selectSearchStatusGender = (state: any) => state.authorizationForm.searchGender;
export const selectSecondPassword = (state: any) => state.authorizationForm.secondPassword;
export const selectGeoLocation = (state: any) => state.authorizationForm.geoLocation;
export const selectBufferEmail = (state: any) => state.bufferEmail
export const selectAuthForm=(state:any)=>state.authorizationForm
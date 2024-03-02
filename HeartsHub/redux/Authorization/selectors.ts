

export const selectIsPressedNextButtonAuthorization = (state: any): boolean => state.isPressedNextButtonAuthorization;

export const selectIsEnableNextButtonAuthorization = (state: any): boolean => state.isEnableNextButtonAuthorization;

export const selectFulfillmentOfConditionForNextButtonAuthorization = (state: any): boolean => state.fulfillmentOfConditionForNextButtonAuthorization;
export const selectEmailForAuthorization = (state: any) => state.authorizationForm.email;

export const selectNameForAuthorization = (state: any) => state.authorizationForm.name;

export const selectSurnameForAuthorization = (state: any) => state.authorizationForm.surname;

export const selectDateForAuthorization = (state: any) => state.authorizationForm.date;

export const selectGenderForAuthorization = (state: any) => state.authorizationForm.gender;

export const selectSexualOrientationForAuthorization = (state: any) => state.authorizationForm.sexualOrientation;
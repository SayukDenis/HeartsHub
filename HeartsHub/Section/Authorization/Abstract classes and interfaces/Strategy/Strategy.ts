import { AdaptedRegistrationPage } from "../Template method/AdaptedRegistrationPage";

export interface IStrategy {
    listOfPages:AdaptedRegistrationPage[];
    pressOnBackButton:()=>void
    pressOnNextButton:()=>void
}
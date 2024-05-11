import { Dispatch, UnknownAction } from "redux";
import { AdaptedRegistrationPage } from "../Template method/AdaptedRegistrationPage";

export interface IStrategy {
    listOfPages:AdaptedRegistrationPage[];
    dispatch:Dispatch<UnknownAction>
    pressOnBackButton:()=>void
    pressOnNextButton:()=>void
}
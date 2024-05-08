import { Dispatch, UnknownAction } from "redux";

export interface ISubject {
    dispatch:Dispatch<UnknownAction>
    request: (isCodeVerify: boolean|null,setModalWindow:(state:boolean|null)=>void) => React.JSX.Element|null
}
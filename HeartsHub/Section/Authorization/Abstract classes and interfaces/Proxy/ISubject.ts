import { ReactNode } from "react";
import Command from "../Command/Command";

export interface ISubject {
    command:Command;
    request: (isCodeVerify: boolean|null,setModalWindow:(state:boolean|null)=>void) => React.JSX.Element|null
}
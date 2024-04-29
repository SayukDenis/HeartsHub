import { AuthorizationForm } from "../Section/Authorization/Other/Data types/Interfaces";


export class User implements AuthorizationForm{
    id!:number
    email!: string;
    name!: string;
    surname!: string;
    date!: string;
    gender!: string;
    sexualOrientation!: string;
    height!: string;
    childrenStatus!: string;
    alcoholStatus!: string;
    smokeStatus!: string;
    languages!: number[];
    searchStatus!: string;
    selfInformation!: string;
    linkToPhoto!: string[];
}
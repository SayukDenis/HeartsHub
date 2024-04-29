import { AdaptedRegistrationPage } from "../Template method/AdaptedRegistrationPage";



export abstract class FabricOfRegistrationPages {
    public abstract factoryMethod(index: number): AdaptedRegistrationPage;
    public createAdaptivePage(index: number):AdaptedRegistrationPage{
        return this.factoryMethod(index);
    }
}
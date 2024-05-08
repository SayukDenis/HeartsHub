import Adapter from "../../Abstract classes and interfaces/Adapter/Adapter";
import { FabricOfRegistrationPages } from "../../Abstract classes and interfaces/Fabric method/FabricMethod";
import EnteringYourGenderPage from "./EnteringYourGenderPage";


class EnteringYourGenderPageFabric extends FabricOfRegistrationPages{
    factoryMethod(index: number) {
        return  new Adapter({Adaptee:EnteringYourGenderPage,index})
    }
}
export default EnteringYourGenderPageFabric;
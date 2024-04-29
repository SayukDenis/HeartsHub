import Adapter from "../../Abstract classes and interfaces/Adapter/Adapter";
import { FabricOfRegistrationPages } from "../../Abstract classes and interfaces/Fabric method/FabricMethod";
import EnterNameAndSurnamePage from "./EnterNameAndSurnamePage";

class EnterNameAndSurnamePageFabric extends FabricOfRegistrationPages{
    factoryMethod(index: number) {
        return  new Adapter({Adaptee:EnterNameAndSurnamePage,index})
    }
}
export default EnterNameAndSurnamePageFabric
import Adapter from "../../Abstract classes and interfaces/Adapter/Adapter";
import { FabricOfRegistrationPages } from "../../Abstract classes and interfaces/Fabric method/FabricMethod";
import EnteringYourHeightPage from "./EnteringYourHeightPage";


class EnteringYourHeightPageFabric extends FabricOfRegistrationPages {
    factoryMethod(index: number) {
        return new Adapter({ Adaptee: EnteringYourHeightPage, index })
    }
}
export default EnteringYourHeightPageFabric;
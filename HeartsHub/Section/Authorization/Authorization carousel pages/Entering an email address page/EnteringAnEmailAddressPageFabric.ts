import Adapter from "../../Abstract classes and interfaces/Adapter/Adapter";
import { FabricOfRegistrationPages } from "../../Abstract classes and interfaces/Fabric method/FabricMethod";
import EnteringAnEmailAddressPage from "./EnteringAnEmailAddressPage";

class EnteringAnEmailAddressPageFabric extends FabricOfRegistrationPages {
    public factoryMethod(index: number): Adapter {
        return new Adapter({ Adaptee: EnteringAnEmailAddressPage, index });
    }
}

export default EnteringAnEmailAddressPageFabric;

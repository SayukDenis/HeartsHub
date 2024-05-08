import Adapter from "../../Abstract classes and interfaces/Adapter/Adapter";
import { FabricOfRegistrationPages } from "../../Abstract classes and interfaces/Fabric method/FabricMethod";
import EnteringBirthdayPage from "./EnteringBirthdayPage";

class EnteringBirthdayPageFabric extends FabricOfRegistrationPages{
    factoryMethod(index: number) {
        return  new Adapter({Adaptee:EnteringBirthdayPage,index})
    }
}
export default EnteringBirthdayPageFabric
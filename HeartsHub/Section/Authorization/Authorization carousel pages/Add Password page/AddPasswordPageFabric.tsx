import Adapter from "../../Abstract classes and interfaces/Adapter/Adapter";
import { FabricOfRegistrationPages } from "../../Abstract classes and interfaces/Fabric method/FabricMethod";
import AddPasswordPage from "./AddPasswordPage";

class AddPasswordPageFabric extends FabricOfRegistrationPages {
  public factoryMethod(index: number): Adapter {
    return new Adapter({ Adaptee: AddPasswordPage, index });
  }
}
export default AddPasswordPageFabric;

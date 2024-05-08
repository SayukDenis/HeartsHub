import Adapter from "../../Abstract classes and interfaces/Adapter/Adapter";
import { FabricOfRegistrationPages } from "../../Abstract classes and interfaces/Fabric method/FabricMethod";
import AddNewPasswordPage from "./AddNewPasswordPage";

class AddNewPasswordPageFabric extends FabricOfRegistrationPages {
  public factoryMethod(index: number): Adapter {
    return new Adapter({ Adaptee: AddNewPasswordPage, index });
  }
}
export default AddNewPasswordPageFabric;

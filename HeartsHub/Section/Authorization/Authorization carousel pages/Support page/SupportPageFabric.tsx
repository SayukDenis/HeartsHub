import Adapter from "../../Abstract classes and interfaces/Adapter/Adapter";
import { FabricOfRegistrationPages } from "../../Abstract classes and interfaces/Fabric method/FabricMethod";
import SupportPage from "./SupportPage";

class SupportPageFabric extends FabricOfRegistrationPages {
  public factoryMethod(index: number): Adapter {
    return new Adapter({ Adaptee: SupportPage, index });
  }
}
export default SupportPageFabric;

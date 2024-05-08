import Adapter from "../../Abstract classes and interfaces/Adapter/Adapter";
import { FabricOfRegistrationPages } from "../../Abstract classes and interfaces/Fabric method/FabricMethod";
import VerifyCodePage from "./VerifyCodePage";


class VerifyCodePageFabric extends FabricOfRegistrationPages{
    factoryMethod(index: number) {
        return  new Adapter({Adaptee:VerifyCodePage,index})
    }
}
export default VerifyCodePageFabric;
import { Component, ReactNode } from "react";
import context from "../Abstract classes and interfaces/Strategy/Context";
import Facade from "../Abstract classes and interfaces/Facade/Facade";
import AuthorizationCarousel from "./AuthorizationCarousel";


class Authorization extends Component{
    render(): ReactNode{
        const strategy:any=AuthorizationCarousel
        context.listOfPages=new Facade().getRegistrationPages()
        context.navigation=(this.props as any).navigation
        context.setStrategy(strategy)
        return context.render()
    }
}
export default Authorization
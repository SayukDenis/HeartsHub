import { Component, ReactNode } from "react";
import { IStrategy } from "./Strategy";
import { AdaptedRegistrationPage } from "../Template method/AdaptedRegistrationPage";




class Context{
    private strategy:IStrategy
    listOfPages:AdaptedRegistrationPage[]
    navigation
    strategyProps:any
    constructor(props:any){
        this.strategy=props.strategy
        this.listOfPages=props.listOfPages
        this.navigation=props.navigation

    }
    setStrategy(strategy:IStrategy){
        this.strategy=strategy
    }
    render(): ReactNode {
        const Component:any=(this.strategy as any)
        return <Component listOfPages={this.listOfPages} navigation={this.navigation} {...this.strategyProps}/>
    }
}
const context:Context=new Context({})
export default context
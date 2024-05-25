import AuthorizedInvoker from "./AuthorizedInvoker"
import Command, { ICommand } from "./Command"
import InvokerState from "./InvokerState"

export interface IInvoker {
    updateVariable: () => void
}
export interface UnauthorizedInvokerProps {
    firstCommand: ICommand
    secondCommand:ICommand
    thirdCommand:ICommand
    id:string
    context:InvokerState
}
class UnauthorizedInvoker implements IInvoker {
    private firstCommand: ICommand
    private secondCommand:ICommand
    private thirdCommand:ICommand
    private context:InvokerState
    private id:string

    constructor(props: UnauthorizedInvokerProps) {
        this.firstCommand = props.firstCommand
        this.secondCommand=props.secondCommand
        this.thirdCommand=props.thirdCommand
        this.context=props.context
        this.id=props.id

    }
    updateVariable() {
        if(this.id&&this.id!=""){
            this.context.transitionTo(new AuthorizedInvoker({ firstCommand: this.firstCommand, secondCommand: this.secondCommand, thirdCommand: this.thirdCommand,id:this.id,context:this.context}))
            this.context.request()
        }
        else{
            this.firstCommand.update()
            this.secondCommand.update()
        }
    }
}
export default UnauthorizedInvoker
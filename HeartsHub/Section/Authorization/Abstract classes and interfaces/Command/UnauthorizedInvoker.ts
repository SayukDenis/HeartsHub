import Command, { ICommand } from "./Command"

export interface IInvoker {
    updateVariable: () => void
}
export interface UnauthorizedInvokerProps {
    firstCommand: ICommand
    secondCommand:ICommand
}
class UnauthorizedInvoker implements IInvoker {
    private firstCommand: ICommand
    private secondCommand:ICommand

    constructor(props: UnauthorizedInvokerProps) {
        this.firstCommand = props.firstCommand
        this.secondCommand=props.secondCommand
    }
    updateVariable() {
        this.firstCommand.update()
        this.secondCommand.update()
    }
}
export default UnauthorizedInvoker
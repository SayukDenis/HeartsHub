import { ICommand } from "./Command";
import { IInvoker, UnauthorizedInvokerProps } from "./UnauthorizedInvoker";



class AuthorizedInvoker implements IInvoker {
    private firstCommand: ICommand
    private secondCommand:ICommand
    private thirdCommand: ICommand;

    constructor(props: UnauthorizedInvokerProps) {
        this.firstCommand = props.firstCommand
        this.secondCommand=props.secondCommand
        this.thirdCommand = props.thirdCommand;
    }

    updateVariable() {
        this.firstCommand.update()
        this.secondCommand.update()
        this.thirdCommand.update();
    }
}

export default AuthorizedInvoker;

import { Dispatch } from "redux";

export interface ICommandProps {
    dispatch:Dispatch;
}

interface ICommand {
    update(action:(arg:any)=>any,variableField:any): void;
}

class Command implements ICommand {
    private dispatch:Dispatch;

    constructor(props:ICommandProps) {
      this.dispatch=props.dispatch
    }

    update(action:(arg:any)=>any,variableField:any) {
        
        this.dispatch(action(variableField));
    }
}


export default Command;

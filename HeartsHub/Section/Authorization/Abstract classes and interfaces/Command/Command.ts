import { Dispatch, UnknownAction } from "redux";

export interface CommandProps {
    dispatch:Dispatch<UnknownAction>;
    action:(arg:any)=>any
    variableField:any
}

export interface ICommand {
    update(): void;
}

class Command implements ICommand {
    private dispatch:Dispatch<UnknownAction>;
    private action:(arg:any)=>any
    private variableField:any
    constructor(props:CommandProps) {
      this.dispatch=props.dispatch
      this.action=props.action
      this.variableField=props.variableField
    }

    update() {
        this.dispatch(this.action(this.variableField));
    }
}


export default Command;

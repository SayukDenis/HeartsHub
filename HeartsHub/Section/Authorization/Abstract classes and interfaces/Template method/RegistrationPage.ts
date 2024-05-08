import { Component } from "react";
import { State } from "../State/State";
import Command from "../Command/Command";
import { setFulfillmentOfTheConditionForTheNextButtonAuthorization, setIsPressedNextButtonAuthorization } from "../../../../redux/Authorization/Actions";
import { Dispatch, UnknownAction } from "redux";

export abstract class RegistrationPage extends Component {
    index: number;
    dispatch: Dispatch<UnknownAction>
    State: State;
    constructor(props: any) {
        super(props);
        this.index = props.index;

        this.dispatch = props.dispatch,

            this.State = this.returnState()
    }
    protected checkingGoToNextPage(arrayOfBindings: any[]): void {
        this.dispatch(setIsPressedNextButtonAuthorization(false));
        this.dispatch(
            setFulfillmentOfTheConditionForTheNextButtonAuthorization(
                true)
        );
    }
    protected checkingForEnableButton(arrayOfBindings: any[]) {
        return true
    }
    protected abstract defineState(): void;
    public returnState(): State {
        return new State({
            checkingForEnableButton: this.checkingForEnableButton,
            checkingGoToNextPage: this.checkingGoToNextPage,
            dispatch: this.dispatch
        })
    }
}
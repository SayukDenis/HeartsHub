import { Component } from "react";

export abstract class AdaptedRegistrationPage extends Component {
    index: boolean;
    constructor(props: any) {
        super(props);
        this.index = props.index;
    }
}
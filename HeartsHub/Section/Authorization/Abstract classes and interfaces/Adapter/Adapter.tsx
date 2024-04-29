import React from 'react';
import { AdaptedRegistrationPage } from '../Template method/AdaptedRegistrationPage';

interface AdapterProps {
  Adaptee: React.ComponentType<any>;
  index: number;
}

class Adapter extends AdaptedRegistrationPage {

  additionalProps: any;

  constructor(props: AdapterProps) {
    super(props);

  }

  render() {
    const { Adaptee,index }:any = this.props;
    return <Adaptee index={index}/>;
  }
}

export default Adapter;

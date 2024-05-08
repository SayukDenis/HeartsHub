import React, { ReactNode } from 'react';
import { View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { height, width } from '../../../SemiComponents/Constants/SizeConstants';

interface FooterContainerProps{
    children?:ReactNode
}

const FooterContainer:React.FC<FooterContainerProps> = ({ children }) => {
  const marginBottom = Platform.OS === 'ios' ? useSafeAreaInsets().bottom : 0;

  return (
    <View
      style={{
        justifyContent: 'center',
        width,
        marginBottom: marginBottom,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default FooterContainer;

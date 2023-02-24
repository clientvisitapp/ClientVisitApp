import React, {PropsWithChildren} from 'react';
import {Text} from 'react-native';
import Colors from '../constants/Colors';

type TextProps = PropsWithChildren<{
  style: any;
  onPress?: () => void;
}>;

export const CustomText: React.FC<TextProps> = ({children, style, onPress}) => {
  return (
    <Text style={[{color: Colors.BLACK}, style]} onPress={onPress}>
      {children}
    </Text>
  );
};

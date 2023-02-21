import React, {PropsWithChildren} from 'react';
import {Text} from 'react-native';
import Colors from '../constants/Colors';

type TextProps = PropsWithChildren<{
  style: any;
}>;

export const CustomText: React.FC<TextProps> = ({children, style}) => {
  return <Text style={[{color: Colors.BLACK}, style]}>{children}</Text>;
};

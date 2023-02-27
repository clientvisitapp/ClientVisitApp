import React from 'react';
import {View} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import Colors from '../../constants/Colors';

const SignOutIcon = ({style}: {style?: any}) => (
  <View style={style}>
    <Svg width={24} height={24}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3.925c-3.028 2.01-5 5.292-5 8.998C0 19.041 5.373 24 12 24s12-4.96 12-11.077c0-3.706-1.972-6.987-5-8.998v2.518c1.867 1.67 3 3.99 3 6.48C22 17.788 17.677 22 12 22S2 17.788 2 12.923c0-2.49 1.133-4.81 3-6.48V3.925Z"
        fill="#F1F8FF"
      />
      <Path stroke="#F1F8FF" strokeWidth={2} d="M12 0v11.077" />
    </Svg>
  </View>
);

export default SignOutIcon;

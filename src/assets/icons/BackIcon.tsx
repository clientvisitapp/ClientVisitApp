import React from 'react';
import {View} from 'react-native';
import {Path, Svg} from 'react-native-svg';

const BackIcon = ({style}: {style?: any}) => (
  <View style={style}>
    <Svg width={24} height={24} fill="none">
      <Path
        d="M7.75 12.75c-.17 0-.34-.06-.48-.17a.757.757 0 0 1-.1-1.06l6-7.25c.26-.32.74-.36 1.06-.1.32.26.36.74.1 1.06l-6 7.25c-.15.18-.36.27-.58.27Z"
        fill="#FFFFFF"
      />
      <Path
        d="M13.75 20c-.22 0-.43-.09-.58-.27l-6-7.25a.758.758 0 0 1 .1-1.06c.32-.26.79-.22 1.06.1l6 7.25c.26.32.22.79-.1 1.06-.14.11-.31.17-.48.17Z"
        fill="#FFFFFF"
      />
    </Svg>
  </View>
);

export default BackIcon;

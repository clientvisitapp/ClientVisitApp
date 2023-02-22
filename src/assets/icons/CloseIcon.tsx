import React from 'react';
import {View} from 'react-native';
import {Path, Svg} from 'react-native-svg';

const CloseIcon = ({style}: {style?: any}) => (
  <View style={style}>
    <Svg width={24} height={24} fill="none">
      <Path
        d="M4.75 20c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l14.5-14.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-14.5 14.5c-.15.15-.34.22-.53.22Z"
        fill="#fff"
      />
      <Path
        d="M19.25 20c-.19 0-.38-.07-.53-.22L4.22 5.28a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l14.5 14.5c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"
        fill="#fff"
      />
    </Svg>
  </View>
);

export default CloseIcon;

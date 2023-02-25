import React from 'react';
import {View} from 'react-native';
import {Path, Svg} from 'react-native-svg';

const PlacesToVisitIcon = ({style}: {style?: any}) => (
  <View style={style}>
    <Svg width={36} height={42}>
      <Path
        d="M18 41.9c-.3 0-.58-.08-.84-.26C16.46 41.16 0 29.82 0 17.5 0 7.2 7.4 0 18 0s18 7.2 18 17.5c0 12.32-16.46 23.66-17.16 24.14-.26.18-.54.26-.84.26ZM18 3C9.16 3 3 8.96 3 17.5c0 9.3 11.72 18.62 15 21.06 3.28-2.44 15-11.76 15-21.06C33 8.96 26.84 3 18 3Z"
        fill="#0046BE"
      />
      <Path
        d="M18.06 27.06c-5 0-9.06-4.06-9.06-9.04C9 13.04 13.06 9 18.06 9c5 0 9.06 4.06 9.06 9.04 0 4.98-4.06 9.02-9.06 9.02Zm0-15.06C14.72 12 12 14.7 12 18.04s2.72 6.04 6.06 6.04c3.34 0 6.06-2.7 6.06-6.04S21.4 12 18.06 12Z"
        fill="#0046BE"
      />
    </Svg>
  </View>
);

export default PlacesToVisitIcon;

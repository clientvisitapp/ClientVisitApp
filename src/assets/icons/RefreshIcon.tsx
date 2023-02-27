import React from 'react';
import {View} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import Colors from '../../constants/Colors';

const RefreshIcon = ({style}: {style?: any}) => (
  <View style={style}>
    <Svg width={24} height={24}>
      <Path
        d="M3.75 9.75c-.32 0-.61-.2-.71-.51l-1-3c-.13-.39.08-.82.47-.95.39-.13.82.08.95.47l.79 2.34 2.32-.58c.4-.1.81.14.91.55.1.4-.14.81-.55.91l-3 .75a.99.99 0 0 1-.18.02Z"
        fill="#fff"
      />
      <Path
        d="M12 21.5c-3.77 0-7.18-2.23-8.7-5.68-.17-.38 0-.82.38-.99.38-.17.82.01.99.38A8.016 8.016 0 0 0 12 20c4.41 0 8-3.59 8-8s-3.59-8-8-8C8.78 4 5.88 5.92 4.63 8.89a.75.75 0 0 1-1.382-.007.75.75 0 0 1 .002-.573A9.477 9.477 0 0 1 12 2.5c5.24 0 9.5 4.26 9.5 9.5s-4.26 9.5-9.5 9.5Z"
        fill="#fff"
      />
    </Svg>
  </View>
);

export default RefreshIcon;

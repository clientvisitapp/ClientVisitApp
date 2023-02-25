import React from 'react';
import {View} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import Colors from '../../constants/Colors';

const AgendaIcon = ({style}: {style?: any}) => (
  <View style={style}>
    <Svg width={42} height={40}>
      <Path
        d="M36.5 40h-31C2.46 40 0 37.54 0 34.5v-26C0 5.46 2.46 3 5.5 3h31C39.54 3 42 5.46 42 8.5v26c0 3.04-2.46 5.5-5.5 5.5ZM5.5 6A2.5 2.5 0 0 0 3 8.5v26A2.5 2.5 0 0 0 5.5 37h31a2.5 2.5 0 0 0 2.5-2.5v-26A2.5 2.5 0 0 0 36.5 6h-31Z"
        fill="#0046BE"
      />
      <Path
        d="M12 10c-.82 0-1.5-.68-1.5-1.5v-7c0-.82.68-1.5 1.5-1.5s1.5.68 1.5 1.5v7c0 .82-.68 1.5-1.5 1.5Zm18 0c-.82 0-1.5-.68-1.5-1.5v-7c0-.82.68-1.5 1.5-1.5s1.5.68 1.5 1.5v7c0 .82-.68 1.5-1.5 1.5Zm-2.5 10h-13c-.82 0-1.5-.68-1.5-1.5s.68-1.5 1.5-1.5h13c.82 0 1.5.68 1.5 1.5s-.68 1.5-1.5 1.5Zm0 7h-13c-.82 0-1.5-.68-1.5-1.5s.68-1.5 1.5-1.5h13c.82 0 1.5.68 1.5 1.5s-.68 1.5-1.5 1.5Z"
        fill="#0046BE"
      />
    </Svg>
  </View>
);

export default AgendaIcon;

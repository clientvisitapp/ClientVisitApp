import React from 'react';
import {View} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import Colors from '../../constants/Colors';

const AgendaIcon = ({style}: {style?: any}) => (
  <View style={style}>
    <Svg width={23} height={22} fill="none">
      <Path
        d="M19.75 22H4.25c-1.52 0-2.75-1.23-2.75-2.75v-13c0-1.52 1.23-2.75 2.75-2.75h15.5c1.52 0 2.75 1.23 2.75 2.75v13c0 1.52-1.23 2.75-2.75 2.75ZM4.25 5C3.56 5 3 5.56 3 6.25v13c0 .69.56 1.25 1.25 1.25h15.5c.69 0 1.25-.56 1.25-1.25v-13C21 5.56 20.44 5 19.75 5H4.25Z"
        fill={Colors.BLACK}
      />
      <Path
        d="M7.5 7c-.41 0-.75-.34-.75-.75v-3.5c0-.41.34-.75.75-.75s.75.34.75.75v3.5c0 .41-.34.75-.75.75Zm9 0c-.41 0-.75-.34-.75-.75v-3.5c0-.41.34-.75.75-.75s.75.34.75.75v3.5c0 .41-.34.75-.75.75Zm-1.25 5h-6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.5c.41 0 .75.34.75.75s-.34.75-.75.75Zm0 3.5h-6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
        fill={Colors.BLACK}
      />
    </Svg>
  </View>
);

export default AgendaIcon;

import React from 'react';
import {View} from 'react-native';
import {Path, Svg} from 'react-native-svg';

const PlacesToVisitIcon = ({style}: {style?: any}) => (
  <View style={style}>
    <Svg width={23} height={22} fill="none">
      <Path
        d="M2.25 22.5a.741.741 0 0 1-.75-.75V4.25c0-.32.21-.61.51-.71l5.37-1.79c.56-.19 1.18-.19 1.74 0l5.37 1.79c.39.13.61.56.47.95-.13.39-.55.61-.95.47L8.65 3.17a1.19 1.19 0 0 0-.79 0L3 4.79v15.92l4.43-1.48c.53-.17 1.09-.19 1.62-.04l5.84 1.67c.23.07.48.07.71-.01L21 19.2V7.25c0-.41.34-.75.75-.75s.75.34.75.75v12.5c0 .33-.21.62-.53.72l-5.93 1.83c-.51.16-1.05.16-1.56.02l-5.83-1.67c-.24-.07-.5-.06-.74.02l-5.41 1.8c-.09.02-.17.03-.25.03Z"
        fill="#1D252C"
      />
      <Path
        d="M8.25 20.5c-.41 0-.75-.34-.75-.75v-17c0-.41.34-.75.75-.75s.75.34.75.75v17c0 .41-.34.75-.75.75Zm7 1.5c-.41 0-.75-.34-.75-.75v-14c0-.41.34-.75.75-.75s.75.34.75.75v14c0 .41-.34.75-.75.75Z"
        fill="#1D252C"
      />
      <Path
        d="M18.5 12.5c-.21 0-.4-.08-.54-.23-.41-.42-3.96-4.22-3.96-7.02-.01-1.05.45-2.13 1.25-2.93.85-.85 2-1.32 3.25-1.32 1.24 0 2.39.46 3.24 1.31.8.81 1.26 1.88 1.26 2.94 0 2.82-3.55 6.6-3.96 7.02-.14.15-.34.23-.54.23Zm0-10c-1.09 0-1.79.48-2.18.87-.52.52-.82 1.22-.82 1.88 0 1.59 1.84 4.05 3 5.39 1.16-1.33 3-3.79 3-5.38 0-.66-.31-1.36-.83-1.88-.39-.41-1.09-.88-2.17-.88Z"
        fill="#1D252C"
      />
      <Path
        d="M18.5 6.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
        fill="#1D252C"
      />
    </Svg>
  </View>
);

export default PlacesToVisitIcon;
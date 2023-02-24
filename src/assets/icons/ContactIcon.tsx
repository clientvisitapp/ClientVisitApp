import React from 'react';
import {View} from 'react-native';
import {Path, Svg} from 'react-native-svg';

const ContactIcon = ({style, color}: {style?: any; color?: string}) => (
  <View style={style}>
    <Svg width={22} height={23} fill="none">
      <Path
        d="M18.48 22.73c-.1 0-.21-.01-.32-.02h-.01c-3.31-.4-6.72-2.27-10.42-5.69C4.2 13.47 1.87 9.38 1.5 6.05c-.3-2.75 2.8-4.2 2.93-4.26.27-.13 1.62-.68 2.38.18.48.53 1 1.41 2.53 4.02l.06.1c.45.76.67 1.91-.06 2.84-.17.22-.34.41-.49.57-.11.13-.26.29-.32.39.38.67 2.16 2.95 2.75 3.54 2.27 2.27 2.64 2.28 2.88 2.28h.11c.07-.02.28-.21.44-.35.16-.15.35-.31.57-.49.93-.73 2.08-.51 2.84-.05 1.61.95 3.47 2.26 3.55 2.32.8.64 1.33 1.75.7 2.74-.47.72-1.87 2.85-3.89 2.85Zm-.14-1.51c.84.09 1.76-.62 2.79-2.17.17-.27-.34-.71-.34-.72 0 0-1.86-1.31-3.41-2.22-.17-.1-.73-.39-1.16-.06-.19.15-.36.3-.5.43-.42.37-.84.73-1.49.73-.84-.01-1.43-.15-4-2.72-.03-.03-3.19-3.59-3.22-4.5-.03-.64.35-1.07.72-1.49.13-.14.28-.3.43-.5.33-.42.04-.99-.06-1.15l-.06-.1c-1.4-2.38-1.98-3.36-2.35-3.78-.05 0-.39.07-.63.18-.02.01-2.25 1.06-2.06 2.73.33 2.96 2.54 6.81 5.78 10.05 3.44 3.19 6.57 4.92 9.56 5.29Z"
        fill={color}
      />
    </Svg>
  </View>
);

export default ContactIcon;
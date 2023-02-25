import React from 'react';
import {View} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import Colors from '../../constants/Colors';

const ContactIcon = ({style}: {style?: any}) => (
  <View style={style}>
    <Svg width={45} height={45}>
      <Path
        d="M35.9 44.02c3.86 0 6.54-4.06 7.88-6.06 1.04-1.58.66-3.66-.88-4.76a98.18 98.18 0 0 0-7.64-4.98c-1.54-.9-3.84-1.34-5.68.12-.44.34-.82.68-1.14.98-.32.28-.74.66-.9.7-.96-.04-3.32-1.92-6.98-5.56-3.66-3.66-5.52-6-5.56-7 .04-.14.42-.56.7-.88.3-.32.62-.7.98-1.14 1.46-1.86 1.02-4.16.12-5.68-3.18-5.4-4.22-7.18-5.18-8.24-1.52-1.7-4.22-.6-4.74-.36-.26.1-6.48 3-5.88 8.5.74 6.66 5.38 14.84 12.42 21.9.22.22.48.5.78.84 2.72 2.96 9.1 9.86 21.06 11.58.24.02.44.04.64.04Zm-3.54-13.64c.6 0 1.16.3 1.38.42a103.692 103.692 0 0 1 7.4 4.84c.22.16.28.44.12.68-.98 1.48-3.3 4.94-5.6 4.7-10.86-1.56-16.72-7.92-19.24-10.64-.34-.38-.64-.68-.88-.92C9.06 22.98 4.62 15.28 3.96 9.36 3.6 6.02 8.06 3.9 8.1 3.88c.46-.2 1.16-.34 1.36-.28.64.76 1.8 2.74 4.62 7.52.28.48.86 1.62.2 2.46-.3.38-.6.7-.84 1-.74.84-1.52 1.7-1.48 2.98.06 1.68 1.14 3.7 6.44 9 5.3 5.3 7.32 6.38 9 6.44 1.26-.02 2.16-.72 2.98-1.48.28-.26.6-.54 1-.84.29-.196.63-.3.98-.3Z"
        fill="#0046BE"
      />
      <Path
        d="M31.5 22c.82 0 1.5-.68 1.5-1.5 0-4.84-3.66-8.5-8.5-8.5-.82 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5c3.18 0 5.5 2.32 5.5 5.5 0 .82.68 1.5 1.5 1.5Zm8-1c.82 0 1.5-.68 1.5-1.5C41 11.24 33.76 4 25.5 4c-.82 0-1.5.68-1.5 1.5S24.68 7 25.5 7C32.16 7 38 12.84 38 19.5c0 .82.68 1.5 1.5 1.5Z"
        fill="#0046BE"
      />
    </Svg>
  </View>
);

export default ContactIcon;

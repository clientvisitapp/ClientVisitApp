import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import Colors from '../../constants/Colors';

const CaretRightIcon = ({style}: {style?: any}) => (
  <View style={style}>
    <Svg width={24} height={24} fill="none">
      <Path
        d="M10.7501 19C10.6001 19 10.4401 18.95 10.3101 18.86C10.2299 18.8023 10.1619 18.7294 10.1099 18.6453C10.0579 18.5613 10.023 18.4678 10.0072 18.3703C9.99142 18.2727 9.99503 18.173 10.0178 18.0769C10.0407 17.9808 10.0822 17.8901 10.1401 17.81L14.3301 12L10.1401 6.19001C9.90014 5.85001 9.97014 5.39001 10.3101 5.14001C10.6501 4.90001 11.1101 4.98001 11.3601 5.31001L15.8601 11.56C16.0501 11.82 16.0501 12.17 15.8601 12.44L11.3601 18.69C11.2101 18.89 10.9801 19 10.7501 19Z"
        fill={Colors.BLACK}
      />
    </Svg>
  </View>
);
export default CaretRightIcon;

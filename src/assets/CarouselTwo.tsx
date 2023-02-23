import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';

const CarouselTwo: React.FC = () => {
  const {mainImage, subImage, text} = styles;
  const {GREETER, BESTBUY, CTDC} = Strings;
  const {BLUE} = Colors;
  return (
    <>
      <Image style={mainImage} source={require('../assets/Campus.png')} />
      <Image style={subImage} source={require('../assets/TextBackDrop.png')} />
      <Text style={text}>
        {'\t\t\t' + GREETER}
        <Text style={{color: BLUE}}>{BESTBUY}</Text>
        {CTDC}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  mainImage: {
    height: 140,
    width: 393,
  },
  subImage: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    position: 'absolute',
    right: 12,
    bottom: 10,
  },
});

export default CarouselTwo;

import React from 'react';
import {Image, StyleSheet} from 'react-native';

const CarouselOne: React.FC = () => {
  const {mainImage, subImage} = styles;
  return (
    <>
      <Image style={mainImage} source={require('../assets/Campus.png')} />
      <Image style={subImage} source={require('../assets/TcsLogo.png')} />
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
    top: 10,
    right: 15,
    width: 73,
    height: 17,
  },
});

export default CarouselOne;

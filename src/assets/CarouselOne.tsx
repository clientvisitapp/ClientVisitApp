import React from 'react';
import {Image, StyleSheet} from 'react-native';

const CarouselOne: React.FC = () => {
  const {mainImage, subImage} = styles;
  return (
    <>
      <Image
        style={mainImage}
        source={{
          uri: 'https://coestaticcontent.blob.core.windows.net/visit/745332020fcf9604c2aa2be9a58b063e.webp',
        }}
      />
      <Image
        style={subImage}
        source={{
          uri: 'https://coestaticcontent.blob.core.windows.net/visit/Tcs logo.png',
        }}
      />
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

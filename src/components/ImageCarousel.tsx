import React, {useState} from 'react';
import CarouselOne from '../assets/CarouselOne';
import CarouselTwo from '../assets/CarouselTwo';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Dimensions, StyleSheet, View} from 'react-native';
import Colors from '../constants/Colors';

const ImageCarousel: React.FC = () => {
  const {imageContainer, paginationContainer, dotStyle} = styles;
  const enteries = [
    <CarouselOne />,
    <CarouselTwo />,
    <CarouselOne />,
    <CarouselTwo />,
    <CarouselOne />,
  ];

  const {width: screenWidth} = Dimensions.get('window');
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({item, index}: {item: any; index: number}) => {
    return <View style={imageContainer}>{item}</View>;
  };

  return (
    <View>
      <Carousel
        data={enteries}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={index => setActiveSlide(index)}
        loop={true}
        autoplay={true}
        autoplayInterval={5000}
        vertical={false}
      />
      <Pagination
        dotsLength={enteries.length}
        activeDotIndex={activeSlide}
        containerStyle={paginationContainer}
        dotStyle={dotStyle}
        inactiveDotOpacity={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
    backgroundColor: 'lightgrey',
  },
  paginationContainer: {
    position: 'absolute',
    top: 108,
    left: 90,
  },
  dotStyle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 0,
    backgroundColor: Colors.BLACK,
  },
});

export default ImageCarousel;

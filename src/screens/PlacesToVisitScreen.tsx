import React, {useEffect} from 'react';
import {CustomText as Text} from '../components/CustomText';
import Colors from '../constants/Colors';
import PlacesToVisitScreenCard from '../components/PlacesToVisitScreenCard';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Strings from '../constants/Strings';
import PlacesToVisitIcon from '../assets/icons/PlacesToVisitIcon';
import {
  ChennaiPlacesToVisitScreenMockData,
  KochiPlacesToVisitScreenMockData,
} from '../mocks/mockData';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../redux/store';
import {getPlacesToVisit} from '../redux/slices/placesToVisitSlice';
import {placesToVisitType} from '../types';

const {GREY, WHITE, BLUE} = Colors;

const PlacesToVisitScreen: React.FC = () => {
  const {headingStyle, text} = styles;
  const ChennaiListHeader = () => {
    return (
      <View style={headingStyle}>
        <Text style={text}>{placesToVisitDetails[0]?.location}</Text>
      </View>
    );
  };
  const KochiListHeader = () => {
    return (
      <View style={headingStyle}>
        <Text style={text}>{placesToVisitDetails[1]?.location}</Text>
      </View>
    );
  };
  const dispatch = useDispatch<AppDispatch>();
  const {
    loader,
    placesToVisit: {placesToVisitDetails},
  } = useSelector(
    (state: {
      loader: {isLoading: boolean};
      placesToVisit: {placesToVisitDetails: placesToVisitType[]};
    }) => state,
  );

  useEffect(() => {
    dispatch(getPlacesToVisit());
  }, []);

  if (loader.isLoading) {
    return (
      <ActivityIndicator
        color={BLUE}
        size="large"
        style={{flex: 1, justifyContent: 'center'}}
      />
    );
  }

  return (
    <View style={{backgroundColor: WHITE, paddingBottom: 16}}>
      <ScrollView>
        <Image
          source={require('../assets/PlacesToVisitScreenHeaderImage.png')}
          style={{width: '100%', height: 120}}
        />
        <FlatList
          data={placesToVisitDetails[0]?.placeDetails}
          numColumns={2}
          scrollEnabled={false}
          ListHeaderComponent={ChennaiListHeader}
          renderItem={({item, index}) => {
            return (
              <PlacesToVisitScreenCard
                key={index}
                imageSource={item.imageSource}
                siteSource={item.siteSource}
                attraction={item.attraction}
              />
            );
          }}
        />
        <FlatList
          data={placesToVisitDetails[1]?.placeDetails}
          numColumns={2}
          scrollEnabled={false}
          ListHeaderComponent={KochiListHeader}
          renderItem={({item, index}) => {
            return (
              <PlacesToVisitScreenCard
                key={index}
                imageSource={item.imageSource}
                siteSource={item.siteSource}
                attraction={item.attraction}
              />
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingStyle: {
    height: 52,
    padding: 16,
  },
  text: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 20,
  },
});

export default PlacesToVisitScreen;

import React, {useEffect} from 'react';
import {CustomText as Text} from '../components/CustomText';
import Colors from '../constants/Colors';
import PlacesToVisitScreenCard from '../components/PlacesToVisitScreenCard';
import {
  ActivityIndicator,
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
  const {headingStyle, text, iconStyle, chennaiText} = styles;
  const {CHENNAI, PLACESTOVISIT} = Strings;
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
    <View style={{backgroundColor: WHITE}}>
      <ScrollView>
        <Image
          source={{
            uri: 'https://coestaticcontent.blob.core.windows.net/visit/chennai.jpg',
          }}
          style={{height: 159}}
        />
        <View style={headingStyle}>
          <Text style={text}>Chennai</Text>
        </View>
        {placesToVisitDetails[0]?.placeDetails?.map((item, index) => {
          return (
            <PlacesToVisitScreenCard
              key={index}
              imageSource={item.imageSource}
              siteSource={item.siteSource}
              attraction={item.attraction}
            />
          );
        })}
        <View style={headingStyle}>
          <Text style={text}>Kochi</Text>
        </View>
        {placesToVisitDetails[1]?.placeDetails?.map((item, index) => {
          return (
            <PlacesToVisitScreenCard
              key={index}
              imageSource={item.imageSource}
              siteSource={item.siteSource}
              attraction={item.attraction}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingStyle: {
    height: 52,
    padding: 16,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    backgroundColor: Colors.WHITE,
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 64,
    width: 390,
    backgroundColor: WHITE,
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    marginLeft: 9,
  },
  iconStyle: {
    marginLeft: 15,
  },
  chennaiText: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    width: 357,
    marginLeft: 16,
  },
});

export default PlacesToVisitScreen;

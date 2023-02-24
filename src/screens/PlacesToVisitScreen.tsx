import React, {useEffect} from 'react';
import {CustomText as Text} from '../components/CustomText';
import Colors from '../constants/Colors';
import PlacesToVisitScreenCard from '../components/PlacesToVisitScreenCard';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import Strings from '../constants/Strings';
import PlacesToVisitIcon from '../assets/icons/PlacesToVisitIcon';
import {PlacesToVisitScreenMockData} from '../mocks/mockData';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../redux/store';
import {getPlacesToVisit} from '../redux/slices/placesToVisitSlice';

const {GREY, WHITE} = Colors;

const PlacesToVisitScreen: React.FC = () => {
  const {headerStyle, text, iconStyle, cardView, chennaiText} = styles;
  const {CHENNAI, PLACESTOVISIT} = Strings;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPlacesToVisit());
  }, []);

  return (
    <View style={{backgroundColor: GREY}}>
      <View style={headerStyle}>
        <PlacesToVisitIcon style={iconStyle} />
        <Text style={text}>{PLACESTOVISIT}</Text>
      </View>
      <ScrollView>
        <Image
          source={{
            uri: 'https://coestaticcontent.blob.core.windows.net/visit/chennai.jpg',
          }}
          style={cardView}
        />
        <Text style={chennaiText}>{CHENNAI}</Text>
        {PlacesToVisitScreenMockData.map((mock, index) => {
          return (
            <PlacesToVisitScreenCard
              key={index}
              heading={mock.heading}
              imageSource={mock.imageSource}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
  cardView: {
    height: 171,
    width: 357,
    borderRadius: 4,
    marginTop: 11,
    marginBottom: 6,
    marginHorizontal: 16,
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

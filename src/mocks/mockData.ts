import Strings from '../constants/Strings';

const {PLACE} = Strings;

const ContactScreenMockData = [
  {
    imageSource: require('../assets/ContactDP.png'),
    name: 'Chandrasekhara Rao Sasanapuri',
    phone: '+91 9xxxxxxxxx',
    mail: 'chandrasekhararao.sasanapuri@bestbuy.com',
  },
  {
    imageSource: require('../assets/ContactDP.png'),
    name: '<Name>',
    phone: '+91 9xxxxxxxxx',
    mail: '<E-mail>',
  },
  {
    imageSource: require('../assets/ContactDP.png'),
    name: '<Name>',
    phone: '+91 8xxxxxxxxx',
    mail: '<E-mail>',
  },
  {
    imageSource: require('../assets/ContactDP.png'),
    name: '<Name>',
    phone: '+91 7xxxxxxxxx',
    mail: '<E-mail>',
  },
  {
    imageSource: require('../assets/ContactDP.png'),
    name: '<Name>',
    phone: '+91 6xxxxxxxxx',
    mail: '<E-mail>',
  },
  {
    imageSource: require('../assets/ContactDP.png'),
    name: '<Name>',
    phone: '+91 5xxxxxxxxx',
    mail: '<E-mail>',
  },
];

const PlacesToVisitScreenMockData = [
  {
    heading: `1. ${PLACE}`,
    imageSource: require('../assets/PlaceImage.png'),
  },
  {
    heading: `2. ${PLACE}`,
    imageSource: require('../assets/PlaceImage.png'),
  },
  {
    heading: `3. ${PLACE}`,
    imageSource: require('../assets/PlaceImage.png'),
  },
];

const AgendaMock = [
  {title: 'Day- 1'},
  {title: 'Day- 2'},
  {title: 'Day- 3'},
  {title: 'Day- 4'},
];

const ActivityMock = [
  {
    header: 'Activity- 1',
    location: 'Location: BestBuy ODC Floor 4 EB1',
    date: 'Date: 01 March',
    time: 'Time: 11:00 am',
  },
  {
    header: 'Activity- 2',
    location: 'Location: BestBuy ODC Floor 4 EB1',
    date: 'Date: 01 March',
    time: 'Time: 11:00 am',
  },
  {
    header: 'Activity- 3',
    location: 'Location: BestBuy ODC Floor 4 EB1',
    date: 'Date: 01 March',
    time: 'Time: 11:00 am',
  },
];

export {
  ContactScreenMockData,
  PlacesToVisitScreenMockData,
  AgendaMock,
  ActivityMock,
};

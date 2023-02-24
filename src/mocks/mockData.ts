import Strings from '../constants/Strings';

const {PLACE} = Strings;

const ContactScreenMockData = [
  {
    imageSource: {
      uri: 'https://coestaticcontent.blob.core.windows.net/visit/Logo circle.png',
    },
    name: 'Chandrasekhara Rao Sasanapuri',
    phone: '+91 9xxxxxxxxx',
    mail: 'chandrasekhararao.sasanapuri@bestbuy.com',
  },
  {
    imageSource: {
      uri: 'https://coestaticcontent.blob.core.windows.net/visit/Logo circle.png',
    },
    name: '<Name>',
    phone: '+91 9xxxxxxxxx',
    mail: '<E-mail>',
  },
  {
    imageSource: {
      uri: 'https://coestaticcontent.blob.core.windows.net/visit/Logo circle.png',
    },
    name: '<Name>',
    phone: '+91 8xxxxxxxxx',
    mail: '<E-mail>',
  },
  {
    imageSource: {
      uri: 'https://coestaticcontent.blob.core.windows.net/visit/Logo circle.png',
    },
    name: '<Name>',
    phone: '+91 7xxxxxxxxx',
    mail: '<E-mail>',
  },
  {
    imageSource: {
      uri: 'https://coestaticcontent.blob.core.windows.net/visit/Logo circle.png',
    },
    name: '<Name>',
    phone: '+91 6xxxxxxxxx',
    mail: '<E-mail>',
  },
  {
    imageSource: {
      uri: 'https://coestaticcontent.blob.core.windows.net/visit/Logo circle.png',
    },
    name: '<Name>',
    phone: '+91 5xxxxxxxxx',
    mail: '<E-mail>',
  },
];

const PlacesToVisitScreenMockData = [
  {
    heading: `1. ${PLACE}`,
    imageSource: {
      uri: 'https://coestaticcontent.blob.core.windows.net/visit/shore-temple-640319518-5c27ce2146e0fb0001e9184b.jpeg',
    },
  },
  {
    heading: `2. ${PLACE}`,
    imageSource: {
      uri: 'https://coestaticcontent.blob.core.windows.net/visit/places-to-visit-in-kochi.jpeg',
    },
  },
  {
    heading: `3. ${PLACE}`,
    imageSource: {
      uri: 'https://coestaticcontent.blob.core.windows.net/visit/shore-temple-640319518-5c27ce2146e0fb0001e9184b.jpeg',
    },
  },
];

const AgendaMock = [
  {title: 'Day- 1', date: '21-02-2023'},
  {title: 'Day- 2', date: '22-02-2023'},
  {title: 'Day- 3', date: '23-02-2023'},
  {title: 'Day- 4', date: '24-02-2023'},
];

const response = [
  {
    id: '63f497da7319a33898d543d9',
    dateOfVisit: '03-01-2023',
    agendaStartTime: '09:00 AM',
    agendaLocation: 'Siruseri - Chennai',
    agendaActivityTitle: 'Welcome to CTDC',
    agendaActivityDetails: 'Welcome ceremony to Chennai Office',
  },
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

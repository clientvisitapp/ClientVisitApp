import Strings from '../constants/Strings';

const {PLACE} = Strings;

const ContactScreenMockData = [
  {
    imageSource: {
      uri: 'https://coestaticcontent.blob.core.windows.net/visit/Logo circle.png',
    },
    name: 'Chandrasekhara Rao Sasanapuri',
    phone: '+91 9842768712',
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
  {title: '01 March', date: '03-01-2023'},
  {title: '02 March', date: '03-02-2023'},
  {title: '03 March', date: '03-03-2023'},
  {title: '04 March', date: '03-04-2023'},
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
  [
    {
      header: 'Travel to TCS Siruseri Office from Chennai Airport',
      location: 'Location: BestBuy ODC Floor 4 EB1',
      description:
        'Flight arriving Chennai - 10.30 AM. Receive at Airport and drive to TCS Siruseri Office. Flight: From Bangalore to Chennai | Indigo flight 6E 904 Leaving 9:25 AM, Arriving 10:30 AM',
      time: 'Time: 11:00 am',
      team: 'TCS Teams - TCS Hosting Team',
    },
    {
      header: 'Activity- 2',
      location: 'Location: BestBuy ODC Floor 4 EB1',
      description:
        'Flight arriving Chennai - 10.30 AM. Receive at Airport and drive to TCS Siruseri Office. Flight: From Bangalore to Chennai | Indigo flight 6E 904 Leaving 9:25 AM, Arriving 10:30 AM',
      time: 'Time: 11:00 am',
      team: 'TCS Teams - TCS Hosting Team',
    },
    {
      header: 'Activity- 3',
      location: 'Location: BestBuy ODC Floor 4 EB1',
      description:
        'Flight arriving Chennai - 10.30 AM. Receive at Airport and drive to TCS Siruseri Office. Flight: From Bangalore to Chennai | Indigo flight 6E 904 Leaving 9:25 AM, Arriving 10:30 AM',
      time: 'Time: 11:00 am',
      team: 'TCS Teams - TCS Hosting Team',
    },
    {
      header: 'Day 4 Activity',
      location: 'Location: BestBuy ODC Floor 4 EB1',
      description:
        'Flight arriving Chennai - 10.30 AM. Receive at Airport and drive to TCS Siruseri Office. Flight: From Bangalore to Chennai | Indigo flight 6E 904 Leaving 9:25 AM, Arriving 10:30 AM',
      time: 'Time: 11:00 am',
      team: 'TCS Teams - TCS Hosting Team',
    },
    {
      header: 'Day 4 Activity',
      location: 'Location: BestBuy ODC Floor 4 EB1',
      description:
        'Flight arriving Chennai - 10.30 AM. Receive at Airport and drive to TCS Siruseri Office. Flight: From Bangalore to Chennai | Indigo flight 6E 904 Leaving 9:25 AM, Arriving 10:30 AM',
      time: 'Time: 11:00 am',
      team: 'TCS Teams - TCS Hosting Team',
    },
    {
      header: 'Day 4 Activity',
      location: 'Location: BestBuy ODC Floor 4 EB1',
      description:
        'Flight arriving Chennai - 10.30 AM. Receive at Airport and drive to TCS Siruseri Office. Flight: From Bangalore to Chennai | Indigo flight 6E 904 Leaving 9:25 AM, Arriving 10:30 AM',
      time: 'Time: 11:00 am',
      team: 'TCS Teams - TCS Hosting Team',
    },
  ],
  [
    {
      header: 'Activity',
      location: 'Location: BestBuy ODC Floor 4 EB1',
      description:
        'Flight arriving Chennai - 10.30 AM. Receive at Airport and drive to TCS Siruseri Office. Flight: From Bangalore to Chennai | Indigo flight 6E 904 Leaving 9:25 AM, Arriving 10:30 AM',
      time: 'Time: 11:00 am',
      team: 'TCS Teams - TCS Hosting Team',
    },
    {
      header: 'Activity',
      location: 'Location: BestBuy ODC Floor 4 EB1',
      description:
        'Flight arriving Chennai - 10.30 AM. Receive at Airport and drive to TCS Siruseri Office. Flight: From Bangalore to Chennai | Indigo flight 6E 904 Leaving 9:25 AM, Arriving 10:30 AM',
      time: 'Time: 11:00 am',
      team: 'TCS Teams - TCS Hosting Team',
    },
    {
      header: 'Activity',
      location: 'Location: BestBuy ODC Floor 4 EB1',
      description:
        'Flight arriving Chennai - 10.30 AM. Receive at Airport and drive to TCS Siruseri Office. Flight: From Bangalore to Chennai | Indigo flight 6E 904 Leaving 9:25 AM, Arriving 10:30 AM',
      time: 'Time: 11:00 am',
      team: 'TCS Teams - TCS Hosting Team',
    },
  ],
  [
    {
      header: 'Day 3 Activity',
      location: 'Location: BestBuy ODC Floor 4 EB1',
      description:
        'Flight arriving Chennai - 10.30 AM. Receive at Airport and drive to TCS Siruseri Office. Flight: From Bangalore to Chennai | Indigo flight 6E 904 Leaving 9:25 AM, Arriving 10:30 AM',
      time: 'Time: 11:00 am',
      team: 'TCS Teams - TCS Hosting Team',
    },
    {
      header: 'Day 3 Activity',
      location: 'Location: BestBuy ODC Floor 4 EB1',
      description:
        'Flight arriving Chennai - 10.30 AM. Receive at Airport and drive to TCS Siruseri Office. Flight: From Bangalore to Chennai | Indigo flight 6E 904 Leaving 9:25 AM, Arriving 10:30 AM',
      time: 'Time: 11:00 am',
      team: 'TCS Teams - TCS Hosting Team',
    },
    {
      header: 'Day 3 Activity',
      location: 'Location: BestBuy ODC Floor 4 EB1',
      description:
        'Flight arriving Chennai - 10.30 AM. Receive at Airport and drive to TCS Siruseri Office. Flight: From Bangalore to Chennai | Indigo flight 6E 904 Leaving 9:25 AM, Arriving 10:30 AM',
      time: 'Time: 11:00 am',
      team: 'TCS Teams - TCS Hosting Team',
    },
  ],
  [
    {
      header: 'Day 4 Activity',
      location: 'Location: BestBuy ODC Floor 4 EB1',
      description:
        'Flight arriving Chennai - 10.30 AM. Receive at Airport and drive to TCS Siruseri Office. Flight: From Bangalore to Chennai | Indigo flight 6E 904 Leaving 9:25 AM, Arriving 10:30 AM',
      time: 'Time: 11:00 am',
      team: 'TCS Teams - TCS Hosting Team',
    },
    {
      header: 'Day 4 Activity',
      location: 'Location: BestBuy ODC Floor 4 EB1',
      description:
        'Flight arriving Chennai - 10.30 AM. Receive at Airport and drive to TCS Siruseri Office. Flight: From Bangalore to Chennai | Indigo flight 6E 904 Leaving 9:25 AM, Arriving 10:30 AM',
      time: 'Time: 11:00 am',
      team: 'TCS Teams - TCS Hosting Team',
    },
    {
      header: 'Day 4 Activity',
      location: 'Location: BestBuy ODC Floor 4 EB1',
      description:
        'Flight arriving Chennai - 10.30 AM. Receive at Airport and drive to TCS Siruseri Office. Flight: From Bangalore to Chennai | Indigo flight 6E 904 Leaving 9:25 AM, Arriving 10:30 AM',
      time: 'Time: 11:00 am',
      team: 'TCS Teams - TCS Hosting Team',
    },
  ],
];

export {
  ContactScreenMockData,
  PlacesToVisitScreenMockData,
  AgendaMock,
  ActivityMock,
};

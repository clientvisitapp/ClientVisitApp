export type agenda = {
  date: string;
  agendaDetails: {
    title: string;
    description: string;
    location: string;
    time: string;
  }[];
}[];

export type formattedAgenda = {
  date: string;
  activityDetail: {
    title: string;
    description: string;
    location: string;
    time: string;
  };
};

export type placesToVisit = {
  location: string;
  placeDetails: {
    heading: string;
    imageSource: string;
  }[];
};

export type formattedPlacesToVisitType = {
  location: string;
  placeDetail: {
    heading: string;
    imageSource: string;
  };
};

export type contactsType = {
  imageSource: string;
  name: string;
  phone: string;
  email: string;
};

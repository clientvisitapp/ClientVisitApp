export type loginCredentials = {
  username: string;
  password: string;
};

export type agendaType = {
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

export type placesToVisitType = {
  location: string;
  placeDetails: {
    attraction: string;
    siteSource: any;
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

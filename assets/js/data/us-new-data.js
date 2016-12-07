import abbrState from './abbrState';

let data = [
  {
    "State": "Alabama",
    "winner2016": "Trump",
    "winner2012": "Romney",
    "winner2008": "McCain",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "Alaska",
    "winner2016": "Trump",
    "winner2012": "Romney",
    "winner2008": "McCain",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "Arizona",
    "winner2016": "Trump",
    "winner2012": "Romney",
    "winner2008": "McCain",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "Arkansas",
    "winner2016": "Trump",
    "winner2012": "Romney",
    "winner2008": "McCain",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "California",
    "winner2016": "Clinton",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Kerry",
    "winner2000": "Al Gore"
  },
  {
    "State": "Colorado",
    "winner2016": "Clinton",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "Connecticut",
    "winner2016": "Clinton",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Kerry",
    "winner2000": "Al Gore"
  },
  {
    "State": "Delaware",
    "winner2016": "Clinton",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Kerry",
    "winner2000": "Al Gore"
  },
  {
    "State": "District of Columbia",
    "winner2016": "Clinton",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Kerry",
    "winner2000": "Al Gore"
  },
  {
    "State": "Florida",
    "winner2016": "Trump",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "Georgia",
    "winner2016": "Trump",
    "winner2012": "Romney",
    "winner2008": "McCain",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "Hawaii",
    "winner2016": "Clinton",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Kerry",
    "winner2000": "Al Gore"
  },
  {
    "State": "Idaho",
    "winner2016": "Trump",
    "winner2012": "Romney",
    "winner2008": "McCain",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "Illinois",
    "winner2016": "Clinton",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Kerry",
    "winner2000": "Al Gore"
  },
  {
    "State": "Indiana",
    "winner2016": "Trump",
    "winner2012": "Romney",
    "winner2008": "Obama",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "Iowa",
    "winner2016": "Trump",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Bush",
    "winner2000": "Al Gore"
  },
  {
    "State": "Kansas",
    "winner2016": "Trump",
    "winner2012": "Romney",
    "winner2008": "McCain",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "Kentucky",
    "winner2016": "Trump",
    "winner2012": "Romney",
    "winner2008": "McCain",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "Louisiana",
    "winner2016": "Trump",
    "winner2012": "Romney",
    "winner2008": "McCain",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "Maine",
    "winner2016": "Clinton",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Kerry",
    "winner2000": "Al Gore"
  },
  {
    "State": "Maryland",
    "winner2016": "Clinton",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Kerry",
    "winner2000": "Al Gore"
  },
  {
    "State": "Massachusetts",
    "winner2016": "Clinton",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Kerry",
    "winner2000": "Al Gore"
  },
  {
    "State": "Michigan",
    "winner2016": "Trump",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Kerry",
    "winner2000": "Al Gore"
  },
  {
    "State": "Minnesota",
    "winner2016": "Clinton",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Kerry",
    "winner2000": "Al Gore"
  },
  {
    "State": "Mississippi",
    "winner2016": "Trump",
    "winner2012": "Romney",
    "winner2008": "McCain",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "Missouri",
    "winner2016": "Trump",
    "winner2012": "Romney",
    "winner2008": "McCain",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "Montana",
    "winner2016": "Trump",
    "winner2012": "Romney",
    "winner2008": "McCain",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "Nebraska",
    "winner2016": "Trump",
    "winner2012": "Romney",
    "winner2008": "McCain",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "Nevada",
    "winner2016": "Clinton",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "New Hampshire",
    "winner2016": "Clinton",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Kerry",
    "winner2000": "Bush"
  },
  {
    "State": "New Jersey",
    "winner2016": "Clinton",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Kerry",
    "winner2000": "Al Gore"
  },
  {
    "State": "New Mexico",
    "winner2016": "Clinton",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Bush",
    "winner2000": "Al Gore"
  },
  {
    "State": "New York",
    "winner2016": "Clinton",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Kerry",
    "winner2000": "Al Gore"
  },
  {
    "State": "North Carolina",
    "winner2016": "Trump",
    "winner2012": "Romney",
    "winner2008": "Obama",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "North Dakota",
    "winner2016": "Trump",
    "winner2012": "Romney",
    "winner2008": "McCain",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "Ohio",
    "winner2016": "Trump",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "Oklahoma",
    "winner2016": "Trump",
    "winner2012": "Romney",
    "winner2008": "McCain",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "Oregon",
    "winner2016": "Clinton",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Kerry",
    "winner2000": "Al Gore"
  },
  {
    "State": "Pennsylvania",
    "winner2016": "Trump",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Kerry",
    "winner2000": "Al Gore"
  },
  {
    "State": "Rhode Island",
    "winner2016": "Clinton",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Kerry",
    "winner2000": "Al Gore"
  },
  {
    "State": "South Carolina",
    "winner2016": "Trump",
    "winner2012": "Romney",
    "winner2008": "McCain",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "South Dakota",
    "winner2016": "Trump",
    "winner2012": "Romney",
    "winner2008": "McCain",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "Tennessee",
    "winner2016": "Trump",
    "winner2012": "Romney",
    "winner2008": "McCain",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "Texas",
    "winner2016": "Trump",
    "winner2012": "Romney",
    "winner2008": "McCain",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "Utah",
    "winner2016": "Trump",
    "winner2012": "Romney",
    "winner2008": "McCain",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "Vermont",
    "winner2016": "Clinton",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Kerry",
    "winner2000": "Al Gore"
  },
  {
    "State": "Virginia",
    "winner2016": "Clinton",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "Washington",
    "winner2016": "Clinton",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Kerry",
    "winner2000": "Al Gore"
  },
  {
    "State": "West Virginia",
    "winner2016": "Trump",
    "winner2012": "Romney",
    "winner2008": "McCain",
    "winner2004": "Bush",
    "winner2000": "Bush"
  },
  {
    "State": "Wisconsin",
    "winner2016": "Trump",
    "winner2012": "Obama",
    "winner2008": "Obama",
    "winner2004": "Kerry",
    "winner2000": "Al Gore"
  },
  {
    "State": "Wyoming",
    "winner2016": "Trump",
    "winner2012": "Romney",
    "winner2008": "McCain",
    "winner2004": "Bush",
    "winner2000": "Bush"
  }
];

data = data.map((state) => ({ ...state, "postal-code": abbrState(state.State, 'abbr'), value: state.winner2016 == "Trump" ? 0 : 1 }))
export default data;

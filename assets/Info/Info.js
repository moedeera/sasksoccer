import img1 from "./logo.webp";

import fall from "./fallsoccer.jpg";
import winter from "./winter.jpg";

const homeLandingInfo = {
  title: "Saskatoon Soccer News & Updates",
  content: `Your premier destination for all things recreational soccer in Saskatoon! Whether you're a seasoned player or just looking to have fun`,
  button: true,
  buttonLink: "/latest",
  buttonName: "More",
  mini: false,
  image: fall,
};

const homeLandingInfo2 = {
  title: "Saskatoon Soccer News",
  content: `Your premier destination for all things recreational soccer in Saskatoon! Whether you're a seasoned player or just looking to have fun, we offer a wide range of soccer activities and tournaments for all skill levels. Join our vibrant community, stay active, and enjoy the beautiful game with friends old and new. Explore our upcoming events, register your team, and get ready to hit the field with SaskSoccerHub!`,
  button: true,
  buttonLink: "/",
  buttonName: "Read More",
  mini: false,
};

const shopCardsData = [
  {
    name: "SoccerLocker",
    id: "soccerlocker",
    date: null,
    description: `477 2nd Avenue North
Saskatoon, Saskatchewan S7K 2C1`,
    image: null,
    link: "https://soccerlocker.ca",
    blog: true,
    button: {
      text: "Website",
    },
  },

  {
    name: "Olympian Sports",
    date: null,
    id: "olympiansports",
    description:
      "Core Neighborhood Planning Area, 101 Idylwyld Dr N, Saskatoon, SK S7L 0Y6",
    image: null,
    link: "https://www.olympiansports.ca",
    blog: true,
    button: {
      text: "Website",
    },
  },
  {
    name: "Al Anderson's Source For Sports",
    date: null,
    id: "alanderson",
    description: `208 Avenue B S, Saskatoon, SK S7M 1M3`,
    image: null,
    link: "https://www.sourceforsports.ca",
    blog: true,
    button: {
      text: "Website",
    },
  },
  {
    name: "Sport Chek",
    date: null,
    id: "inquiries",
    description: `3310 8 St E, Saskatoon, SK S7H 5M3`,
    image: null,
    link: "https://www.sportchek.ca/en/store-details/sk/centre-circle-8th-sport-chek-338.html?utm_source=google&utm_medium=organic&utm_content=338",
    blog: true,
    button: {
      text: "More",
    },
  },
];

const homeCardsData = [
  {
    name: "New to Soccer?",
    id: "newarrivals",
    date: "July 1, 2024",
    description:
      "Don't know where and when to start? Just click on this post to get quick scoops on how to start playing soccer.",
    image:
      "https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "play/casual",
    newWindow: false,
    blog: true,
    button: {
      text: "More",
    },
  },

  {
    name: "Adult Soccer",
    date: "July 2, 2024",
    id: "adultsoccer",
    description:
      "Looking to compete? Saskatoon has a variety of divisions and leagues suitable for all ages and skill levels.",
    image:
      "https://www.saskatoonadultsoccer.com/cloud/saskatoonadultsoccerinc/css/img/assocLogo.svg",
    link: "https://www.saskatoonadultsoccer.com",
    newWindow: true,
    blog: true,
    button: {
      text: "Website",
    },
  },
  {
    name: "Youth Soccer",
    date: "June 20, 2024",
    id: "tournaments",
    description:
      "A plethora of youth tournaments and leagues to keep your kids active and engaged.",
    image:
      "https://www.saskatoonyouthsoccer.ca/cloud/saskatoonyouthsoccer/css/img/assocLogo.svg",
    link: "https://www.saskatoonyouthsoccer.ca",
    newWindow: true,
    blog: true,
    button: {
      text: "Website",
    },
  },
  {
    name: "FAQs",
    date: "June 20, 2024",
    id: "inquiries",
    description:
      "Looking to become a ref? Book a field? Or any other questions? Check out our FAQ page",
    image:
      "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage0.c1c04e41.jpg&w=640&q=75",
    link: "/faqs",
    newWindow: false,
    blog: true,
    button: {
      text: "More",
    },
  },
];
const playCardsData = [
  {
    name: "Saskatoon Adult Soccer ",
    id: "sas",
    date: "July 1, 2024",
    description: "Competitive & Organized Soccer For Adults",
    image:
      "https://www.saskatoonadultsoccer.com/cloud/saskatoonadultsoccerinc/css/img/assocLogo.svg",
    link: "https://www.saskatoonadultsoccer.com/",
    blog: true,
    button: {
      text: "Go to Site",
    },
  },

  {
    name: "Saskatoon Youth Soccer",
    date: "July 2, 2024",
    id: "youthsoccer",
    description: "Competitive & Organized Soccer For Youth",
    image:
      "https://www.saskatoonyouthsoccer.ca/cloud/saskatoonyouthsoccer/css/img/assocLogo.svg",
    link: "https://www.saskatoonyouthsoccer.ca",
    blog: true,
    button: {
      text: "Go to Site",
    },
  },
  {
    name: "Casual Soccer",
    date: "June 20, 2024",
    id: "tournaments",
    description: "Non-competitive meetups intended for fitness and fun.",
    image: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg",
    link: "/play/casual",
    blog: true,
    button: {
      text: "Read More",
    },
  },
];

const homeCarouselData = [
  {
    title: "Aurora Tournament This weekend.",
    date: "November 21 2024",
    content: `Another year of the Aurora tournament should be in the running this weekend. Thanks to all those who made it possible tis season`,
    link: "https://www.hollandiacup.ca/",
  },
  {
    title: "Indoor Season 2024 Starting October.",
    date: "September 23 2024",
    content: `With all the teams registered and the alignments set,
      another Indoor Season is set to be on its way. For more information,
      visit the Saskatoon Adult Soccer Website.`,
    link: null,
  },
  {
    title: "Refresher course for Referees starting August 26.",
    date: "August 23 2024",
    content: `Registered referees will have to option to
      renew their license between August 26th and August 29th. For more information,
      visit the Saskatoon Adult Soccer Website.`,
    link: null,
  },
  {
    title: "Mini World Cup This September",
    date: "August 1 2024",
    content:
      "WCP is organizing a Mini Coed World Cup starting from September 5th to the 8th. To get more details read the link below.",
    link: "https://wcpsport.ca/tournament-info-soccer/",
  },
  {
    title: "Canada Women's team wins Olympic opener",
    date: "July 25 2024",
    content:
      "Canada Women's team kicks off title defense in Paris Olympics with a 2-1 win against New Zealand ",
    link: "https://nationalpost.com/sports/olympics/canadian-womens-soccer-team-rallies-past-new-zealand-at-2024-olympics",
  },
  {
    title: "Air Quality Alerts for Outdoor Soccer",
    date: "July 21 2024",
    content:
      "Before playing soccer in Saskatoon, always check air quality alerts. Poor air quality can harm your health, so stay informed and choose safe times for outdoor activities. Your lungs will thank you!",
    link: "https://weather.gc.ca/airquality/pages/skaq-002_e.html",
  },
  {
    title: "The Western Premier Shield wraps up this weekend!",
    date: "July 18 2024",
    content:
      "Thanks to the amazing organizers and volunteers for another annual Women's Western Premier Shield tournament. For more information on the tournament and how to potentially get involved next year, click the link below.",
    link: "https://saskatoonadultsoccer.com/content/the-western-premier-shield",
  },

  {
    title: "Canada Men's Team Finish 4th in Copa America 2023",
    date: "July 13, 2024",
    content:
      "Congrats to the boys! Canada moved up eight spots in the latest FIFA men's rankings after finishing fourth at the Copa America. The Canadians, who narrowly lost to Uruguay in Saturday's third-place game at the tournament, sat 40th in the rankings released Thursday by soccer's world governing body.",
    link: "https://www.cp24.com/sports/canada-jumps-to-40th-in-fifa-rankings-after-fourth-place-finish-at-copa-america-1.6969700#:~:text=Canada%20moved%20up%20eight%20spots,by%20soccer's%20world%20governing%20body.",
  },

  {
    title: "Hollandia Cup Youth Tournament",
    date: "Sunday May 26, 2024",
    content:
      "Hollandia Cup 2024 has wrapped up in Saskatoon for U11 to U18s, Congratulations to all the winners and thanks to the amazing organizers of the tournament. If you would like more information, visit the Hollandia site by clicking the link below",
    link: "https://www.hollandiacup.ca/",
  },
  {
    title: "Lakewood Just Kick it Tournament",
    date: "May 12, 2024",
    content:
      "Thanks to the organizers and volunteers for another annual Lakewood tournament. For more information on the tournament and how to potentially get involved next season, please click the link below.",
    link: "http://www.lakewoodsoccer.com/content/just-kick-it-cup---outdoor-2024",
  },
  // {
  //   title: "Saskatoon Adult Soccer Championship",
  //   date: "May 3, 2024",
  //   content:
  //     "The Saskatoon Adult Soccer Championship brings together the best adult teams in the city. Held at the SaskTel Sports Centre, this one-day tournament promises intense competition and high-quality soccer. Don't miss out on the action!",
  // },
];
const block1HomePage = {
  reverse: true,
  title: "Summer Soccer Is Here ",
  date: "May 21 2024",
  content: `
  Summer soccer is in with numerous tournaments for youth. Major events include the Lakewood, Hollandia, and Women's Western Shield tournaments, catering to players from ages 11 to 18.
  `,
  content_sec: `These are a fantastic opportunity for young athletes to showcase their skills, enjoy competitive play, and experience the thrill of the sport in a supportive community. Families and fans will enjoy the vibrant atmosphere and the chance to see future soccer stars in action`,
  image:
    "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.442efdd9.webp&w=640&q=75",
};
const block1HomePageFall = {
  reverse: true,
  title: "Indoor season is here",
  date: "September 22 2024",
  content: `Looking for a team to join? Plenty of teams are looking for players to fill their rosters before indoor season kicks in. `,
  content_sec: ` Everything from Division 1 to Masters to Co-eds are still available.  If you are looking for something more casual you can check out our Meetup Group  on meetup up.com `,
  // image:
  //   "https://images.pexels.com/photos/2935982/pexels-photo-2935982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  image: fall,
  buttonText: "Read More",
  buttonLink: "/",
};
const block1HomePageWinter = {
  reverse: true,
  title: "Don't Miss out on Winter Soccer",
  date: "December 18 2024",
  content: `Far from being a time to hang up the cleats, winter in Saskatoon is bustling with activity, offering tournaments for both youth and adult teams. These events provide a great way to stay active, hone skills, and foster a sense of community, no matter the weather outside. Whether you're a seasoned player or just looking to join a local league, there's no shortage of opportunities to get involved.`,
  content_sec: `To stay on top of all the action, make sure to check out SaskSoccerHub, your go-to source for the latest updates on tournaments, schedules, and league news. This website keeps you informed about everything happening in Saskatoon's soccer scene, ensuring you never miss a match or registration deadline. Be sure to subscribe to our newsletter for real-time updates and exclusive insights into upcoming events. Don't let winter weather fool you—there’s always something happening on the pitch in Saskatoon!`,
  // image:
  //   "https://images.pexels.com/photos/2935982/pexels-photo-2935982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  image: winter,
  buttonText: "Read More",
  buttonLink: "/",
};
const block1HomePage2 = {
  reverse: true,
  title: "Support Canada in Copa America 2024 ",
  date: "May 21 2024",
  content: `
  In addition to local tournaments, soccer enthusiasts can look forward to watching Canada compete in the Copa America 2024. This prestigious international tournament will feature top teams from across the Americas, offering thrilling matches and showcasing some of the best talent in the world. It's an excellent chance for soccer fans to support the national team and enjoy world-class soccer.
  `,

  image: img1,
};

export {
  homeLandingInfo,
  homeCardsData,
  homeCarouselData,
  block1HomePage,
  playCardsData,
  shopCardsData,
  block1HomePageFall,
  block1HomePageWinter,
};

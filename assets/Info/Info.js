import img1 from "./logo.webp";
import spring from "./spring.jpg";
import fall from "./fallsoccer.jpg";
import winter from "./winter.jpg";

const homeLandingInfo = {
  title: "Saskatoon Soccer News & Updates",
  content: `Welcome to your premier destination for recreational soccer in Saskatoon! Stay informed with the latest news, upcoming events, league highlights, and everything you need to know about playing soccer in town. Whether you’re a seasoned player or just looking to have fun on the field, we’re here to connect you with opportunities that suit your skill level. Get ready to lace up and be a part of Saskatoon’s soccer scene`,
  button: true,
  buttonLink: "/news",
  buttonName: "Latest",
  mini: false,
  image: fall,
};

const summerSoccerInfo = {
  title: "Summer Soccer Is Here",
  content: `Summer soccer in Saskatoon is officially underway. 
  The outdoor season for youth, adult, and coed leagues has 
  kicked off across the city’s top venues—bringing together
  athletes of all ages and abilities. From skill-building youth programs to competitive adult divisions and fun, social coed matches,
   there’s a place for everyone to join a team, stay active, and soak up the summer sun.,
`,
  content2: `Registration is now open—don’t miss your chance to be part of Saskatoon’s vibrant soccer community this season.`,
  button: false,
  buttonLink: "/news",
  buttonName: "Latest",
  mini: false,
  image: spring,
};

const homeLandingInfo2 = {
  title: "Saskatoon Soccer News",
  content: `Your premier destination for all things recreational soccer in Saskatoon! Whether you're a seasoned player or just looking to have fun, we offer a wide range of soccer activities and tournaments for all skill levels. Join our vibrant community, stay active, and enjoy the beautiful game with friends old and new. Explore our upcoming events, register your team, and get ready to hit the field with SaskSoccerHub!`,
  button: true,
  buttonLink: "/",
  buttonName: "Read More",
  mini: false,
  image: spring,
};

const newsHeaderInfo = {
  header: "Outdoor Soccer is here",
  description:
    "Outdoor season is on the way. Keep a check on our Leagues Menu for Latest Updates",
  link: "/news/2025-outdoor-season-is-here",
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

const blogs = [
  {
    slug: "outdoor2025",
    title: "2025 Outdoor season is here",
    author: "Admin",
    date: "May 1 2025",
    description: "Outdoor season is here don't miss out on the fun.",
    image: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg",
    content: `Outdoor soccer season has officially kicked off in Saskatoon for both adult and youth leagues! Player registrations are now open, and team alignments for every division are available on the main website. Whether you're a beginner or a seasoned player, there's a spot for every age and skill level. Field locations are listed online so you can plan your games with ease. Plus, this season brings a variety of exciting tournaments you won’t want to miss. Make sure to check the updates page regularly to stay informed on schedules, changes, and new events throughout the season. See you on the pitch!`,
  },
  {
    slug: "registration2025",
    title: "Outdoor 2025 Soccer Registration is Now Open!",
    author: "Admin",
    date: "April 15 2025",
    description: "Outdoor season is here don't miss out on the fun.",
    image: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg",
    content: `Saskatoon Adult Soccer’s Outdoor 2025 season is here, and all players must register individually to participate. The Individual Player Registration (IPR) fee is $45, separate from your team’s league fees. This one-time, non-refundable fee covers the full outdoor season (May–August), regardless of how many teams you join.

Your IPR fee includes membership with the Saskatchewan Soccer Association (SSA), which provides access to sanctioned referees, insurance, and major events like Provincials and Nationals. It also supports Canada’s national teams.

Breakdown of the $45 fee: $34 SSA fee, Remaining covers transaction costs, RAMP, and taxes

Registration must be completed before your first game, or you risk suspension. Once registered, players are automatically added to team rosters.

Team Personnel must also pay a one-time $11.10 fee.

Register today to ensure you're eligible, insured, and ready to play!`,
  },
];

const homeCardsData = [
  // {
  //   name: "New to Soccer?",
  //   id: "newarrivals",
  //   date: "July 1, 2024",
  //   description:
  //     "Don't know where and when to start? Just click on this post to get quick scoops on how to start playing soccer.",
  //   image:
  //     "https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   link: "play/casual",
  //   newWindow: false,
  //   blog: true,
  //   button: {
  //     text: "More",
  //   },
  // },

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
    title: "Indoor 2025-2026 Registration Open",
    date: "July 11 2025",
    content: "Register your team for the 2025-26 Indoor season",
    link: "https://www.saskatoonadultsoccer.com/article/105280",
  },
  {
    title: "Outdoor Playoff Schedule",
    date: "June 14 2025",
    content:
      "The playoff schedule is ready for both half and full field leagues!",
    link: "https://www.saskatoonadultsoccer.com/content/outdoor-playoff-schedule",
  },
  {
    title: "Saskatoon World Cup This Weekend",
    date: "May 14 2025",
    content:
      "Another rendition of the Saskatoon World Cup kicks off this weekend. Click on the link for more info",
    link: "https://saskatoonworldcup.com/",
  },
  {
    title: "Outdoor Player Registration Open",
    date: "April 21 2025",
    content:
      "Outdoor Player registrations started for the 2025 outdoor season. ",
    link: "https://www.saskatoonadultsoccer.com/content/outdoor-individual-player-registration",
  },
  {
    title: "Outdoor Team Registration dates",
    date: "March 21 2025",
    content: "Outdoor Team registrations started and is open until April 2.",
    link: "/leagues",
  },
  {
    title: "Indoor Playoffs",
    date: "March 01 2025",
    content:
      "Indoor playoffs have started for the 2024-25 season. All the results will be updated on the playoffs tab of the league page tables.",
    link: "/leagues",
  },
  {
    title: "Jesse Marsch Event",
    date: "January 26 2025",
    content:
      "National Men's Soccer Team coach coming to town to town to talk and meet with local community leaders.",
    link: "https://www.rampregistrations.com/public/participantregpage?v3=20cd24cfd7&pgname=JesseMarsch",
  },

  {
    title: "January Chills Tournament to start on the 24th.",
    date: "January 18 2025",
    content: `The CHILLS tournament is back again and is for every divisional category.
. Registration has started as of now. Click on the link for more`,
    link: "https://www.saskatoonadultsoccer.com/content/january-chills-turf-tournament/",
  },
  {
    title: "Enjoy your holidays.",
    date: "December 16 2024",
    content: `Another Year of soccer in saskatoon has passed and big thanks to everyone who helped to me that happen. Now it's time to take a break and enjoy the holidays with friends and family. Happy holidays and have a happy new year.`,
    link: null,
  },
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

const block1HomePageSpring = {
  reverse: true,
  title: "Register Now for Outdoor Season",
  date: "April 10 2025",
  content: `Spring in Saskatoon means one thing for soccer lovers—it's time to gear up for the outdoor season! As the weather warms and the fields dry out, players of all ages are getting ready to kick off another exciting summer of competition, camaraderie, and fun in the sun. Now’s the time to secure your spot in one of the many leagues kicking off soon.`,
  content_sec: `Head over to Saskatoon Adult Soccer or it's Youth Website to find everything you need to register for outdoor summer soccer. From youth development programs to adult recreational and competitive leagues, there's a place for everyone to play. Don’t wait—registration deadlines are approaching fast. Sign up for our newsletter to stay informed about key dates, schedule releases, and exclusive early access to events. Let this be your best summer season yet!`,
  image: spring,
  buttonText: "Register Today",
  buttonLink:
    "https://www.saskatoonadultsoccer.com/content/outdoor-individual-player-registration",
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
  block1HomePageSpring,
  newsHeaderInfo,
  summerSoccerInfo,
  blogs,
};

const homeLandingInfo = {
  title: "Saskatoon Soccer News",
  content: `Your premier destination for all things recreational soccer in Saskatoon! Whether you're a seasoned player or just looking to have fun, we offer a wide range of soccer activities and tournaments for all skill levels. Join our vibrant community, stay active, and enjoy the beautiful game with friends old and new. Explore our upcoming events, register your team, and get ready to hit the field with SaskSoccerHub!`,
  button: true,
  buttonLink: "/",
  buttonName: "Read More",
  mini: false,
};
const homeCardsData = [
  {
    name: "New to Soccer?",
    id: "newarrivals",
    date: "July 1, 2024",
    description:
      "Don't know where and when to start? No worries, just click on this post to get quick scoops on how to start playing soccer in Saskatoon.",
    image:
      "https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "blogs/new-to-soccer",
    blog: true,
    button: {
      text: "Read More",
    },
  },

  {
    name: "Saskatoon Adult Soccer",
    date: "July 2, 2024",
    id: "adultsoccer",
    description:
      "Looking to compete? Saskatoon has a variety of divisions and leagues suitable for all ages and skill levels.",
    image:
      "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "blogs/adult-soccer",
    blog: true,
    button: {
      text: "Read More",
    },
  },
  {
    name: "Youth Tournaments",
    date: "June 20, 2024",
    id: "tournaments",
    description:
      "A plethora of youth tournaments this summer to keep your kids active and engaged.",
    image: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg",
    link: "blogs/youth-tournaments",
    blog: true,
    button: {
      text: "Read More",
    },
  },
];

const homeCarouselData = [
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

export { homeLandingInfo, homeCardsData, homeCarouselData };

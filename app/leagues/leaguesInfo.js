const openerContent = {
  title: `Find and Follow Tournaments and Leagues.`,
  content: `
  Playing or following a league here in Saskatoon? Just find it here in our
  list. If you would like regular updates, create an account and save the league.
  No charge or personal information required, just sign in with your google account and 
  we will take care of the rest.
  `,
};

const currentData = [
  {
    name: "Mens 1 Full field",
    date: "May 15 2024 to August 10 2024",
    id: "leagues/Mens_full_field_1",
    description: "Mens 1 Full field",
    image:
      "https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Mens 2 Full field",
    date: "May 15 2024 to August 10 2024",
    description: "Mens 2 Full field",
    id: "leagues/Mens_full_field2",
    image:
      "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Mens 50+ Legends Full field",
    date: "May 15 2024 to August 10 2024",
    id: "leagues/Mens_legends_1",
    description: "Mens 50+ Legends Full field",

    image: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg",
  },
  {
    name: "Womans 1 Full field",
    date: "May 15 2024 to August 10 2024",
    id: "leagues/Womens_full_field",
    description: "Women's group 1 Full field 2024",
    image:
      "https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Coed half field",
    date: "May 15 2024 to August 10 2024",
    id: "leagues/Coed_half_field",
    description: "Coed half field league 2024",
    image:
      "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "CoedFull field",
    date: "May 15 2024 to August 10 2024",
    id: "leagues/Coed_full_field_2",
    description: "Mens Legends Full field",

    image: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg",
  },
];

const createOwnLeague = {
  title: `Your current league not in our database? Let us know`,
  content: `Contact us today to include your own league and even get access to an Admin account so you can manage
  it directly. Just click the link below`,
  buttonText: "Contact",
  buttonLink: "/contact",
  image:
    "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  reverse: true,
};

export { currentData, openerContent, createOwnLeague };

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Import Table components
import Locations from "./Locations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const IndoorSeasonInfo = () => {
  const teams = {
    mensBoarded: {
      group1: ["Evolution FC", "Galaxy FC", "Hub City FC", "Whitecaps FC"],
      group2: ["Ronin FC", "The Brodeo", "Thicc and Quick FC"],
      group3: [
        "Das Boots",
        "Exegol United",
        "Millwall FC",
        "Tauro FC",
        "Tired Turtles",
      ],
      masters: [
        "Paladins",
        "PPG FC",
        "Predators",
        "VendAsta Dodgers",
        "Viking Masters",
      ],
    },
    mensTurf: {
      group1: ["ASTRA U23", "Galaxy TFC", "Simba", "Khukuri FC", "Ubuntu FC"],
      group2: [
        "Agi Sqwad",
        "Brothers FC",
        "Cumberland FC",
        "Deportivo Sask",
        "Proper Gander FC",
        "PSK",
        "Thundercats FC",
      ],
      group3: [
        "Flamingo FC",
        "Fulchester United",
        "Galacticos FC",
        "NLA FC",
        "Sparta FC",
        "Vikings Turf",
        "Young Boys",
      ],
      group4: [
        "FC Con Carne",
        "Law-Sel",
        "Pitchrippers",
        "Oats",
        "Red Star",
        "Clearwater Revival",
        "Saigon FC",
        "Thunderducks FC",
      ],
      group5: [
        "Bohemian Club",
        "Atletico Saskatoon",
        "Due Birra Unito",
        "Dump and Chase",
        "Lucky Charmers",
        "OneTeam FC",
      ],
      group6: [
        "Donald Ducks",
        "Midfield Crisis",
        "MyKey Drifters",
        "NHFC",
        "Whisky Jacks",
        "WTFC",
      ],
    },
    womensBoarded: {
      group1: [
        "Aftershock FC",
        "Alianza",
        "Dragons",
        "Old Goats",
        "Rampage",
        "Shooters",
        "Thorns FC",
        "Tsunami",
      ],
      group2: [
        "Barnstone FU",
        "Beardys United",
        "Coderunners",
        "Purple Haze",
        "Rebels",
        "Royal Llama",
        "Queens United",
      ],
    },
  };
  return (
    <div className="component-container modified-container mt-10 p-4">
      <div className="h3-header text-2xl font-bold mb-2">
        Indoor Season 2024-25
      </div>
      <div className="">
        <p className="text-base">
          {" "}
          Saskatoon Adult and youth Soccer both have their indoor season
          starting around this October. For more information on each you can
          visit their respective websites at{" "}
          <a
            className="underline"
            href="https://www.saskatoonadultsoccer.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            saskatoonadultsoccer.com
          </a>{" "}
          &{" "}
          <a
            className="underline"
            href="https://saskatoonyouthsoccer.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            saskatoonyouthsoccer.ca
          </a>
          . Matches will be played at the Saskatoon Soccer center 150 Nelson
          road and Henk Ruys center on 19 Primrose Dr. For more information on
          this fields check the links below.
        </p>

        <div className="h3-header text-2xl font-bold mt-4">
          Alignment & Teams
        </div>

        <Accordion type="single" collapsible className="md:w-full">
          {/* Mens Boarded Section */}
          <AccordionItem value="mens-boarded">
            <AccordionTrigger>Mens Boarded</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Group</TableHead>
                    <TableHead>Teams</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Object.entries(teams.mensBoarded).map(
                    ([group, teamList], index) => (
                      <TableRow key={index}>
                        <TableCell className="font-bold">
                          Mens Boarded {index + 1}
                        </TableCell>
                        <TableCell>{teamList.join(", ")}</TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>

          {/* Mens Turf Section */}
          <AccordionItem value="mens-turf">
            <AccordionTrigger>Mens Turf</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Group</TableHead>
                    <TableHead>Teams</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Object.entries(teams.mensTurf).map(
                    ([group, teamList], index) => (
                      <TableRow key={index}>
                        <TableCell className="font-bold">
                          Mens Turf {index + 1}
                        </TableCell>
                        <TableCell>{teamList.join(", ")}</TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>

          {/* Womens Boarded Section */}
          <AccordionItem value="womens-boarded">
            <AccordionTrigger>Womens Boarded</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Group</TableHead>
                    <TableHead>Teams</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Object.entries(teams.womensBoarded).map(
                    ([group, teamList], index) => (
                      <TableRow key={index}>
                        <TableCell className="font-bold">
                          Womens Boarded {index + 1}{" "}
                        </TableCell>
                        <TableCell>{teamList.join(", ")}</TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Locations />
      </div>
    </div>
  );
};

export default IndoorSeasonInfo;

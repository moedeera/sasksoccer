import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Locations from "./Locations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OutdoorSeasonInfo = () => {
  // ────────── ALIGNMENT DATA ──────────
  const teams = {
    // FULL‑FIELD
    mensFullField: {
      group1: [
        "Hub City FC",
        "Chosen Generation FC",
        "Simba Khukuri FC",
        "Ubuntu FC",
      ],
      group2: [
        "Sahara Scorpions",
        "SGFC",
        "Thicc Stunnas",
        "Flamingo FC",
        "LAFC",
        "Exegol United",
      ],
      group3: [
        "Mosquito FC",
        "NLA FC",
        "Poundmaker FC",
        "Beardy's MFC",
        "Chicken Tikka Takka",
        "Fulchester United",
      ],
      group4: [
        "Vikings",
        "Doom Crew",
        "Thunderducks FC",
        "Club Athletico Saskatoon",
        "One Team FC",
        "Galacticos FC",
      ],
      group5: [
        "Law‑Sel Pitchrippers",
        "FC Con Carne",
        "Bohemian",
        "Lucky Charmers",
        "Flatlands FC",
        "Ahmadiyya Football Club ‑ A.F.C.",
      ],
      masters: ["Paladins", "PPG FC", "Dodgers FC", "Vikings Masters"],
      legends: ["Arsenold", "Eclipse 050", "SAL", "MG Dodgers 50+"],
    },

    womensFullField: {
      group1: ["Galacticos WFC", "Tsunami", "Assault", "White Claws FC"],
      group2: ["BSH", "Rebels", "RnR Drillers", "Thorns"],
      group3: [
        "The Misfits",
        "Misty FC",
        "Beardys United",
        "Barnstone Breeckeez",
        "MGBHLM Grizzlies FC",
        "Hollandia",
        "Rivercity Stars",
      ],
    },

    // HALF‑FIELD
    mensHalfField: {
      group1: [
        "Galaxy FC",
        "Cumberland FC",
        "Proper Gander FC",
        "Thundercats FC",
        "PSK",
      ],
      group2: [
        "Young Boys",
        "Matrix",
        "Tauro FC",
        "Das Boots",
        "Predators",
        "Millwall FC",
        "Los Solis FC",
        "Saigon FC",
      ],
      group3: [
        "Drifters FC",
        "Rec League Rejects",
        "Brazukada FC",
        "Due Birra Unito",
        "Donald Ducks",
        "Whiskey Jacks",
      ],
    },

    womensHalfField: {
      group1: ["Old Goats", "Dragons", "Shooters", "Rampage"],
      group2: [
        "Barnstone FU",
        "United",
        "Drillers",
        "Hotspurs",
        "Blue Demons",
        "Xtremes",
        "Gongshow",
        "Sweetgrass",
      ],
    },

    coedHalfField: {
      group1: [
        "Ganbaro!!!",
        "Vikings Coed",
        "Sole FC",
        "NLA CFC",
        "SPA Sentinels",
        "Injury Prone",
        "Shank City",
        "Still Kicking",
        "What the Hell?!?",
      ],
      group2: [
        "The One‑One‑Six",
        "Bridge City Bruins",
        "Pathetico Madrid",
        "AFC Richmond",
        "Roadkill",
        "Aces FC",
        "Family Ties",
        "Samurai Pizza Cats",
        "Nuclear Nuts",
        "Tardy Troupe",
      ],
    },

    legendsMenHalfField: ["Whiskey Jacks", "Pitchrippers"],
    legendsWomenHalfField: [
      "Prairiefire",
      "OG Drillers",
      "Still Chaos",
      "Ceres",
    ],
  };

  // Which divisions to show (in the order you want)
  const accordionSections = [
    { key: "mensFullField", label: "Men's Full‑Field" },
    { key: "womensFullField", label: "Women’s Full‑Field" },
    { key: "mensHalfField", label: "Men's Half‑Field" },
    { key: "womensHalfField", label: "Women’s Half‑Field" },
    { key: "coedHalfField", label: "Co‑ed Half‑Field" },
    { key: "legendsMenHalfField", label: "Legends (Men)" },
    { key: "legendsWomenHalfField", label: "Legends (Women)" },
  ];

  // Render helper (works for grouped objects or plain arrays)
  const renderDivision = (divisionData) => {
    // Simple list (Legends divisions)
    if (Array.isArray(divisionData)) {
      return (
        <TableBody>
          <TableRow>
            <TableCell className="font-bold">Teams</TableCell>
            <TableCell>{divisionData.join(", ")}</TableCell>
          </TableRow>
        </TableBody>
      );
    }

    // Grouped object (most divisions)
    return (
      <TableBody>
        {Object.entries(divisionData).map(([_, list], idx) => (
          <TableRow key={idx}>
            <TableCell className="font-bold">Group {idx + 1}</TableCell>
            <TableCell>{list.join(", ")}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
  };

  // ────────── MARK‑UP ──────────
  return (
    <div className="component-container modified-container mt-10 p-4">
      <h3 className="text-2xl font-bold mb-2">Outdoor Season 2025</h3>

      <p className="text-base">
        Saskatoon’s outdoor adult &amp; youth leagues run
        May&nbsp;→&nbsp;September. Matches are in fields all across the city in
        Saskatoon. Alignment for every division is listed below.
      </p>

      <h3 className="text-2xl font-bold mt-4">Alignment &amp; Teams</h3>

      <Accordion type="single" collapsible className="md:w-full text-black">
        {accordionSections.map(({ key, label }) => {
          const divisionData = teams[key];
          return (
            <AccordionItem key={key} value={key}>
              <AccordionTrigger className="hover:bg-emerald-500">
                <span className="text-black group-hover:text-white">
                  {label}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-32">Group</TableHead>
                      <TableHead>Teams</TableHead>
                    </TableRow>
                  </TableHeader>
                  {renderDivision(divisionData)}
                </Table>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      {/* optional: location map / directions */}
      <Locations />
    </div>
  );
};

export default OutdoorSeasonInfo;

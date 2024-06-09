"use client";

import { useEffect, useState } from "react";
import "./Table.css";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const defaultInfo = [
  {
    name: "Lakewood",
    draw_total: 0,
    goals_against: 5,
    goals_for: 30,
    id: "60d0fe4f5311236168a109fa",
    loss_total: 0,
    win_total: 14,
  },
  {
    name: "Bayern Hatfield",
    draw_total: 1,
    goals_against: 5,
    goals_for: 19,
    id: "60d0fe4f5311236168a109fb",
    loss_total: 1,
    win_total: 12,
  },
  {
    name: "FC Strikers",
    draw_total: 2,
    goals_against: 2,
    goals_for: 10,
    id: "60d0fe4f5311236168a109fb",
    loss_total: 3,
    win_total: 9,
  },
  {
    name: "Westfield United",
    draw_total: 4,
    goals_against: 10,
    goals_for: 12,
    id: "60d0fe4f5311236168a109fb",
    loss_total: 3,
    win_total: 7,
  },
  {
    name: "Hollandia Mertens",
    draw_total: 3,
    goals_against: 5,
    goals_for: 12,
    id: "60d0fe4f5311236168a109fb",
    loss_total: 5,
    win_total: 6,
  },
  {
    name: "Becker FC",
    draw_total: 4,
    goals_against: 4,
    goals_for: 8,
    id: "60d0fe4f5311236168a109fb",
    loss_total: 5,
    win_total: 5,
  },
  {
    name: "Deportivo Santiago",
    draw_total: 5,
    goals_against: 18,
    goals_for: 6,
    id: "60d0fe4f5311236168a109fb",
    loss_total: 8,
    win_total: 4,
  },
  {
    name: "Arsenal GFC",
    draw_total: 2,
    goals_against: 20,
    goals_for: 4,
    id: "60d0fe4f5311236168a109fb",
    loss_total: 10,
    win_total: 2,
  },
];

const TableComponent = ({ data }) => {
  const [teamsInfo, setTeamsInfo] = useState(defaultInfo);
  useEffect(() => {
    if (data) {
      setTeamsInfo(data);
    }
  }, []);
  return (
    <div className="component-container border border-grey ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>

            <TableHead>Team</TableHead>
            <TableHead className="text-right">GP</TableHead>
            <TableHead className="text-right">Win</TableHead>
            <TableHead className="text-right">Draw</TableHead>
            <TableHead className="text-right">Loss</TableHead>
            <TableHead className="text-right">GF</TableHead>
            <TableHead className="text-right">GA</TableHead>
            <TableHead className="text-right">Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teamsInfo.map((team, index) => (
            <TableRow key={team.name}>
              <TableCell className="font-medium">{index + 1}</TableCell>

              <TableCell>{team.name}</TableCell>

              <TableCell className="text-right">
                {team.win_total + team.draw_total + team.loss_total}
              </TableCell>
              <TableCell className="text-right">{team.win_total}</TableCell>
              <TableCell className="text-right">{team.draw_total}</TableCell>
              <TableCell className="text-right">{team.loss_total}</TableCell>
              <TableCell className="text-right">{team.goals_for}</TableCell>
              <TableCell className="text-right">{team.goals_against}</TableCell>
              <TableCell className="text-right">
                {team.win_total * 3 + team.draw_total}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableComponent;

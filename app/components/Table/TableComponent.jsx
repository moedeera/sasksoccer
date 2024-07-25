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
import Spinner from "../Spinner";

const TableComponent = ({ data }) => {
  const [teamsInfo, setTeamsInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setTeamsInfo(data);
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className=" border border-grey ">
      <Table>
        <TableHeader>
          <TableRow className="bg-black hover:bg-black">
            <TableHead className="w-[100px]">#</TableHead>

            <TableHead className="font-bold text-white">Team</TableHead>
            <TableHead className="text-right font-bold text-white">
              GP
            </TableHead>
            <TableHead className="text-right font-bold text-white">
              Win
            </TableHead>
            <TableHead className="text-right font-bold text-white">
              Draw
            </TableHead>
            <TableHead className="text-right font-bold text-white">
              Loss
            </TableHead>
            <TableHead className="stats-goals text-right font-bold text-white">
              GF
            </TableHead>
            <TableHead className="stats-goals text-right font-bold text-white">
              GA
            </TableHead>
            <TableHead className="text-right font-bold text-white">
              Points
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teamsInfo?.map((team, index) => (
            <TableRow key={team.name}>
              <TableCell className="font-medium">{index + 1}</TableCell>

              <TableCell>{team.name}</TableCell>

              <TableCell className="text-right">
                {team.win_total + team.draw_total + team.loss_total}
              </TableCell>
              <TableCell className="text-right">{team.win_total}</TableCell>
              <TableCell className="text-right">{team.draw_total}</TableCell>
              <TableCell className="text-right">{team.loss_total}</TableCell>
              <TableCell className="stats-goals text-right">
                {team.goals_for}
              </TableCell>
              <TableCell className="stats-goals text-right">
                {team.goals_against}
              </TableCell>
              <TableCell className="text-right font-bold">
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

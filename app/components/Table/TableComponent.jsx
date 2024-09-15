"use client";

import { useEffect, useState } from "react";
import "./Table.css";
import { GiTrophy } from "react-icons/gi";
import { FaMedal } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Spinner from "../Spinner";

const TableComponent = ({ data, leagueDetails, name }) => {
  const [teamsInfo, setTeamsInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentdetails, setCurrentDetails] = useState("");

  useEffect(() => {
    const match = leagueDetails.some((detail) => detail.group === name);
    if (match) {
      const matchingDetails = leagueDetails.find(
        (detail) => detail.group === name
      );

      setCurrentDetails(matchingDetails);
    }
  }, []);

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
      <Table
        className="text-xs md:text-sm"
        style={{ transition: "all .35s ease-in-out" }}
      >
        <TableHeader>
          <TableRow className="bg-black hover:bg-black">
            <TableHead className="w-[10px]">#</TableHead>
            <TableHead className="font-bold text-white text-xs md:text-sm ">
              Team
            </TableHead>
            <TableHead className="text-right font-bold text-white text-xs md:text-sm">
              GP
            </TableHead>
            <TableHead className="text-right font-bold text-white md:hidden">
              Record
            </TableHead>
            <TableHead className="text-right font-bold text-white stats-record">
              Win
            </TableHead>
            <TableHead className="text-right font-bold text-white stats-record">
              Loss
            </TableHead>
            <TableHead className="text-right font-bold text-white stats-record">
              Draw
            </TableHead>
            <TableHead className="stats-goals text-right font-bold text-white">
              GF
            </TableHead>
            <TableHead className="stats-goals text-right font-bold text-white">
              GA
            </TableHead>
            <TableHead className="text-right  text-white text-xs md:text-sm">
              Pts
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teamsInfo?.map((team, index) => (
            <TableRow
              key={team.name}
              className={
                currentdetails &&
                currentdetails.completed &&
                currentdetails.winner === team.name
                  ? "bg-green-100"
                  : currentdetails &&
                    currentdetails.completed &&
                    currentdetails.runnerUp === team.name
                  ? "bg-gray-100"
                  : ""
              }
            >
              <TableCell className="font-medium">{index + 1}</TableCell>

              <TableCell
                //  className="text-xs md:text-sm"
                className={
                  currentdetails &&
                  currentdetails.completed &&
                  currentdetails.winner === team.name
                    ? "text-xs md:text-sm font-bold flex items-center"
                    : currentdetails &&
                      currentdetails.completed &&
                      currentdetails.runnerUp === team.name
                    ? "text-xs md:text-sm font-bold"
                    : "text-xs md:text-sm"
                }
              >
                {team.name}
                {currentdetails &&
                  currentdetails.completed &&
                  currentdetails.winner === team.name && (
                    <small
                      className="hidden md:inline ml-2"
                      style={{ fontSize: "4px" }}
                    >
                      {" "}
                      <GiTrophy />
                    </small>
                  )}
                {currentdetails &&
                  currentdetails.completed &&
                  currentdetails.runnerUp === team.name && (
                    <small
                      className="hidden md:inline ml-2"
                      style={{ fontSize: "4px" }}
                    >
                      *
                    </small>
                  )}
              </TableCell>

              <TableCell className="text-right text-xs md:text-sm">
                {team.win_total + team.draw_total + team.loss_total}
              </TableCell>
              <TableCell className="text-right text-xs md:text-sm md:hidden">
                {`${team.win_total}-${team.loss_total}-${team.draw_total}`}
              </TableCell>
              <TableCell className="text-right stats-record">
                {team.win_total}
              </TableCell>
              <TableCell className="text-right stats-record">
                {team.loss_total}
              </TableCell>
              <TableCell className="text-right stats-record">
                {team.draw_total}
              </TableCell>
              <TableCell className="stats-goals text-right">
                {team.goals_for}
              </TableCell>
              <TableCell className="stats-goals text-right">
                {team.goals_against}
              </TableCell>
              <TableCell className="text-right font-bold text-xs md:text-sm">
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

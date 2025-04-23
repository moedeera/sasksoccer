import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/tabs";
import React from "react";

const SingleTable = ({ teamsInfo }) => {
  console.log(teamsInfo);
  return (
    <div>
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
          {teamsInfo?.map((teamInfo, index) => (
            <TableRow key={teamInfo.team}>
              <TableCell className="font-medium">{index + 1}</TableCell>

              <TableCell
              //  className="text-xs md:text-sm"
              >
                {teamInfo.team}
              </TableCell>

              <TableCell className="text-right text-xs md:text-sm">
                {teamInfo.win_total + teamInfo.draw_total + teamInfo.loss_total}
              </TableCell>
              <TableCell className="text-right text-xs md:text-sm md:hidden">
                {`${teamInfo.win_total}-${teamInfo.loss_total}-${teamInfo.draw_total}`}
              </TableCell>
              <TableCell className="text-right stats-record">
                {teamInfo.win_total}
              </TableCell>
              <TableCell className="text-right stats-record">
                {teamInfo.loss_total}
              </TableCell>
              <TableCell className="text-right stats-record">
                {teamInfo.draw_total}
              </TableCell>
              <TableCell className="stats-goals text-right">
                {teamInfo.goals_for}
              </TableCell>
              <TableCell className="stats-goals text-right">
                {teamInfo.goals_against}
              </TableCell>
              <TableCell className="text-right font-bold text-xs md:text-sm">
                {teamInfo.win_total * 3 + teamInfo.draw_total}
              </TableCell>
            </TableRow>
          ))}
        </TableHeader>
      </Table>
    </div>
  );
};

export default SingleTable;

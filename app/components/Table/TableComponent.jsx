"use client";

import { useState } from "react";
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

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    teamName: "Lakewood",
    record: [3, 3, 2, 5, 3],
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    teamName: "Bayern Hatfield",
    record: [3, 3, 2, 5, 3],
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    teamName: "FC Strikers",
    record: [3, 3, 2, 5, 3],
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    teamName: "Westfield United",
    record: [3, 3, 2, 5, 3],
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    teamName: "Hollandia Mertens",
    record: [3, 3, 2, 5, 3],
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    teamName: "Becker FC",
    record: [3, 3, 2, 5, 3],
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    teamName: "Deportivo Santiago",
    record: [3, 3, 2, 5, 3],
    paymentMethod: "Credit Card",
  },
];

const TableComponent = () => {
  const [table, setTable] = useState();
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
          {invoices.map((invoice, index) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{index + 1}</TableCell>

              <TableCell>{invoice.teamName}</TableCell>
              <TableCell className="text-right">8</TableCell>
              <TableCell className="text-right">{invoice.record[0]}</TableCell>
              <TableCell className="text-right">{invoice.record[1]}</TableCell>
              <TableCell className="text-right">{invoice.record[2]}</TableCell>
              <TableCell className="text-right">{invoice.record[3]}</TableCell>
              <TableCell className="text-right">{invoice.record[4]}</TableCell>
              <TableCell className="text-right">
                {invoice.record[1] * 3 + invoice.record[2]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableComponent;

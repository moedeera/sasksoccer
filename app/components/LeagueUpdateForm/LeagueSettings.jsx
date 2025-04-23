"use client";
import { Input } from "../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Textarea } from "../../../components/ui/textarea";
import React, { useState } from "react";

const LeagueSettings = ({
  name,
  setName,
  type,
  description,
  setDescription,
  setType,
  admin,
  setAdmin,
}) => {
  const types = ["Mens", "Womens", "Boys", "Girls", "Co-ed"];
  //   const [type, setType] = useState("");
  //   const [description, setDescription] = useState("");
  return (
    <>
      <h3 className="text-3xl py-2 text-center">Update League</h3>

      <div>
        <label>League Name:</label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Owner:</label>
        <Input type="text" value={admin} required disabled />
      </div>
      <div>
        <label>Type:</label>
        <Select defaultValue={type} onValueChange={(value) => setType(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select one" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {types.map((type, index) => (
                <SelectItem key={index} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label>Description:</label>
        <Textarea
          placeholder="Write a brief description."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
    </>
  );
};

export default LeagueSettings;

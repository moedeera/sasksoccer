"use client";

import React, { useState } from "react";
import "./Calendar.css";
import { Calendar } from "@/components/ui/calendar";

const CalendarComponent = () => {
  const [date, setDate] = useState(
    "Thu May 09 2024 00:00:00 GMT-0600 (Central Standard Time)"
  );
  console.log(date);
  return (
    <div className="component-container">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
};

export default CalendarComponent;

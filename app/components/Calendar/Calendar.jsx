"use client";

import React, { useState } from "react";
import "./Calendar.css";
import { Calendar } from "@/components/ui/calendar";
import { isSameDay, parseISO } from "date-fns";

const CalendarComponent = () => {
  const [currentDate, setCurrentDate] = useState(
    new Date("2024-05-09T06:00:00Z")
  );
  const eventDates = [
    new Date("2024-05-16T06:00:00Z"),
    new Date("2024-05-23T06:00:00Z"),
    new Date("2024-05-30T06:00:00Z"),
    new Date("2024-05-31T06:00:00Z"),
  ];

  const isEventDate = (date) => {
    return eventDates.some((eventDate) => isSameDay(eventDate, date));
  };

  return (
    <div className="component-container w-1/3">
      <Calendar
        mode="single"
        selected={currentDate}
        onSelect={setCurrentDate}
        renderDay={(day, date) => (
          <div
            className={`calendar-day ${isEventDate(date) ? "event-date" : ""}`}
          >
            {day}
          </div>
        )}
        className="rounded-md border w-max"
      />
    </div>
  );
};

export default CalendarComponent;

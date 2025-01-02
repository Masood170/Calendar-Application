import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const CalendarView = () => {
  const events = [
    { title: "Meeting with Company A", date: "2024-12-30" },
    { title: "Follow-up Email", date: "2024-12-31" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold">Calendar</h2>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} />
    </div>
  );
};

export default CalendarView;

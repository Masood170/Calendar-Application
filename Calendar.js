import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('Enter event title:');
    if (title) {
      const newEvent = { start, end, title };
      setEvents([...events, newEvent]);
    }
  };

  const handleSelectEvent = (event) => {
    const newTitle = window.prompt('Edit event title:', event.title);
    if (newTitle) {
      const updatedEvents = events.map((e) =>
        e === event ? { ...e, title: newTitle } : e
      );
      setEvents(updatedEvents);
    }
  };

  const handleDeleteEvent = (event) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      const updatedEvents = events.filter((e) => e !== event);
      setEvents(updatedEvents);
    }
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        selectable
      />
      {events.length > 0 && (
        <button onClick={() => handleDeleteEvent(events[events.length - 1])}>
          Delete Last Event
        </button>
      )}
    </div>
  );
};

export default MyCalendar;

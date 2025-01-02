// src/components/CalendarComponent.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CalendarComponent() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState('');
  const [eventDate, setEventDate] = useState(null);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleEventChange = (e) => {
    setNewEvent(e.target.value);
  };

  const handleEventDateChange = (date) => {
    setEventDate(date);
  };

  const addEvent = () => {
    if (newEvent && eventDate) {
      setEvents([...events, { date: eventDate, title: newEvent }]);
      setNewEvent('');
      setEventDate(null);
    }
  };

  return (
    <div>
      <Calendar onChange={handleDateChange} value={date} />
      <div>
        <input
          type="text"
          value={newEvent}
          onChange={handleEventChange}
          placeholder="Event Title"
        />
        <DatePicker
          selected={eventDate}
          onChange={handleEventDateChange}
          showTimeSelect
          dateFormat="Pp"
        />
        <button onClick={addEvent}>Add Event</button>
      </div>
      <div>
        <h3>Events on {date.toLocaleDateString()}</h3>
        <ul>
          {events
            .filter((event) => event.date.toLocaleDateString() === date.toLocaleDateString())
            .map((event, index) => (
              <li key={index}>{event.title}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default CalendarComponent;

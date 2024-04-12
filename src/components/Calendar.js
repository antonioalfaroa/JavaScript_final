import React, { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import './Calendar.css';

const Calendar = ({ closeApp }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="calendar">
      <h1>Calendar App</h1>
      <div className="weekdays">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <CalendarHeader selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <CalendarBody selectedDate={selectedDate} />
      <button onClick={closeApp} style={{ marginTop: '20px' }}>Close</button>
    </div>
  );
};

export default Calendar;

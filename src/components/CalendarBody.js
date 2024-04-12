import React from 'react';

const CalendarBody = ({ selectedDate }) => {
  const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(<div key={i} className="calendar-day">{i}</div>);
    }
    return days;
  };

  return (
    <div className="calendar-body">
      {renderDays()}
    </div>
  );
};

export default CalendarBody;

import React from 'react';

const CalendarHeader = ({ selectedDate, setSelectedDate }) => {
  const handlePrevMonth = () => {
    setSelectedDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setSelectedDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  return (
    <div className="calendar-header">
      <button onClick={handlePrevMonth}>Prev</button>
      <h2>{selectedDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</h2>
      <button onClick={handleNextMonth}>Next</button>
    </div>
  );
};

export default CalendarHeader;

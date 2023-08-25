import React from 'react';

function DateTimeDisplay(props) {
  const { currentDate, currentTime, textStyle } = props;

  return (
    <div>
      <h1 style={textStyle}>Current Date and Time</h1>
      <p>Date: {currentDate}</p>
      <p>Time: {currentTime}</p>
    </div>
  );
}

export default DateTimeDisplay;

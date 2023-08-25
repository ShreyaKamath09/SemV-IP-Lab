import React from 'react';
import ColorChanger from './ColorChanger';

function App() {
  const now = new Date();
  const currentDate = now.toDateString();
  const currentTime = now.toLocaleTimeString();

  return (
    <div>
      <ColorChanger currentDate={currentDate} currentTime={currentTime} />
    </div>
  );
}

export default App; 

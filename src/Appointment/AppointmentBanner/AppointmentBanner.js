import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

  return (
    <div>
      <DayPicker
        mode='single'
        selected={selectedDate}
        onSelect={setSelectedDate}
      
      />

      <p>your date {format(selectedDate, 'PP')}</p>
    </div>
  );
};

export default AppointmentBanner;
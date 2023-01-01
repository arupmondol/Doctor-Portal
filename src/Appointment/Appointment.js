import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvaileableAppointments from './AvaileableAppointments/AvaileableAppointments';

const Appointment = () => {
  const [ selectedDate, setSelectedDate] = useState( new Date())
  return (
    <div>
      
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppointmentBanner>
      <AvaileableAppointments
        selectedDate={selectedDate}
      ></AvaileableAppointments>
    </div>
  );
};

export default Appointment;
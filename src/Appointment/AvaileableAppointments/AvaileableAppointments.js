import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BokkingModal from '../BokkingModal/BokkingModal';
import ApointmentOption from './ApointmentOption';

const AvaileableAppointments = ({selectedDate}) => {
  const [appointmentOptions, setAppointmentOptions] = useState([])
  
  const [treatment, setTreatment] =useState(null)

  useEffect( () =>{
   fetch('services.json')
    .then(res => res.json())
    .then(data => setAppointmentOptions(data))
  } ,[])
  return (
    <div>
        <p>your date {format(selectedDate, 'PP')}</p>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
          {
            appointmentOptions.map(option => <ApointmentOption
             key={option.name}
             option={option}
             setTreatment={setTreatment}
            ></ApointmentOption>)
          }
        </div>
        {
          treatment &&
        <BokkingModal
        treatment={treatment}
        selectedDate={selectedDate}
        ></BokkingModal>
        }
    </div>
  );
};

export default AvaileableAppointments;
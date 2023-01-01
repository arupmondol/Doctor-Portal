import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'

const HomeAppointment = () => {
  return (
    <div className='pb-0 pt-0'>
      <section style={{
        background:`url(${appointment})`
      }}>
      <div className="hero min-h-screen mt-24">
  <div className="hero-content flex-col lg:flex-row">
    <img src={doctor} className="max-w-sm rounded-lg " alt='' />
    <div>
      <h1 className="text-5xl font-bold">Appointment</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Make An Appointment</button>
    </div>
  </div>
</div>
      </section>
    </div>
  );
};

export default HomeAppointment;
import React from 'react';
import Banner from '../Banner/Banner';
import HomeAppointment from '../HomeAppointment/HomeAppointment';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import Testimonial from '../Testemonial/Testimonial';

const Home = () => {
  return (
    <div> 
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <HomeAppointment></HomeAppointment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
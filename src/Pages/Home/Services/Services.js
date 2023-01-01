import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from '../Service/Service';

const Services = () => {
  const serviceData = [
    {
      id:1,
      name:'Whitening',
      description:'You will get good treatment from',
      icon:whitening,
    },
    {
      id:2,
      name:'Fluoride Treatment',
      description:'You will get good treatment from',
      icon:fluoride,
    },
    {
      id:3,
      name:'Cavity Treatment',
      description:'You will get good treatment from',
      icon:cavity,
    }
  ]
  return (
    <div>
      <div className='text-center mt-20'>
        <h3  text-blue-400>Our Services</h3>
        <h2>Service We provide</h2>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-3 gap-10'>
        {
          serviceData.map(service => <Service
          key={service.id}
          service={service}
          ></Service>)
        }
      </div>
    </div>
  );
};

export default Services;
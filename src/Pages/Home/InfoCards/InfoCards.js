import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from '../InfoCard/InfoCard';

const InfoCards = () => {
  const cardData =[
    {
      id:1,
      name:'Opening Hour',
      description:'Open 9am everyday',
      icon:clock,

    },
    {
      id:2,
      name:'Visit us',
      description:'Dhaka Bangladesh',
      icon:marker,
      
    },
    {
      id:3,
      name:'Contract Us',
      description:'01344345556',
      icon:phone,
    }
  ]
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-3 '>

      {
        cardData.map(card => <InfoCard
        key={card.id}
        card={card}
        ></InfoCard>)
      }
      
    </div>
  );
};

export default InfoCards;
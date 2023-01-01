import React from 'react';

const InfoCard = ({card}) => {
  const {name, description,id,icon} = card;
  return (
    <div>
      <div className={`card card-side bg-gradient-to-r from-cyan-500 to-blue-500 ... shadow-xl p-2 m-5`}>
  <figure><img src={icon} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
    </div>
  );
};

export default InfoCard;
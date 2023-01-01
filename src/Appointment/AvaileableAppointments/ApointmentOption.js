import React from 'react';

const ApointmentOption = ({option, setTreatment}) => {
  const { name, slots} = option;
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{slots.length > 0 ? slots[0] : 'No slots Avbaileabe'}</p>
    <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Avbaileabe</p>
    <div className="card-actions justify-end">
      <label htmlFor="my-modal-3" className="btn"
      onClick={ () => setTreatment(option)}
      >open modal</label>
    </div>
  </div>
</div>
      
    </div>
  );
};

export default ApointmentOption;
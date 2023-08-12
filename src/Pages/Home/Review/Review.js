import React from 'react';

const Review = ({review}) => {
  const{name, img, location, reviews} = review
  return (
    <div>
      <div className="card w-68 bg-base-100 shadow-xl">
  <div className="card-body">
    <p>{reviews}</p>
    <div className="card-actions flex ">
    <div className="avatar">
  <div className="w-16 rounded-full ring ring-primary">
    <img src={img} alt='' />
  </div>
</div>
<div>
<h3 className='text-2xl'>{name}</h3>
<p className='text-xl'>{location}</p>
</div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Review;
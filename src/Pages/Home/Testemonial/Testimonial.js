import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from '../Review/Review';

const Testimonial = () => {
  const review = [
    {
      id:3,
      name:'Cavity Treatment',
      reviews:'You will get good treatment from You will get good treatment from You will get good treatment from',
      location:'Califonia',
      img: people1
    },
    {
      id:3,
      name:'Cavity Treatment',
      reviews:'You will get good treatment from You will get good treatment from You will get good treatment from',
      location:'New York',
      img: people2
    },
    {
      id:3,
      name:'Cavity Treatment',
      reviews:'You will get good treatment from You will get good treatment from You will get good treatment from',
      location:'Sydny',
      img: people3
    }
  ]
  return (
    <section className='mt-40'>
      <div className='grid lg:grid-cols-2 md:grid-cols-2'>
        <div>
          <h4 className='text-bold text-xl color-primary'>Testimonial</h4>

          <h2 className='text-4xl'> What Our Paitents Says</h2>
        </div>
        <div className='pr-20'>
          <img className='lg:w-48 w-28' src={quote} alt="" />
          </div>
      </div>

      <div className='grid gap-10 lg:grid-cols-3 md:grid-cols-3'>
        {
          review.map(review => <Review
          key={review.id}
          review={review}
          ></Review>)
        }
      </div>
    </section>
  );
};

export default Testimonial;
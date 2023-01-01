import { format } from 'date-fns';
import React from 'react';

const BokkingModal = ({treatment, selectedDate}) => {
  const {name, slots} = treatment;// treatment is appointment option
  const date =format(selectedDate, 'PP');
  return (
    <>
     {/* The button to open modal */}
<label htmlFor="my-modal-3" className="btn">open modal</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{name}</h3>
   <form className='grid grid-cols-1 gap-4'>
   <input type="text"value={date} placeholder="Type here" disabled className="input disable input-bordered input-accent w-full " />
   <select className="select select-bordered w-full max-w-xs">
  <option>Who shot first?</option>
  {
    slots.map(slot => <option value={slot}>{slot}</option>)
  }
  
</select>
   <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full " />
   <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full " />
   <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full " />
   <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full " />
   <input type="submit" value="Submit" className='w-full  btn btn-accent' />
   
   </form>
  </div>
</div> 
    </>
  );
};

export default BokkingModal;
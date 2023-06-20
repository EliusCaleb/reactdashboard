import React from 'react';
import Updates from '../Updates/Updates';
import CustomerReview from '../CustomerReview/CustomerReview';

const RightSide = () => {
  return (
    <div className='rightside'>
             <div className=''>
              <h2>Updates</h2>
               <Updates/>
             </div>
             <div className=''>
              <h2>Customer Reviews</h2>
               <CustomerReview/>
             </div>
    </div>
  )
}

export default RightSide
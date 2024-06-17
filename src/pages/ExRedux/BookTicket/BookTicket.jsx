import React from 'react';
import ListChair from './ListChair';
import ChairPurcharge from './ChairPurcharge';

const BookTicket = () => {
  return (
    <div className="container d-flex">
      <div className="w-75">
        <ListChair />
      </div>
      <div className="w-25">
        <ChairPurcharge />
      </div>
    </div>
  );
};

export default BookTicket;

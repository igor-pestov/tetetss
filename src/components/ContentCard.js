import React from 'react';
import dots from '../img/dots.svg';
import './ContentCard.scss';

const ContentCard = (props) => {
  return (
    <div className='content-card'>
      <img className='content-card_dots' src={dots} alt='' />
      <div className='content-card_container'>
        {props.children}
      </div>
    </div>
  );
}

export default ContentCard;
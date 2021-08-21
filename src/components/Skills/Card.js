import React from 'react';
import { ServiceCard } from './style';

const Card = ({img, title}) => {
  return (
    <ServiceCard>
        <img src={img} alt={title}/>
      <div>
        <span>{title}</span>
      </div>
    </ServiceCard>
  );
}

export default Card;

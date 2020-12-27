import React from 'react';

import Card from './card/Card';
// import './CardsGroup.scss';

export const CardsGroup = (props) => {
  const { allCardsData, classes } = props;

  return (
    <div className={`cards-group ${classes} themed`}>
      <ul className="cards-group-list">
        {allCardsData.map(cardData => (
          <li
            key={cardData.id}
            className="cards-group-list-item"
            tabIndex={-1}
            tab-id={cardData.id}
          >
            <Card
              customClasses={cardData.customClasses || ''}
              id={cardData.id}
              readyToRender={!cardData.loading}
              title={cardData.label}
            >
              {cardData.children}
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};


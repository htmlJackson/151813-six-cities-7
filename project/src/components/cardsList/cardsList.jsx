import React from 'react';
import {offersArrayProp} from '../../mocks/offers.prop';
import Card from '../../components/card/card';

function CardsList(props) {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((card) => <Card data={card} key={`card-${card.id}`} />)
      }
    </div>
  );
}

CardsList.propTypes = {
  offers: offersArrayProp,
};

export default CardsList;

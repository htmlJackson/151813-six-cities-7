import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

function App(props) {
  const {cardsCounter} = props;
  return (
    <Main cardsCounter={cardsCounter} />
  );
}

App.propTypes = {
  cardsCounter: PropTypes.number.isRequired,
};

export default App;

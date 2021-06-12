import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import {AppRoute} from '../../const.js';
import Main from '../pages/main/main';
import SignIn from '../pages/signIn/signIn';
import Favorites from '../pages/favorites/favorites';
import Room from '../pages/room/room';
import NotFound from '../pages/notFound/notFound';

function App(props) {
  const {cardsCounter} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main cardsCounter={cardsCounter} />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <Room />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  cardsCounter: PropTypes.number.isRequired,
};

export default App;

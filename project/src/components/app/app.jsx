import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import {AppRoute} from '../../const.js';
import Main from '../pages/main/main';
import SignIn from '../pages/signIn/signIn';
import Favorites from '../pages/favorites/favorites';
import Room from '../pages/room/room';
import NotFound from '../pages/notFound/notFound';
import {offersArrayProp} from '../../mocks/offers.prop';

function App(props) {
  const {offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main offers={offers} />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites offers={offers} />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <Room offers={offers} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: offersArrayProp,
};

export default App;

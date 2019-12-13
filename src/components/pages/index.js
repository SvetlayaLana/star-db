import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PeoplePage from "./PeoplePage";
import PlanetsPage from "./PlanetsPage";
import StarshipsPage from "./StarshipsPage";
import HomePage from "./HomePage";

const Pages = () => {
      return(
          <div className='row mb2'>
              <Switch>
                  <Route exact path='/'>
                      <HomePage/>
                  </Route>
                  <Route exact path='/people'>
                      <PeoplePage/>
                  </Route>
                  <Route exact path='/planets'>
                      <PlanetsPage/>
                  </Route>
                  <Route exact path='/starships'>
                      <StarshipsPage/>
                  </Route>
              </Switch>
          </div>
      );
};

export default Pages;


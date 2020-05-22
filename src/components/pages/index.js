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
                  <Route exact path='/star-db'>
                      <HomePage/>
                  </Route>
                  <Route exact path='/star-db/people'>
                      <PeoplePage/>
                  </Route>
                  <Route exact path='/star-db/planets'>
                      <PlanetsPage/>
                  </Route>
                  <Route exact path='/star-db/starships'>
                      <StarshipsPage/>
                  </Route>
              </Switch>
          </div>
      );
};

export default Pages;


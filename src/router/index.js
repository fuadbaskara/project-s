import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PrivateRoute from './private-router'
import Main from '../pages/main'
import Page404 from '../pages/page-404'
import PUBLIC_URL from '../config/url'
import { privateRoutes } from './routes'

const RouteConfig = (
  <Router basename={PUBLIC_URL}>
    <div>
      <Switch>
        <Route exact path={'/'} component={Main} />
        {
          privateRoutes.map(privateRoute => (
            privateRoute.config !== false && (
              <PrivateRoute
                exact
                key={privateRoute.path}
                path={privateRoute.path}
                component={privateRoute.component}
              />
            )
          ))
        }
        <Route component={Page404} />
      </Switch>
    </div>
  </Router>
)

export default RouteConfig

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'

import { CONFIG_COOKIES } from '../../config/cookies'
import { MENU } from '../../config/menu'


const PrivateRouter = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      Cookies.get(CONFIG_COOKIES.TOKEN) ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: MENU.LOGIN,
            state: { from: props.location },
          }}
        />
      ))
    }
  />
)

PrivateRouter.defaultProps = {
  location: null,
}

PrivateRouter.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
  location: PropTypes.object,
}

export default PrivateRouter

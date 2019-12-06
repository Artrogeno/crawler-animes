import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import { ROUTE } from '@src/shared/constants'
import store from '@src/shared/stores'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      store.getState().auth.signedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: ROUTE.LOGIN, state: { from: props.location } }}
        />
      )
    }
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
}

export default PrivateRoute

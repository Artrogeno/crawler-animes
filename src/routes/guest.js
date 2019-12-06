import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
// import { Route, Redirect } from 'react-router-dom'

// import { ROUTE } from '@src/shared/constants'
// import store from '@src/shared/stores'

const GuestRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => <Component {...props} />}
    // render={props =>
    //   !store.getState().auth.signedIn ? (
    //     <Component {...props} />
    //   ) : (
    //     <Redirect
    //       to={{ pathname: ROUTE.REDIRECT, state: { from: props.location } }}
    //     />
    //   )
    // }
  />
)

GuestRoute.propTypes = {
  component: PropTypes.func.isRequired,
}

export default GuestRoute

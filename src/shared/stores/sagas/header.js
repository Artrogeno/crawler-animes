import { /* call, */ put } from 'redux-saga/effects'
// import { push } from 'connected-react-router'

import HeaderActions from '../ducks/header'

export function* headerProps({ data }) {
  try {
    // console.log('HEADER_SAGA: ', data)
    yield put(HeaderActions.headerConfig(data))
    // yield put(push(ROUTE.REDIRECT));
  } catch (error) {
    console.log(error)
  }
}

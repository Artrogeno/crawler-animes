import { all, takeLatest } from 'redux-saga/effects'

import { signIn, isAthenticated, redirect } from './auth'

import { AuthTypes } from '../ducks/auth'

export default function* rootSagas() {
  return yield all([
    isAthenticated(),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_IN_REDIRECT, redirect),
  ])
}

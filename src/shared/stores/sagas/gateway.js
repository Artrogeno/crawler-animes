import { call, put } from 'redux-saga/effects'
import axios from '@src/shared/services/axios'

import GatewayActions from '../ducks/gateway'
import { getItemLS, setItemLS } from '@src/shared/services/storage'
import { STORAGE } from '@src/shared/constants'

const { GATEWAY_CHANNEL } = STORAGE

const selectGateway = (list, gateway) => {
  return list.map(item => {
    item.selected = false
    if (item.gateway === gateway) {
      item.selected = true
    } else {
    }
    return item
  })
}

export function* gatewayRequest() {
  try {
    const {
      data: { data },
    } = yield call(axios.get, `/animes/gateway`)

    const gateway = selectGateway(data, null)
    setItemLS(GATEWAY_CHANNEL, gateway)

    yield put(GatewayActions.gatewaySuccess(gateway))
  } catch (error) {
    console.log(error)
  }
}

export function* gatewaySelected({ gateway }) {
  try {
    let data = getItemLS(GATEWAY_CHANNEL)

    data.map(item => {
      item.selected = item.gateway === gateway ? true : false
      return item
    })

    setItemLS(GATEWAY_CHANNEL, data)

    yield put(GatewayActions.gatewaySuccess(data))
  } catch (error) {
    console.log(error)
  }
}

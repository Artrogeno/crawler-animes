import { all, takeLatest } from 'redux-saga/effects'

import { signIn, isAthenticated, redirect } from './auth'
import { headerProps } from './header'
import { gatewayRequest, gatewaySelected } from './gateway'
import { initialRequest } from './anime'
import { episodeRequest } from './episode'
import { videoRequest } from './video'

import { AuthTypes } from '../ducks/auth'
import { HeaderTypes } from '../ducks/header'
import { GatewayTypes } from '../ducks/gateway'
import { AnimeTypes } from '../ducks/anime'
import { EpisodeTypes } from '../ducks/episode'
import { VideoTypes } from '../ducks/video'

export default function* rootSagas() {
  return yield all([
    isAthenticated(),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_IN_REDIRECT, redirect),

    takeLatest(HeaderTypes.HEADER_PROPS, headerProps),

    takeLatest(GatewayTypes.GATEWAY_REQUEST, gatewayRequest),
    takeLatest(GatewayTypes.GATEWAY_SELECTED, gatewaySelected),

    takeLatest(AnimeTypes.ANIME_REQUEST, initialRequest),

    takeLatest(EpisodeTypes.EPISODE_REQUEST, episodeRequest),

    takeLatest(VideoTypes.VIDEO_REQUEST, videoRequest),
  ])
}

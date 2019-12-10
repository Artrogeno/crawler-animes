import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { reducer as header } from './header'
import { reducer as auth } from './auth'
import { reducer as gateway } from './gateway'
import { reducer as anime } from './anime'
import { reducer as episode } from './episode'
import { reducer as video } from './video'

export default history =>
  combineReducers({
    header,
    auth,
    gateway,
    anime,
    episode,
    video,
    router: connectRouter(history),
  })

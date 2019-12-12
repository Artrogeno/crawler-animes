import React from 'react'
import { Switch } from 'react-router-dom'

import Guest from './guest'
// import Private from './private'

import MainLayout from '@src/shared/layouts/Main'
import VideoGateway from '@app/pages/animes/VideoGateway'
import Animes from '@app/pages/animes/Anime'
import Episodes from '@app/pages/animes/Episodes'
import Video from '@app/pages/animes/Video'

import MangaGateway from '@app/pages/manga/MangaGateway'

export default () => (
  <Switch>
    {/* <Guest path="/login" component={Login} /> */}
    <MainLayout>
      <Guest exact path="/" component={VideoGateway} />
      <Guest path="/animes/:page" component={Animes} />
      <Guest path="/episodes/:id/:category" component={Episodes} />
      <Guest path="/video/:id" component={Video} />

      <Guest path="/manga" component={MangaGateway} />
      {/* <Private exact path="/" component={Home} /> */}
    </MainLayout>
  </Switch>
)

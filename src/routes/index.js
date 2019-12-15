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
import Manga from '@app/pages/manga/Manga'
import MangaChapters from '@app/pages/manga/MangaChapters'
import MangaChapter from '@app/pages/manga/MangaChapter'

export default () => (
  <Switch>
    {/* <Guest path="/login" component={Login} /> */}
    <MainLayout>
      <Guest exact path="/" component={VideoGateway} />
      <Guest path="/animes/:page" component={Animes} />
      <Guest path="/episodes/:id/:category" component={Episodes} />
      <Guest path="/video/:id" component={Video} />

      <Guest exact path="/manga" component={MangaGateway} />
      <Guest path="/mangas/launch/:page" component={Manga} />
      <Guest path="/mangas/:manga/chapters" component={MangaChapters} />
      <Guest path="/mangas/:manga/chapter/:chapter" component={MangaChapter} />
      {/* <Private exact path="/" component={Home} /> */}
    </MainLayout>
  </Switch>
)

import React from 'react'
import { Switch } from 'react-router-dom'

import Guest from './guest'
// import Private from './private'

import MainLayout from '@src/shared/layouts/Main'
import Home from '@app/pages/Home'
import Animes from '@app/pages/Animes'
import Episodes from '@app/pages/Episodes'
import Video from '@app/pages/Video'

export default () => (
  <Switch>
    {/* <Guest path="/login" component={Login} /> */}
    <MainLayout>
      <Guest exact path="/" component={Home} />
      <Guest path="/animes" component={Animes} />
      <Guest path="/episodes/:id/:category" component={Episodes} />
      <Guest path="/video/:id" component={Video} />
      {/* <Private exact path="/" component={Home} /> */}
    </MainLayout>
  </Switch>
)

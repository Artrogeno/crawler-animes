import React from 'react'
import { Switch } from 'react-router-dom'

import Guest from './guest'
// import Private from './private'

import MainLayout from '@src/shared/layouts/Main'
import Home from '@app/pages/Home'

export default () => (
  <Switch>
    {/* <Guest path="/login" component={Login} /> */}
    <MainLayout>
      <Guest exact path="/" component={Home} />
      {/* <Private exact path="/" component={Home} /> */}
    </MainLayout>
  </Switch>
)

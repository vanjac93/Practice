import React from 'react'
import { BrowserRouter as BrRouter, Route, Switch } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Mockup from './Mockup'
import ErrorPage from '~/components/ErrorPage'
import { Routes } from '~/Constants'
import MainMenu from './common/MainMenu'
import Languages from './Languages'
import Spotify from './Mockup/Spotify'
import Trello from './Mockup/Trello'
import SpotifyDeveloper from './Mockup/Spotify/SpotifyDeveloper'

export default function Router() {
  return (
    <BrRouter>
      <MainMenu />
      <Switch>
        <Route exact path={['', Routes.HOME]} component={Home} />
        <Route exact path={Routes.ABOUT} component={About} />
        <Route exact path={Routes.MOCKUP} component={Mockup} />
        <Route exact path={Routes.LANGUAGES} component={Languages} />
        <Route path={Routes.SPOTIFY} component={SpotifyDeveloper} />
        <Route path={Routes.TRELLO} component={Trello} />
        <Route component={ErrorPage} />
      </Switch>
    </BrRouter>
  )
}

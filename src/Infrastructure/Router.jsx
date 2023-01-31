import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ErrorPage from '../Presentation/Pages/ErrorPage.jsx'
import MainPage from '../Presentation/Pages/MainPage.jsx'
import TimePage from '../Presentation/Pages/TimePage.jsx'

export default function Router() {
  return (
    <div>
      Starting
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/time-page" component={TimePage} />
        <Route path='/404' element={ErrorPage} />
      </Switch>
    </div>

  )
}
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Form from '../Form'
import Message from '../Message'
import Welcome from '../Welcome'

const Routing = () => {
  return (
    <Switch>
      <Route exact path='/form' component={Form}/>
      <Route exact path='/item' component={Message}/>
      <Route exact path='/' component={Welcome}/>
    </Switch>
  )
}

export default Routing

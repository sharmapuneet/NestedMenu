import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import SimpleMenu from './components/SimpleMenu'
import Routing from './components/Routing'

class App extends Component {
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <SimpleMenu/>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Routing />
        </Grid>
      </Grid>
    )
  }
}

export default App

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as classnames from 'classnames'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import {lightGreen} from 'material-ui/colors'

import LandingPage from './components/landing'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: lightGreen[300],
      main: lightGreen[500],
      dark: lightGreen[700],
      contrastText: 'white'
    }
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <LandingPage/>
  </MuiThemeProvider>
, document.getElementById('root'))
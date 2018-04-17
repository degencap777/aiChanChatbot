import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {MuiThemeProvider, withStyles, Theme, WithStyles} from 'material-ui/styles'
import {blue, grey} from 'material-ui/colors'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import Button from 'material-ui/Button'

import * as AiChan from '../../asset/ai-chan.png'
import DemoSection from './demo-section'
import CommandSection from './command-section'

const styles = (theme:Theme):Record<string, React.CSSProperties> => ({
  container: {
    width: '100vw',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pageContainer: {
    width: '1200px',
    maxWidth: '100%',
    padding: '0 32px'
  },
  aiChanWelcome: {
    width: '300px'
  },
  dividerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  divider: {
    width: 'calc(50% - 120px)'
  },
  link: {
    color: 'inherit',
    textDecoration: 'none'
  },
  footer: {
    width: '100vw',
    padding: '16px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: grey[900]
  }
})
@(withStyles as any)(styles)
class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
  componentDidMount() {
    document.querySelector('body').style.background = grey[800]
  }
  render() {
    const {classes} = this.props
    return (
      <div className={classes.container}>
        <Grid container direction='column' alignItems='center' classes={{typeContainer:classes.pageContainer}}>
          <img src={AiChan} className={classes.aiChanWelcome}/>
          <Grid container classes={{typeContainer:classes.dividerRow}}>
            <Divider classes={{root:classes.divider}}/>
            <Button href='https://discordapp.com/oauth2/authorize?client_id=434737143395516416&permissions=8&scope=bot' variant='raised' size='large' color='primary'>
              INVITE ME
            </Button>
            <Divider classes={{root:classes.divider}}/>
          </Grid>
          <DemoSection/>
          <Grid container classes={{typeContainer:classes.dividerRow}}>
            <Divider classes={{root:classes.divider}}/>
            <Typography variant='title'>
              COMMANDS
            </Typography>
            <Divider classes={{root:classes.divider}}/>
          </Grid>
          <CommandSection/>
        </Grid>
        <div className={classes.footer}>
          <Grid container justify='space-between' alignItems='center' classes={{typeContainer:classes.pageContainer}}>
            <Typography variant='caption'>
              Developed by: Ching Yaw Hao, Yudhaime 
            </Typography>
            <Typography variant='caption'>
              <a className={classes.link} href='https://discord.gg/4y2RzFy'>Try It</a> | <a className={classes.link} href='https://www.patreon.com/user?u=10662508'>Support Us</a> 
            </Typography>
          </Grid>
        </div>
      </div>
    )
  } 
}
interface LandingPageProps extends React.Props<{}> {
  classes?: any
}
interface LandingPageState {}

export default LandingPage
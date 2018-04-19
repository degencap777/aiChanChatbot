import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReSub from 'resub'
import {withStyles, Theme, StyleRules, StyleRulesCallback} from 'material-ui/styles'
import {blue, lightGreen, grey} from 'material-ui/colors'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import Button from 'material-ui/Button'

import * as AiChan from '../../asset/img/ai-chan.png'
import screenStore from '../store/screen'
import DemoSection from './demo-section'
import CommandSection from './command-section'

const styles = (theme:Theme):StyleRules<string> | StyleRulesCallback<string> => ({
  container: {
    width: '100vw',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerContainer: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: `linear-gradient(to top right, #E4FAB5, #B2FB16)`,
    overflow: 'hidden',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      flexDirection: 'column'
    }
  },
  pageContainer: {
    width: '1200px',
    maxWidth: '100%',
    padding: '0 32px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      padding: '0 16px',
    }
  },
  headerText: {
    margin: '32px 0 0',
    textAlign: 'right',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      textAlign: 'center'
    }
  },
  aiChanWelcome: {
    width: '300px',
    marginBottom: '-73px'
  },
  dividerButtons: {
    transform: 'translateY(-50%)',
    textAlign: 'center'
  },
  dividerButton: {
    margin: '8px'
  },
  dividerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  divider: {
    flexGrow: 1,
    margin: '16px'
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
class LandingPage extends ReSub.ComponentBase<LandingPageProps, LandingPageState> {
  protected _buildState(props:{}, initial:boolean):LandingPageState {
    return {
      screenType: screenStore.type()
    }
  }
  componentDidMount() {
    document.querySelector('body').style.background = grey[800]
  }
  render() {
    const {classes} = this.props
    const {screenType} = this.state
    return (
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <div className={classes.headerText}>
            <Typography variant={['sm-tablet', 'xs-phone'].includes(screenType)? 'display3':'display4'} color='secondary'>
              Ai-Chan Bot
            </Typography>
            <Typography variant={['sm-tablet', 'xs-phone'].includes(screenType)? 'title':'display1'} color='primary'>
              comes to your discord
            </Typography>
          </div>
          <img src={AiChan} className={classes.aiChanWelcome}/>
        </div>
        <Grid container direction='column' alignItems='center' classes={{container:classes.pageContainer} as any}>
          <Grid container justify='center' classes={{container:classes.dividerButtons} as any}>
            <Button classes={{root:classes.dividerButton}} variant='raised' size='large' color='secondary'
              href='https://discordapp.com/oauth2/authorize?client_id=434737143395516416&permissions=8&scope=bot'
            >
              INVITE ME
            </Button>
            <Button classes={{root:classes.dividerButton}} variant='raised' size='large' color='secondary'
              href='https://www.patreon.com/user?u=10662508'
            >
              SUPPORT US
            </Button>
          </Grid>
          <DemoSection/>
          <Grid container classes={{container:classes.dividerRow} as any}>
            <Divider classes={{root:classes.divider}}/>
            <Typography variant='title'>
              COMMANDS
            </Typography>
            <Divider classes={{root:classes.divider}}/>
          </Grid>
          <CommandSection/>
        </Grid>
        <div className={classes.footer}>
          <Grid container justify='space-between' alignItems='center' classes={{container:classes.pageContainer} as any}>
            <Typography variant='caption' color='primary'>
              Developed by: Ching Yaw Hao, Yudhaime 
            </Typography>
            <Typography variant='caption' color='primary'>
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
interface LandingPageState {
  screenType: 'xl-desktop' | 'lg-desktop' | 'md-desktop' | 'sm-tablet' | 'xs-phone'
}

export default LandingPage
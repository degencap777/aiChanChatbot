import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {withStyles, Theme, StyleRules, StyleRulesCallback} from 'material-ui/styles'
import {grey} from 'material-ui/colors'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Card, {CardContent} from 'material-ui/Card'

import * as WeaponDemo from '../../asset/weapon-demo.png'
import * as GachaDemo from '../../asset/gacha-demo.png'
import * as ValkyrieDemo from '../../asset/valkyrie-demo.png'
import * as RecommendationDemo from '../../asset/recommendation-demo.png'

const styles = (theme:Theme):StyleRules<string> | StyleRulesCallback<string> => ({
  demoRow: {
    padding: '32px 0'
  },
  demoColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  demoCard: {
    background: theme.palette.background.paper
  },
  demoImage: {
    maxWidth: '100%'
  }
})
@(withStyles as any)(styles)
class DemoSection extends React.Component<DemoSectionProps, DemoSectionState> {
  render() {
    const {classes} = this.props
    return (
      <div>
        <Grid container classes={{container:classes.demoRow} as any}>
          <Grid item xs={12} md={6} classes={{item:classes.demoColumn} as any}>
            <Card classes={{root:classes.demoCard}}>
              <CardContent>
                <Typography variant='headline' component='h2'>
                  Show & Describe Game Equipment
                </Typography>
                <Typography color='textSecondary' gutterBottom>
                  command: !weapon, !stigmata
                </Typography>
                <Typography component='p'>
                  You don't need to take screenshot and upload it to show info about game equipment.<br/>
                  AI Chan will display it for you.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} classes={{item:classes.demoColumn} as any}>
            <img src={WeaponDemo} className={classes.demoImage}/>
          </Grid>
        </Grid>
        <Grid container classes={{container:classes.demoRow} as any}>
          <Grid item xs={12} md={6} classes={{item:classes.demoColumn} as any}>
            <img src={GachaDemo} className={classes.demoImage}/>
          </Grid>
          <Grid item xs={12} md={6} classes={{item:classes.demoColumn} as any}>
            <Card classes={{root:classes.demoCard}}>
              <CardContent>
                <Typography variant='headline' component='h2'>
                  Gacha Simulation
                </Typography>
                <Typography color='textSecondary' gutterBottom>
                  command: !gacha
                </Typography>
                <Typography component='p'>
                  Yeah, AI Chan know you are really like gacha system in Honkai Inpact 3rd so I bring simulation to your server to enhance your luck. (maybe)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container classes={{container:classes.demoRow} as any}>
          <Grid item xs={12} md={6} classes={{item:classes.demoColumn} as any}>
            <Card classes={{root:classes.demoCard}}>
              <CardContent>
                <Typography variant='headline' component='h2'>
                  Show & Describe Valkyrie
                </Typography>
                <Typography color='textSecondary' gutterBottom>
                  command: !valkyrie
                </Typography>
                <Typography component='p'>
                  Here is the secret about the gals!<br/>
                  But however hard you try you will be able to see her panties!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} classes={{item:classes.demoColumn} as any}>
            <img src={ValkyrieDemo} className={classes.demoImage}/>
          </Grid>
        </Grid>
        <Grid container classes={{container:classes.demoRow} as any}>
          <Grid item xs={12} md={6} classes={{item:classes.demoColumn} as any}>
            <img src={RecommendationDemo} className={classes.demoImage}/>
          </Grid>
          <Grid item xs={12} md={6} classes={{item:classes.demoColumn} as any}>
            <Card classes={{root:classes.demoCard}}>
              <CardContent>
                <Typography variant='headline' component='h2'>
                  Recommend Equipments
                </Typography>
                <Typography color='textSecondary' gutterBottom>
                  command: !recommend
                </Typography>
                <Typography component='p'>
                  You can see better set equipment for the valkyrie too...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  } 
}
interface DemoSectionProps extends React.Props<{}> {
  classes?: any
}
interface DemoSectionState {}

export default DemoSection
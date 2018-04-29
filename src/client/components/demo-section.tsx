import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {withStyles, Theme, StyleRules, StyleRulesCallback} from 'material-ui/styles'
import {green, grey} from 'material-ui/colors'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import Card, {CardContent} from 'material-ui/Card'

import * as WeaponDemo from '../../asset/img/weapon-demo.png'
import * as GachaDemo from '../../asset/img/gacha-demo.png'
import * as ValkyrieDemo from '../../asset/img/valkyrie-demo.png'
import * as RecommendationDemo from '../../asset/img/recommendation-demo.png'

const styles = (theme:Theme):StyleRules<string> | StyleRulesCallback<string> => ({
  demoRow: {
    display: 'flex',
    padding: '32px 0'
  },
  demoRowEven: {
    flexDirection: 'row-reverse'
  },
  demoColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  demoCard: {
    background: grey[800]
  },
  description: {
    padding: '32px'
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
        {[{
          headline: 'Show & Describe Game Equipment',
          command: 'command: !weapon, !stigmata',
          description: [
            'You don\'t need to take screenshot and upload it to show info about game equipment.',
            'AI Chan will display it for you.'
          ],
          image: WeaponDemo
        }, {
          headline: 'Gacha Simulation',
          command: 'command: !gacha',
          description: [
            'Yeah, AI Chan know you are really like gacha system in Honkai Inpact 3rd so I bring simulation to your server to enhance your luck. (maybe)'
          ],
          image: GachaDemo
        }, {
          headline: 'Show & Describe Valkyrie',
          command: 'command: !valkyrie',
          description: [
            'Here is the secret about the gals!',
            'But however hard you try you will not be able to see her panties!'
          ],
          image: ValkyrieDemo
        }, {
          headline: 'Recommend Equipments',
          command: 'command: !recommend',
          description: [
            'You can see better set equipment for the valkyrie too...'
          ],
          image: RecommendationDemo
        }].map((demo, index) => [
          index !== 0 && <Divider key='divider'/>,
          <Grid key='demo-row' container classes={{container:classes.demoRow + (index % 2 === 1? ' ' + classes.demoRowEven : '')} as any}>
            <Grid item xs={12} md={6} classes={{item:classes.demoColumn} as any}>
              <div className={classes.description}>
                <Typography variant='headline' color='primary' component='h2'>
                  {demo.headline}
                </Typography>
                <Typography color='textSecondary' gutterBottom>
                  {demo.command}
                </Typography>
                <Typography component='p'>
                  {demo.description.map((description, index) => [index !== 0 && <br key='new-line'/>, description])}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6} classes={{item:classes.demoColumn} as any}>
              <img src={demo.image} className={classes.demoImage}/>
            </Grid>
          </Grid>
        ])}
      </div>
    )
  } 
}
interface DemoSectionProps extends React.Props<{}> {
  classes?: any
}
interface DemoSectionState {}

export default DemoSection
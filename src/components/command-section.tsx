import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {withStyles, Theme, WithStyles} from 'material-ui/styles'
import {grey} from 'material-ui/colors'
import Typography from 'material-ui/Typography'
import ExpansionPanel, {ExpansionPanelSummary, ExpansionPanelDetails} from 'material-ui/ExpansionPanel'
import {ExpandMore as ExpandMoreIcon} from '@material-ui/icons'

import helps from '../constants/helps'
import * as StringUtil from '../utility/string'

const styles = (theme:Theme):Record<string, React.CSSProperties> => ({
  commandSection: {
    padding: '32px 0 64px'
  },
  commandPanel: {
    background: grey[900]
  },
  commandTitle: {
    flexBasis: '50%'
  },
  commandSubheading: {
    marginTop: '12px'
  },
  commandDetail: {
    flexDirection: 'column'
  }
})
@(withStyles as any)(styles)
class CommandSection extends React.Component<CommandSectionProps, CommandSectionState> {
  constructor(props:CommandSectionProps) {
    super(props)
    this.state = {
      active: undefined
    }
  }
  expand = (key:string) => {
    if(this.state.active === key) {
      this.setState({active:undefined})
    } else {
      this.setState({active:key})
    }
  }
  render() {
    const {classes} = this.props
    const {active} = this.state
    return (
      <div className={classes.commandSection}>
        {helps.map(help =>
          <ExpansionPanel disabled={help.description === ''} expanded={help.commands[0] === active} onChange={() => this.expand(help.commands[0])} classes={{root:classes.commandPanel}}>
            <ExpansionPanelSummary expandIcon={help.description !== '' && <ExpandMoreIcon/>}>
              <div className={classes.commandTitle}>
                <Typography variant='subheading'>{StringUtil.conjuctJoin(help.commands.map(command => PREFIX + command))}</Typography>
              </div>
              <div className={classes.commandTitle}>
                <Typography variant='caption'>{help.category}</Typography>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.commandDetail}>
              <Typography variant='caption' component='h5'>Description</Typography>
              <Typography component='p'>
                {help.description}
              </Typography>
              {help.examples.length > 0 && <Typography className={classes.commandSubheading} variant='caption' component='h5'>Examples</Typography>}
              {help.examples.map(example =>
                <Typography component='p'>
                  {PREFIX + example}
                </Typography>
              )}
              {help.notes.length > 0 && <Typography className={classes.commandSubheading} variant='caption' component='h5'>Notes</Typography>}
              {help.notes.map(note =>
                <Typography component='p'>
                  {note}
                </Typography>
              )}
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )}
      </div>
    )
  } 
}
interface CommandSectionProps extends React.Props<{}> {
  classes?: any
}
interface CommandSectionState {
  active: string
}

export default CommandSection
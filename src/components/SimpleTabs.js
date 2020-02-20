import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TeamMain from './TeamMain';
import { data } from '../data';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#E5E5E5',
    marginLeft: theme.spacing(6),
    paddingBottom: '20px'
  },
  tabText: {
    color: 'black',
    fontFamily: 'futura',
    fontStyle: 'Semibold',
    fontSize: '18px'
  }
});

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

class SimpleTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: 0,
      teamsState: data.teams
    };
  }

  handleFavChange = teamID => {
    const updated = this.state.teamsState;
    const old = updated[teamID - 1].is_favorited;
    updated[teamID - 1].is_favorited = !old;
    this.setState({
      teamsState: updated
    });
  };

  render() {
    const { classes } = this.props;
    const { activeTabIndex, teamsState } = this.state;

    const favState = teamsState.filter(eachTeam => {
      return eachTeam.is_favorited;
    });

    const archivedState = teamsState.filter(eachTeam => {
      return eachTeam.is_archived;
    });

    const handleChange = (event, value) => {
      this.setState({ activeTabIndex: value });
    };

    return (
      <div className={classes.root}>
        <Tabs
          value={activeTabIndex}
          onChange={handleChange}
          indicatorColor={'primary'}
        >
          <Tab
            label='All'
            {...a11yProps(0)}
            className={classes.tabText}
            onClick={() =>
              this.setState({
                activeTabIndex: 0
              })
            }
          />
          <Tab
            label='Favourites'
            {...a11yProps(1)}
            className={classes.tabText}
            onClick={() =>
              this.setState({
                activeTabIndex: 1
              })
            }
          />
          <Tab
            label='Archived'
            {...a11yProps(2)}
            className={classes.tabText}
            onClick={() =>
              this.setState({
                activeTabIndex: 2
              })
            }
          />
        </Tabs>
        <TeamMain
          value={activeTabIndex}
          index={0}
          handleFavChange={this.handleFavChange}
        >
          {teamsState}
        </TeamMain>
        <TeamMain
          value={activeTabIndex}
          index={1}
          handleFavChange={this.handleFavChange}
        >
          {favState}
        </TeamMain>
        <TeamMain
          value={activeTabIndex}
          index={2}
          handleFavChange={this.handleFavChange}
        >
          {archivedState}
        </TeamMain>
      </div>
    );
  }
}

export default withStyles(styles)(SimpleTabs);

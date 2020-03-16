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

  handleArchivedChange = teamID => {
    const updated = this.state.teamsState;
    const old = updated[teamID - 1].is_archived;
    updated[teamID - 1].is_archived = !old;
    this.setState({
      teamsState: updated
    });

    this.props.handleActivityChange({
      id: data.activities.length + 1,
      person: {
        id: data.activities.length + 1,
        name: 'Julie',
        avatar:
          'https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139'
      },
      action: 'increased_quota',
      target: 'Indeed - US',
      created_at: '2 hours ago'
    });
  };

  handleChange = value => {
    this.setState({ activeTabIndex: value });
  };

  render() {
    const { classes, searchName } = this.props;
    const { activeTabIndex, teamsState } = this.state;

    const filteredState = teamsState.filter(eachTeam => {
      return eachTeam.name.includes(searchName);
    });

    const favState = filteredState.filter(eachTeam => {
      return eachTeam.is_favorited;
    });

    const archivedState = filteredState.filter(eachTeam => {
      return eachTeam.is_archived;
    });

    return (
      <div className={classes.root}>
        <Tabs value={activeTabIndex} indicatorColor={'primary'}>
          <Tab
            label='All'
            {...a11yProps(0)}
            className={classes.tabText}
            onClick={() => this.handleChange(0)}
          />
          <Tab
            label='Favourites'
            {...a11yProps(1)}
            className={classes.tabText}
            onClick={() => this.handleChange(1)}
          />
          <Tab
            label='Archived'
            {...a11yProps(2)}
            className={classes.tabText}
            onClick={() => this.handleChange(2)}
          />
        </Tabs>
        <TeamMain
          value={activeTabIndex}
          index={0}
          handleFavChange={this.handleFavChange}
          handleArchivedChange={this.handleArchivedChange}
        >
          {filteredState}
        </TeamMain>
        <TeamMain
          value={activeTabIndex}
          index={1}
          handleFavChange={this.handleFavChange}
          handleArchivedChange={this.handleArchivedChange}
        >
          {favState}
        </TeamMain>
        <TeamMain
          value={activeTabIndex}
          index={2}
          handleFavChange={this.handleFavChange}
          handleArchivedChange={this.handleArchivedChange}
        >
          {archivedState}
        </TeamMain>
      </div>
    );
  }
}

export default withStyles(styles)(SimpleTabs);

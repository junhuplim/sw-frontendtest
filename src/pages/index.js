import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TopNavBar from '../components/TopNavBar';
import SideNavBar from '../components/SideNavBar';
import TeamMain from '../components/TeamMain';
import ActivityCard from '../components/ActivityCard';
import { data } from '../data';

const useStyles = makeStyles({
  mainContainer: {
    backgroundColor: '#E5E5E5',
    flexGrow: 1
  },
  bigContainer: {
    flex: '1'
  },
  bodyContainer: {
    flex: '1'
  }
});

const IndexPage = () => {
  const classes = useStyles();

  const states = ['all', 'favourites', 'archived'];
  const [state, setState] = React.useState(0);

  const handleChange = (event, newValue) => {
    setState(newValue);
  };

  const cardsState = data.teams.filter(eachTeam => {
    if (states[state] === 'all') {
      return true;
    } else if (states[state] === 'favourites') {
      return eachTeam.is_favorited;
    } else {
      return eachTeam.is_archived;
    }
  });

  return (
    <div className={classes.mainContainer}>
      <Grid container>
        <Grid>
          <SideNavBar />
        </Grid>
        <Grid sm={12} className={classes.bigContainer}>
          <TopNavBar handleChange={handleChange} />
          <Grid container className={classes.bodyContainer}>
            <Grid sm={8}>
              <TeamMain cardsState={cardsState} />
            </Grid>
            <Grid sm={4}>
              <ActivityCard activitiesList={data.activities} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default IndexPage;

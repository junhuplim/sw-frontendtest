import React from 'react';
import { Grid } from '@material-ui/core';
import {
  createMuiTheme,
  withStyles,
  ThemeProvider
} from '@material-ui/core/styles';
import TopNavBar from '../components/TopNavBar';
import SideNavBar from '../components/SideNavBar';
import TeamMain from '../components/TeamMain';
import ActivityCard from '../components/ActivityCard';
import SimpleTabs from '../components/SimpleTabs';
import { data } from '../data';

const styles = theme => ({
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

const theme = createMuiTheme({
  palette: {
    primary: { main: '#40D2BF' },
    secondary: { main: '#ffff00' }
  }
});

class IndexPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <div className={classes.mainContainer}>
          <Grid container>
            <Grid>
              <SideNavBar />
            </Grid>
            <Grid sm={12} className={classes.bigContainer}>
              <TopNavBar />
              <Grid container className={classes.bodyContainer}>
                <Grid sm={8}>
                  <SimpleTabs />
                </Grid>
                <Grid sm={4}>
                  <ActivityCard activitiesList={data.activities} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    );
  }
}
export default withStyles(styles)(IndexPage);

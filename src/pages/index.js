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
    backgroundColor: '#E5E5E5'
    // flex: '1'
  },
  bigContainer: {
    flex: 1
  },
  bodyContainer: {
    // flex: '1'
  }
});

const theme = createMuiTheme({
  palette: {
    primary: { main: '#40D2BF' },
    secondary: { main: '#ffff00' }
  }
});

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: '',
      activitiesList: data.activities
    };
  }

  handleChange = event => {
    this.setState({
      searchName: event.target.value
    });
  };

  handleActivityChange = newActivity => {
    this.setState({
      activitiesList: [newActivity, ...this.state.activitiesList]
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <div className={classes.mainContainer}>
          <Grid container>
            <SideNavBar />
            <Grid sm={12} className={classes.bigContainer}>
              <TopNavBar handleChange={this.handleChange} />
              <Grid container className={classes.bodyContainer}>
                <Grid sm={8}>
                  <SimpleTabs
                    searchName={this.state.searchName}
                    handleActivityChange={this.handleActivityChange}
                  />
                </Grid>
                <Grid sm={4}>
                  <ActivityCard activitiesList={this.state.activitiesList} />
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

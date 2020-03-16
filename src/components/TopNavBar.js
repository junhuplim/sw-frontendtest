import React, { Component } from 'react';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import SimpleTabs from './SimpleTabs';
import menu from '../images/menu.png';
import john from '../images/john.png';
import team from '../images/companies.png';

const styles = theme => ({
  container: {
    backgroundColor: 'white',
    maxHeight: '80px'
  },
  lowerContainer: {
    backgroundColor: 'white',
    height: '70px',
    paddingTop: '20px',
    paddingLeft: '40px'
  },
  company: {
    textAlign: 'center',
    fontFamily: 'ProximaNova',
    fontStyle: 'Semibold',
    fontSize: '18px',
    opacity: '50%',
    paddingTop: '25px'
  },
  menu: {
    justifyContent: 'space-between',
    paddingLeft: '80px'
  },
  header: {
    fontFamily: 'ProximaNova',
    fontStyle: 'Regular',
    fontSize: '24px',
    paddingTop: '20px'
  },
  image: {
    paddingTop: '20px'
  },
  title: {
    fontFamily: 'ProximaNova',
    fontStyle: 'Bold',
    fontSize: '28px',
    paddingLeft: '10px'
  },
  button: {
    color: 'white'
  },
  box: {
    backgroundColor: 'white'
  },
  profile: {
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: '10px',
    paddingLeft: '70px'
  },
  profileText: {
    paddingTop: '10px',
    paddingRight: '10px',
    fontSize: '14px'
  },
  textfieldBox: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  textfield: {
    paddingBottom: '10px'
  }
});

class TopNavBar extends React.Component {
  render() {
    const { classes, handleChange } = this.props;

    return (
      <React.Fragment>
        <Grid container className={classes.container}>
          <Grid sm={1} className={classes.company}>
            NARWHAL
          </Grid>
          <Divider orientation='vertical' flexItem />
          <Grid container sm={10} className={classes.menu}>
            <Grid sm={9}>
              <Typography className={classes.header}>Teams</Typography>
            </Grid>
            <Grid container sm={3} className={classes.profile}>
              <Grid item sm={3}>
                <img src={menu} height='30' width='30' alt='menu' />
              </Grid>
              <Grid item sm={6}>
                <Typography className={classes.profileText}>
                  Hello, John
                </Typography>
              </Grid>
              <Grid item sm={3}>
                <img src={john} height='36' width='36' alt='profile' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider variant='middle' />
        <Grid container className={classes.lowerContainer}>
          <Grid container sm={9}>
            <img src={team} height='35' width='35' alt='team' />
            <Typography className={classes.title}>Teams</Typography>
          </Grid>
          <Grid sm={3}>
            <Button
              variant='contained'
              color='primary'
              className={classes.button}
              startIcon={<AddIcon />}
            >
              Create New Team
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.box}>
          <Grid container sm={11} className={classes.textfieldBox}>
            <SearchIcon />
            <TextField
              id='search'
              label='Search Team name..'
              size='small'
              className={classes.textfield}
              InputProps={{
                disableUnderline: true
              }}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(TopNavBar);

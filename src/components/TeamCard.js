import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import Leads from '../images/leads.png';
import Conversations from '../images/conversations.png';
import ClampLines from 'react-clamp-lines';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  cardContainer: {
    paddingRight: '10px',
    paddingLeft: '10px'
  },
  root: {
    height: '180px',
    marginBottom: '10px'
  },
  container: {
    paddingTop: '10px',
    paddingLeft: '10px',
    paddingRight: '10px'
  },
  body: {
    fontSize: '14px',
    fontFamily: 'ProximaNova',
    textAlign: 'center',
    lineHeight: '1.5',
    height: '60px',
    paddingLeft: '5px',
    paddingRight: '5px'
  },
  created: {
    fontSize: '13px',
    opacity: '50%',
    fontFamily: 'ProximaNova'
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold'
  },
  actionsText: {
    fontSize: '9px',
    fontFamily: 'ProximaNova',
    paddingTop: '5px'
  }
});

class TeamCard extends React.Component {
  render() {
    const {
      id,
      name,
      image,
      created,
      description,
      classes,
      campaignsCount,
      leadsCount,
      handleFavChange,
      isFavorited
    } = this.props;

    const handleOnClick = () => {
      handleFavChange(id);
    };

    return (
      <Grid sm={4} className={classes.cardContainer}>
        <Card className={classes.root} variant='outlined'>
          <Grid container className={classes.container}>
            <Grid item sm={2}>
              <img src={image} height='30' width='30' alt='logo' />
            </Grid>
            <Grid item sm={8}>
              <Typography className={classes.title}>{name}</Typography>
              <Typography className={classes.created}>
                Created on {created}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <IconButton onClick={() => handleOnClick()}>
                {isFavorited ? <StarIcon color='secondary' /> : <StarIcon />}
              </IconButton>
            </Grid>
          </Grid>
          <Grid>
            <ClampLines
              text={description}
              id={id}
              lines={2}
              ellipsis='...'
              className={classes.body}
              innerElement='p'
              buttons={false}
            />
          </Grid>
          <Divider variant='middle' />
          <CardActions>
            <Grid container sm={12}>
              <Button size='small'>
                <img src={Conversations} alt='campaignLogo' />
              </Button>
              <Typography className={classes.actionsText}>
                {campaignsCount} Campaigns
              </Typography>
              <Button size='small'>
                <img src={Leads} alt='leadsLogo' />
              </Button>
              <Typography className={classes.actionsText}>
                {leadsCount} Leads
              </Typography>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(TeamCard);

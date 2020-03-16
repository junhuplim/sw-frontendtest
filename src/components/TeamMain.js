import React, { Component } from 'react';
import TeamCard from './TeamCard';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  // container: {
  //   backgroundColor: '#E5E5E5'
  // },
  paper: {
    padding: theme.spacing(3, 2)
    // marginTop: theme.spacing(6)
  },
  row: {
    paddingTop: '30px',
    justifyContent: 'space-evenly'
  },
  title: {
    fontSize: '18px',
    fontFamily: 'ProximaNova',
    fontWeight: 'bold',
    paddingBottom: '10px',
    paddingLeft: '15px'
  }
});

class TeamMain extends React.Component {
  render() {
    const {
      children,
      classes,
      value,
      index,
      handleFavChange,
      handleArchivedChange
    } = this.props;

    const cardsList = children.map(card => {
      return (
        <TeamCard
          id={card.id}
          name={card.name}
          image={card.image}
          description={card.description}
          created={card.created_at}
          campaignsCount={card.campaigns_count}
          leadsCount={card.leads_count}
          isFavorited={card.is_favorited}
          isArchived={card.is_archived}
          handleArchivedChange={handleArchivedChange}
          handleFavChange={handleFavChange}
        />
      );
    });
    return (
      <div className={classes.container} hidden={value !== index}>
        <Paper className={classes.paper}>
          <Grid>
            <Typography className={classes.title}>
              {value === 0 ? (
                <div> All Teams </div>
              ) : value === 1 ? (
                <div> Favourites </div>
              ) : (
                <div> Archived </div>
              )}
            </Typography>
          </Grid>
          <Divider variant='middle' />
          {/* {value === index && ( */}
          <Grid container sm={12} className={classes.row}>
            {cardsList}
          </Grid>
          {/* )} */}
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(TeamMain);

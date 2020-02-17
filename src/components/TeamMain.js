import React from "react"
import TeamCard from "./TeamCard"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    marginLeft: theme.spacing(6),
    marginTop: theme.spacing(6),
  },
  row: {
    paddingTop: "30px",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: "18px",
    fontFamily: "ProximaNova",
    fontWeight: "bold",
    paddingBottom: "10px",
    paddingLeft: "15px",
  },
}))

const TeamMain = ({ cardsState }) => {
  const classes = useStyles()
  const cardsList = cardsState.map(card => {
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
      />
    )
  })
  return (
    <Paper className={classes.paper}>
      <Grid>
        <Typography className={classes.title}> All Teams </Typography>
      </Grid>
      <Divider variant="middle" />
      <Grid container className={classes.row}>
        {cardsList}
      </Grid>
    </Paper>
  )
}

export default TeamMain

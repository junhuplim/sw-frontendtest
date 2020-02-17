import React from "react"
import Activity from "./Activity"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    marginLeft: theme.spacing(6),
    marginTop: theme.spacing(6),
    width: "300px",
  },
  title: {
    fontFamily: "ProximaNova",
    fontStyle: "Semibold",
    fontSize: "20px",
    paddingBottom: "10px",
  },
}))

const ActivityCard = ({ activitiesList }) => {
  const classes = useStyles()
  const activities = activitiesList.map(activity => {
    return (
      <Activity
        id={activity.id}
        name={activity.person.name}
        image={activity.person.avatar}
        action={activity.action}
        target={activity.target}
        created={activity.created_at}
      />
    )
  })
  return (
    <Paper className={classes.paper}>
      <Typography className={classes.title}> Activity</Typography>
      <Divider variant="middle" />
      {activities}
    </Paper>
  )
}

export default ActivityCard

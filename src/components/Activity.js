import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: "10px",
  },
  activity: {
    paddingTop: "5px",
    paddingLeft: "10px",
    fontFamily: "ProximaNova",
    fontSize: "14px",
    lineHeight: "17px",
    width: "70%",
  },
  date: {
    fontFamily: "ProximaNova",
    fontStyle: "Regular",
    fontSize: "13px",
    opacity: "50%",
  },
}))

const Activity = props => {
  const classes = useStyles()
  const formActivity = () => {
    if (props.action === "increased_quota") {
      return "increased " + props.target + "'s quota."
    } else if (props.action === "added_leads") {
      return "added new leads to " + props.target + "."
    } else {
      return "archived the team " + props.target + "."
    }
  }

  return (
    <Grid container className={classes.container}>
      <img src={props.image} height="30" width="30" alt="avatar" />
      <Grid className={classes.activity}>
        {props.name} {formActivity()}
        <div className={classes.date}>{props.created}</div>
      </Grid>
    </Grid>
  )
}

export default Activity

import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  tabText: {
    color: "black",
    fontFamily: "futura",
    fontStyle: "Semibold",
    fontSize: "18px",
  },
}))

const SimpleTabs = ({ handleChange }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Tabs onChange={handleChange} indicatorColor={"primary"}>
        <Tab label="All" className={classes.tabText} />
        <Tab label="Favourites" className={classes.tabText} />
        <Tab label="Archived" className={classes.tabText} />
      </Tabs>
    </div>
  )
}

export default SimpleTabs

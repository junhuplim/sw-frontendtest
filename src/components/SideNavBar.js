import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Grid } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  bar: {
    height: "100%",
    minHeight: "100vh",
    width: "80px",
    backgroundColor: "#042235",
  },
  logo: {
    height: "80%",
    width: "80%",
  },
  logoBox: {
    justifyContent: "center",
    marginBottom: "15px",
  },
}))

const SideNavBar = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      d1: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      d2: file(relativePath: { eq: "menu-campaigns.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      d3: file(relativePath: { eq: "menu-contacts.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      d4: file(relativePath: { eq: "menu-reports.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const iconsList = [
    {
      name: "Logo",
      logo: data.d1.childImageSharp.fluid,
    },
    {
      name: "Campaigns",
      logo: data.d2.childImageSharp.fluid,
    },
    {
      name: "Contacts",
      logo: data.d3.childImageSharp.fluid,
    },
    {
      name: "Reports",
      logo: data.d4.childImageSharp.fluid,
    },
  ]

  const allIcons = iconsList.map(eachIcon => {
    return (
      <Grid container className={classes.logoBox}>
        <Img fluid={eachIcon.logo} className={classes.logo}></Img>
      </Grid>
    )
  })

  return (
    <Grid className={classes.bar}>
      <div> {allIcons}</div>
    </Grid>
  )
}

export default SideNavBar

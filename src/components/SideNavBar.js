import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  bar: {
    height: '100%',
    minHeight: '100vh',
    width: '80px',
    backgroundColor: '#042235'
  },
  logo: {
    // height: '80%',
    // width: '80%'
  },
  logoBox: {
    justifyContent: 'center',
    marginBottom: '15px'
  }
}));

const SideNavBar = () => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      d1: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      d2: file(relativePath: { eq: "menu-campaigns.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      d3: file(relativePath: { eq: "menu-contacts.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      d4: file(relativePath: { eq: "menu-reports.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const iconsList = [
    {
      name: 'Logo',
      logo: data.d1.childImageSharp.fixed
    },
    {
      name: 'Campaigns',
      logo: data.d2.childImageSharp.fixed
    },
    {
      name: 'Contacts',
      logo: data.d3.childImageSharp.fixed
    },
    {
      name: 'Reports',
      logo: data.d4.childImageSharp.fixed
    }
  ];

  const allIcons = iconsList.map(eachIcon => {
    return (
      <Grid container className={classes.logoBox}>
        <Img fixed={eachIcon.logo} className={classes.logo}></Img>
      </Grid>
    );
  });

  return (
    <Grid className={classes.bar}>
      <div> {allIcons}</div>
    </Grid>
  );
};

export default SideNavBar;

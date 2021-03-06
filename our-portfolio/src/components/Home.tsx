import React from "react";
import { ReactComponent as PlanetLogo } from "../assets/saturn planet 2.svg";
import {
  makeStyles,
  Grid,
  Divider,
  Paper,
} from "@material-ui/core";
import { LinkedIn } from "../components/LinkedIn";
import { Skills } from '../components/Skills'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  transitionGroup: {
    position: "relative",
    width: 50,
    height: 50,
    animation: "$slideDown 5s infinite",
  },
  section: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  "@keyframes slideDown": {
    from: { top: "0px" },
    to: { top: "200px" },
  },
  //   "@keyframes breathe": {
  //     "0%": {
  //         backgroundImage: "100%",
  //         auto
  //     }
  //   }
}));

//Re render occurs upon a change to a state either via the useState hook or setState function(you need a class to access this function).

export const Home: React.FC = () => {
  const props = { height: 50, width: 50 };
  const classes = useStyles(props);
  const url = '' // add in profile url. it is after the /in. This could be extrated via regex
  const vanity = '' // Add in vanity.
  const skills: string[] = [] // Add in skills as separated string. 
  return ( 
    <div>
      <h1>This is the homepage.</h1>
      { url && <LinkedIn url={url} vanity={vanity}/> }
      <Divider />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <h2> These are my programming skills</h2>
            {skills.length > 0 && <Skills skills={skills}/>}
          </Paper>
        </Grid>
      </Grid>
      <div className={classes.transitionGroup} style={{width: "200px", height: "200px"}}>
                <PlanetLogo></PlanetLogo>
            </div>
    </div>
  );
};

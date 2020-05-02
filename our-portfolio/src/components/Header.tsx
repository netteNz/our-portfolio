import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      color: "red"
    },
    navlinks: {
      color: "white",
      paddingLeft: theme.spacing(1)
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 0,
    },
  }));
  
  
  export const Header: React.FC = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
          <Typography>
          <Link className={classes.navlinks} to="/" onClick={ () => {console.log('hey')}} >
            Home
          </Link>
          <Link className={classes.navlinks} to="/about" >
            About
          </Link>
        </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
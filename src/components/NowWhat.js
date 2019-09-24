import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import GraphView from "./funcCompon/GraphView";
import Dashboard from "./funcCompon/Dashboard";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "90vh",
    paddingTop: 100
  }
}));

export default () => {
  const [spacing] = React.useState(2);
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={4}>
        <Grid container justify="center" spacing={spacing}>
          <Dashboard />
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <Grid container justify="center" spacing={spacing}>
          <GraphView />
        </Grid>
      </Grid>
    </Grid>
  );
};

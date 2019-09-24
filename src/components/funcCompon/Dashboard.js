import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "../CardHeader";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, createStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  root: {
    backgroundColor: "e0e0e0"
  }
});
const handleListItemClick = () => {
  // do something
};

function Dashboard() {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader title="DashBoard" />
      <CardContent>
        <List>
          <ListItem button>
            <ListItemText
              onClick={event => handleListItemClick(event, 0)}
              primary="tubingPressure"
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              onClick={event => handleListItemClick(event, 0)}
              primary="flareTemp"
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              onClick={event => handleListItemClick(event, 0)}
              primary="injValveOpen"
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              onClick={event => handleListItemClick(event, 0)}
              primary="oilTemp"
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              onClick={event => handleListItemClick(event, 0)}
              primary="casingPressure"
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              onClick={event => handleListItemClick(event, 0)}
              primary="waterTemp"
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

export default Dashboard;

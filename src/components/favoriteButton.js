import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "": {
      margin: theme.spacing(1)
    }
  }
}));

export default function FavoriteButton() {
  const classes = useStyles();

  return (
    <span className={classes.root}>
      <Link to="/favorite">
        <Button variant="contained" color="primary">
          즐겨찾기
        </Button>
      </Link>
    </span>
  );
}

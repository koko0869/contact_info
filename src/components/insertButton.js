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

export default React.memo(function InsertButton() {
  const classes = useStyles();

  return (
    <span className={classes.root}>
      <Link to="/insert">
        <Button variant="contained" color="primary">
          추가
        </Button>
      </Link>
    </span>
  );
});

import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const backMove = () => {
  return (
    <Link to="/">
      <Button variant="outlined" size="small">
        돌아가기
      </Button>
    </Link>
  );
};

export default backMove;

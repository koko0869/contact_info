import React from "react";
import Button from "@material-ui/core/Button";

const saveButton = ({ onSubmit }) => {
  return (
    <Button variant="outlined" size="small" onClick={onSubmit} color="primary">
      등록
    </Button>
  );
};

export default saveButton;

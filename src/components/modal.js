import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default React.memo(function TransitionsModal({
  id,
  name,
  phone,
  onClickUpdate,
  onChange
  // onChangeName,
  // onChangePhone
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" color="primary" onClick={handleOpen}>
        수정
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">수정하기</h2>
            <p id="transition-modal-description"></p>
            <div>
              <TextField
                id="standard-basic"
                label="이름"
                name="name"
                onChange={onChange}
              />
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="전화번호"
                name="phone"
                onChange={onChange}
              />
            </div>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              onClick={() => onClickUpdate(id, handleClose)}
            >
              수정
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
});

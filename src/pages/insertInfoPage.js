import React from "react";
import BackMove from "../components/backMove";
import SaveBtn from "../components/saveButton";
import TextField from "@material-ui/core/TextField";

const insertInfoPage = ({ onChange, onSubmit }) => {
  return (
    <div>
      <h3>추가하기</h3>

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
          name="phone"
          id="standard-basic"
          label="전화번호"
          onChange={onChange}
        />
      </div>
      <BackMove />
      <SaveBtn onSubmit={onSubmit} />
    </div>
  );
};

export default insertInfoPage;

import React from "react";
import BackMove from "../components/backMove";
import SaveBtn from "../components/saveButton";
import TextField from "@material-ui/core/TextField";

const insertInfoPage = ({ onChangeName, onChangePhone, onSubmit }) => {
  return (
    <div>
      <h3>추가하기</h3>

      <div>
        <TextField id="standard-basic" label="이름" onChange={onChangeName} />
      </div>
      <div>
        <TextField
          id="standard-basic"
          label="전화번호"
          onChange={onChangePhone}
        />
      </div>
      <BackMove />
      <SaveBtn onSubmit={onSubmit} />
    </div>
  );
};

export default insertInfoPage;

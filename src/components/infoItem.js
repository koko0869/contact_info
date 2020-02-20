import React from "react";
import Modal from "../components/modal";

const infoItem = ({
  info,
  onRemove,
  onFavorite,
  onChangeName,
  onChangePhone,
  onClickUpdate
}) => {
  const { id, name, phone, favorite } = info;
  return (
    <div>
      <div>이름 : {name}</div>
      <div>번호: {phone}</div>
      <div>
        즐겨찾기 :{favorite ? "o" : "x"}
        <input type="checkBox" onClick={() => onFavorite(id)} />
        <Modal
          id={id}
          name={name}
          phone={phone}
          onClickUpdate={onClickUpdate}
          onChangeName={onChangeName}
          onChangePhone={onChangePhone}
        />
        <div>
          <button onClick={() => onRemove(id)}>삭제</button>
        </div>
      </div>
    </div>
  );
};

export default infoItem;

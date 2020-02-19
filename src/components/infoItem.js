import React from "react";

const infoItem = ({ info, onRemove, onFavorite }) => {
  const { id, name, phone, favorite } = info;
  return (
    <div>
      <div>이름 : {name}</div>
      <div>번호: {phone}</div>
      <div>
        즐겨찾기 :{favorite ? "o" : "x"}
        <input type="checkBox" onClick={() => onFavorite(id)} />
        <button onClick={() => onRemove(id)}>삭제</button>
      </div>
    </div>
  );
};

export default infoItem;

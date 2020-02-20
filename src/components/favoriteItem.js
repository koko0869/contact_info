import React from "react";

const favoriteItem = ({ info }) => {
  const { name, phone, favorite } = info;
  return (
    <div>
      <div>
        {favorite === true ? (
          <div>
            <div>이름 : {name}</div>
            <div>번호: {phone}</div>
          </div>
        ) : (
          <div>{""}</div>
        )}
      </div>
    </div>
  );
};

export default favoriteItem;

import React from "react";
import InfoItem from "../components/infoItem";
import { Link } from "react-router-dom";

const mainPage = ({ infos, onRemove, onFavorite }) => {
  return (
    <div>
      {infos.map(info => (
        <InfoItem
          info={info}
          key={info.id}
          onRemove={onRemove}
          onFavorite={onFavorite}
        />
      ))}

      <Link to="/insert">추가하기</Link>
      <Link to="/favorite">즐겨찾기로 이동</Link>
    </div>
  );
};

export default mainPage;

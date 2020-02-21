import React from "react";
import FavoriteItem from "../components/favoriteItem";
import BackMove from "../components/backMove";

const favoritePage = ({ infos }) => {
  return (
    <div>
      <h3>즐겨찾기 리스트</h3>
      <FavoriteItem infos={infos} />
      <BackMove />
    </div>
  );
};

export default favoritePage;

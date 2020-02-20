import React from "react";
import FavoriteItem from "../components/favoriteItem";

const favoritePage = ({ infos }) => {
  return (
    <div>
      {infos.map((info, index) => (
        <FavoriteItem info={info} key={index} />
      ))}
    </div>
  );
};

export default favoritePage;

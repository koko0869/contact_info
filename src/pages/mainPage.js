import React from "react";
import SearchInput from "../components/searchInput";
import InsertButton from "../components/insertButton";
import FavoriteButton from "../components/favoriteButton";
import ItemCard from "../components/itemCard";

const mainPage = ({
  infos,
  onRemove,
  onFavorite,
  onSearch,
  search,
  onClickUpdate,
  onChangeName,
  onChangePhone
}) => {
  return (
    <div>
      <FavoriteButton /> <InsertButton />
      <SearchInput onSearch={onSearch} keyword={search} />
      {
        (infos = infos
          .filter(info => {
            return info.name.indexOf(search) !== -1;
          })
          .map(info => (
            <ItemCard
              info={info}
              key={info.id}
              onRemove={onRemove}
              onFavorite={onFavorite}
              onClickUpdate={onClickUpdate}
              onChangeName={onChangeName}
              onChangePhone={onChangePhone}
            />
          )))
      }
    </div>
  );
};

export default mainPage;

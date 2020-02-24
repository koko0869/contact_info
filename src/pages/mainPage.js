import React, { useMemo } from "react";
import SearchInput from "../components/searchInput";
import InsertButton from "../components/insertButton";
import FavoriteButton from "../components/favoriteButton";
import ItemCard from "../components/itemCard";

const mainPage = ({
  infos,
  onRemove,
  onFavorite,
  onChange,
  search,
  onClickUpdate
}) => {
  function countUser(infos) {
    return infos.length;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const count = useMemo(() => countUser(infos), [infos]);
  return (
    <div>
      <FavoriteButton /> <InsertButton />
      <SearchInput onChange={onChange} keyword={search} />
      <h4>모든 연락처 : {count}</h4>
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
              // onChangeName={onChangeName}
              // onChangePhone={onChangePhone}
              onChange={onChange}
            />
          )))
      }
    </div>
  );
};

export default mainPage;

import React from "react";
import InfoItem from "../components/infoItem";
import { Link } from "react-router-dom";
import SearchInput from "../components/searchInput";

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
      <SearchInput onSearch={onSearch} keyword={search} />

      {
        (infos = infos
          .filter(info => {
            return info.name.indexOf(search) !== -1;
          })
          .map(info => (
            <InfoItem
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

      <Link to="/insert">
        <h3>추가하기</h3>
      </Link>
      <Link to="/favorite">
        <h3>즐겨찾기로 이동</h3>
      </Link>
    </div>
  );
};

export default mainPage;

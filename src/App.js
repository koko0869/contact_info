import React, { useState, useRef } from "react";
import { Route } from "react-router-dom";
import InsertPage from "./pages/insertInfoPage";
import MainPage from "./pages/mainPage";
import FavoritePage from "./pages/favoritePage";

const App = () => {
  const [infos, setInfos] = useState([
    {
      id: 1,
      name: "test1",
      phone: "010-1234-1234",
      favorite: true
    },
    {
      id: 2,
      name: "test2",
      phone: "010-2222-2222",
      favorite: false
    },
    {
      id: 3,
      name: "test3",
      phone: "010-3333-3333",
      favorite: true
    },
    {
      id: 4,
      name: "test4",
      phone: "010-4444-4444",
      favorite: true
    },
    {
      id: 5,
      name: "test5",
      phone: "010-5555-5555",
      favorite: false
    }
  ]);
  const allList = useRef(true);
  const nextId = useRef(6);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [search, setSearch] = useState("");

  const onChangeName = e => {
    setName(e.target.value);
  };
  const onChangePhone = e => {
    setPhone(e.target.value);
  };
  const onSearch = e => {
    setSearch(e.target.value);
  };

  const onInsert = (name, phone) => {
    const info = {
      id: nextId.current,
      name,
      phone,
      favorite: false
    };
    setInfos(infos.concat(info));
    nextId.current += 1;
  };

  const onSubmit = e => {
    onInsert(name, phone);
    setName("");
    setPhone("");
    e.preventDefault();
    alert("저장되었습니다.");
  };

  const onFavorite = id => {
    setInfos(
      infos.map(info =>
        info.id === id ? { ...info, favorite: !info.favorite } : info
      )
    );
  };
  const onClickTotal = () => {
    allList.current = true;
  };

  const onRemove = id => {
    setInfos(infos.filter(info => info.id !== id));
  };

  const onClickUpdate = (idx, handleClose) => {
    setInfos([
      ...infos.slice(0, idx - 1),
      {
        id: idx,
        name: name,
        phone: phone,
        favorite: false
      },
      ...infos.slice(idx, infos.length)
    ]);

    alert("수정완료");
    handleClose();
  };

  return (
    <div align="center">
      <h1>연락처</h1>
      <Route
        path="/"
        exact
        render={() => (
          <MainPage
            infos={infos}
            onSearch={onSearch}
            onRemove={onRemove}
            onFavorite={onFavorite}
            search={search}
            allList={allList}
            onClickTotal={onClickTotal}
            onClickUpdate={onClickUpdate}
            onChangeName={onChangeName}
            onChangePhone={onChangePhone}
          />
        )}
      />
      <Route
        path="/insert"
        exact
        render={() => (
          <InsertPage
            infos={infos}
            onChangeName={onChangeName}
            onChangePhone={onChangePhone}
            onInsert={onInsert}
            onSubmit={onSubmit}
          />
        )}
      />
      <Route
        path="/favorite"
        exact
        render={() => <FavoritePage infos={infos} />}
      />
    </div>
  );
};

export default App;

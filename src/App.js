import React, { useState, useRef, useCallback } from "react";
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
  const nextId = useRef(6);

  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    search: ""
  });

  const { name, phone, search } = inputs;

  const onChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onInsert = useCallback(
    (name, phone) => {
      const info = {
        id: nextId.current,
        name,
        phone,
        favorite: false
      };
      setInfos(infos.concat(info));
      nextId.current += 1;
    },
    [infos]
  );

  const onSubmit = e => {
    onInsert(name, phone);
    setInputs({
      name: "",
      phone: "",
      search
    });
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

  const onRemove = useCallback(
    id => {
      setInfos(infos.filter(info => info.id !== id));
    },
    [infos]
  );

  const onClickUpdate = useCallback(
    (idx, handleClose) => {
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
    },
    [infos]
  );

  return (
    <div align="center">
      <h1>연락처</h1>
      <Route
        path="/"
        exact
        render={() => (
          <MainPage
            infos={infos}
            onRemove={onRemove}
            onFavorite={onFavorite}
            search={search}
            onClickUpdate={onClickUpdate}
            onChange={onChange}
          />
        )}
      />
      <Route
        path="/insert"
        exact
        render={() => (
          <InsertPage
            infos={infos}
            onChange={onChange}
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

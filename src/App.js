import React, { useState, useCallback, useRef } from "react";
import { Route } from "react-router-dom";
import InsertPage from "./pages/insertInfoPage";
import MainPage from "./pages/mainPage";

const App = () => {
  const [infos, setInfos] = useState([
    {
      id: 1,
      name: "test1",
      phone: "010-1111-1111",
      favorite: false
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
      favorite: false
    },
    {
      id: 4,
      name: "test4",
      phone: "010-4444-4444",
      favorite: false
    }
  ]);
  const nextId = useRef(5);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const onChangeName = e => {
    setName(e.target.value);
    console.log(name);
  };
  const onChangePhone = e => {
    setPhone(e.target.value);
    console.log(phone);
  };

  const onInsert = (name, phone) => {
    const info = {
      id: nextId.current,
      name,
      phone,
      favorite: true
    };
    setInfos(infos.concat(info));
    nextId.current += 1;
  };

  const onSubmit = e => {
    onInsert(name, phone);
    setName("");
    setPhone("");
    e.preventDefault();
  };

  //토글나중에
  const onFavorite = id => {
    setInfos(
      infos.map(info =>
        info.id === id ? { ...info, favorite: !info.favorite } : info
      )
    );
  };

  const onRemove = id => {
    setInfos(infos.filter(info => info.id !== id));
  };

  return (
    <div>
      <h1>연락처</h1>
      <Route
        path="/"
        exact
        render={() => (
          <MainPage infos={infos} onRemove={onRemove} onFavorite={onFavorite} />
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
      {/* <Route path="/favorite" exact render= {() => (<Favorite/>)} */}
    </div>
  );
};

export default App;

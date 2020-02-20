import React  from "react";
import { Link } from "react-router-dom";
import BackMove from "../components/backMove";
import SaveBtn from "../components/saveButton";

const insertInfoPage = ({ onChangeName, onChangePhone, onSubmit }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [test, setTest] = useState(123);
  // setTest(1234);
  //console.log(test);
  return (
    <div>
      <h3>추가하기</h3>
      <div>
        이름 : <input name="name" onChange={onChangeName} />
      </div>
      <div>
        전화번호 : <input name="phone" onChange={onChangePhone} />
      </div>

      <Link to="/">
        <BackMove />
      </Link>
      <SaveBtn onSubmit={onSubmit} />
    </div>
  );
};

export default insertInfoPage;

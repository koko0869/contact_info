// import React from "react";

// const searchInput = ({ onSearch }) => {
//   return (
//     <div>
//       검색 : <input name="search" onChange={onSearch} />
//     </div>
//   );
// };

// export default searchInput;

import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TextField from "@material-ui/core/TextField";

export default React.memo(function InputWithIcon({ onChange }) {
  return (
    <div>
      <TextField
        name="search"
        onChange={onChange}
        label="검색"
        placeholder="이름"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          )
        }}
      />
    </div>
  );
});

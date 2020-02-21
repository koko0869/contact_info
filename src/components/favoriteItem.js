// import React from "react";

// const favoriteItem = ({ info }) => {
//   const { name, phone, favorite } = info;
//   return (
//     <div>
//       <div>
//         {favorite === true ? (
//           <div>
//             <div>이름 : {name}</div>
//             <div>번호: {phone}</div>
//           </div>
//         ) : (
//           <div>{""}</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default favoriteItem;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  table: {
    minWidth: 300
  }
});

function createData(name, phone) {
  return { name, phone };
}

// .filter(info => {
//   return info.name.indexOf(search) !== -1;
// })

export default function AcccessibleTable({ infos }) {
  const rows = (infos = infos.filter(info => {
    return (info.favorite === false) !== true;
  })).map((info, index) => {
    return createData(info.name, info.phone);
  });

  const classes = useStyles();

  return (
    <TableContainer className={classes.root} component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>이름</TableCell>
            <TableCell align="right">전화번호</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
